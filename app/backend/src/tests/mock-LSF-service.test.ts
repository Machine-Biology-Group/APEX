import mockLsfService from '../services/mock-LSF-service.js';
import { JobResult, JobStatus } from '../models/Job.js';
import fs from 'fs/promises';
import path from 'path';
import { testInputFolder, testOutputFolder } from './test-utils.js';

describe('Mock LSF Service', () => {
    let testInputFile: string;
    
    beforeEach(async () => {
        await fs.mkdir(testInputFolder, { recursive: true });
        await fs.mkdir(testOutputFolder, { recursive: true });
        const timestamp = new Date().getTime();
        testInputFile = path.join(testInputFolder, `input-${timestamp}.txt`);
        await fs.writeFile(testInputFile, 'test data');
    });

    afterEach(async () => {
        await fs.rm(testInputFolder, { recursive: true, force: true }).catch(console.warn);
        await fs.rm(testOutputFolder, { recursive: true, force: true }).catch(console.warn);
    });
    
    describe('submitJob', () => {
        it('should submit a job and return a job ID', async () => {
            const jobId = await mockLsfService.submitJob(testInputFile, testOutputFolder);
            expect(jobId).toBeDefined();
            expect(typeof jobId).toBe('string');
        });

        it('should throw error for non-existent input file', async () => {
            await expect(mockLsfService.submitJob(path.join(testInputFolder, 'non-existent-file'), testOutputFolder))
                .rejects.toThrow('Input file not found');
        });
    });
    
    describe('job status and results', () => {
        let jobId: string;
        
        beforeEach(async () => {
            jobId = await mockLsfService.submitJob(testInputFile, testOutputFolder);
        });

        it('should initially report job as not completed', async () => {
            const isCompleted = await mockLsfService.isJobCompleted(jobId, testOutputFolder);
            expect(isCompleted).toBe(false);
        });
        
        it('should return running status for incomplete job', async () => {
            const result = await mockLsfService.getJobResult(jobId, testOutputFolder);
            expect(result.status).toBe('running');
        });

        it('should eventually complete the job', async () => {
            const waitForCompletion = async () => {
                for (let i = 0; i < 10; i++) {
                    if (await mockLsfService.isJobCompleted(jobId, testOutputFolder)) return true;
                    await new Promise(resolve => setTimeout(resolve, 600));
                }
                return false;
            };

            expect(await waitForCompletion()).toBe(true);
        });
        
        it('should provide job results after completion', async () => {
            const waitForResult = async (): Promise<JobResult> => {
                for (let i = 0; i < 20; i++) {
                    const result = await mockLsfService.getJobResult(jobId, testOutputFolder);
                    if (result.status === JobStatus.COMPLETED) {
                        expect(result.outputFilePath?.startsWith(testOutputFolder)).toBe(true);
                        return result;
                    }
                    await new Promise(resolve => setTimeout(resolve, 200));
                }
                throw new Error('Job did not complete in time');
            };

            const result = await waitForResult();
            expect(result.status).toBe(JobStatus.COMPLETED);
            expect(result.outputFilePath).toBeDefined();

            // Wait a bit more to ensure file is written
            await new Promise(resolve => setTimeout(resolve, 200));

            const outputContent = await fs.readFile(result.outputFilePath!, 'utf-8');
            expect(outputContent).toContain('PROCESSED:');
        });
    });
    
    describe('error handling', () => {
        it('should throw error for non-existent job ID', async () => {
            await expect(mockLsfService.isJobCompleted('non-existent-id', testOutputFolder))
                .rejects.toThrow('Job not found');
                
            await expect(mockLsfService.getJobResult('non-existent-id', testOutputFolder))
                .rejects.toThrow('Job not found');
        });
    });
}); 