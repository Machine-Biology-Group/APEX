import { LSFServiceInterface } from './interfaces/LSFServiceInterface.js';
import { JobResult, JobStatus } from '../models/Job.js';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const submitJob = async (inputFilePath: string, outputDirectory: string): Promise<string> => {
    try {
        await fs.access(inputFilePath);
    } catch (error) {
        throw new Error(`Input file not found: ${inputFilePath}`);
    }
    
    const jobId = crypto.randomUUID();
    const outputFilePath = await createOutputFilePath(inputFilePath, outputDirectory);
    
    jobs.set(jobId, {
        id: jobId,
        inputFilePath,
        outputFilePath,
        completed: false,
        startTime: new Date()
    });
    
    void processMockJob(jobId);
    return jobId;
};

const isJobCompleted = async (jobId: string, outputDirectory: string): Promise<boolean> => {
    const job = getJob(jobId);
    return job.completed;
};

const getJobResult = async (jobId: string, outputDirectory: string): Promise<JobResult> => {
    const job = getJob(jobId);
    
    if (!job.completed) {
        return {
            status: JobStatus.RUNNING
        };
    }
    
    return {
        status: JobStatus.COMPLETED,
        outputFilePath: job.outputFilePath
    };
};

const checkJobOutputExists = async (jobId: string, outputDirectory: string): Promise<boolean> => {
    const job = getJob(jobId);
    
    try {
        await fs.access(job.outputFilePath);
        return true;
    } catch {
        return false;
    }
};

const findJobOutputFile = async (jobId: string, outputDirectory: string): Promise<string | null> => {
    const job = jobs.get(jobId);
    if (!job) return null;
    
    try {
        await fs.access(job.outputFilePath);
        return job.outputFilePath;
    } catch {
        return null;
    }
};

// Helper functions ----

const DEFAULT_PROCESSING_TIME_MS = 1000;

const jobs = new Map<string, {
    id: string;
    inputFilePath: string;
    outputFilePath: string;
    completed: boolean;
    startTime: Date;
}>();

const getJob = (jobId: string) => {
    const job = jobs.get(jobId);
    if (!job) {
        throw new Error('Job not found');
    }
    return job;
};

const createOutputFilePath = async (inputFilePath: string, outputDirectory: string): Promise<string> => {
    const inputFileName = path.basename(inputFilePath);
    await fs.mkdir(outputDirectory, { recursive: true });
    return path.join(outputDirectory, `output-${inputFileName}`);
};

const processMockJob = async (jobId: string, processingTimeMs = DEFAULT_PROCESSING_TIME_MS): Promise<void> => {
    const job = getJob(jobId);
    
    await new Promise(resolve => setTimeout(resolve, processingTimeMs));
    
    try {
        const inputContent = await fs.readFile(job.inputFilePath, 'utf-8');
        const outputContent = `PROCESSED: ${inputContent}`;
        await fs.writeFile(job.outputFilePath, outputContent);
        job.completed = true;
    } catch (error) {
        job.completed = true;
    }
    
    jobs.set(jobId, job);
};

const mockLsfService: LSFServiceInterface = {
    submitJob,
    isJobCompleted,
    getJobResult,
    checkJobOutputExists,
    findJobOutputFile
};

export default mockLsfService; 