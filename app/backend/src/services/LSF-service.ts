import { LSFServiceInterface } from './interfaces/LSFServiceInterface.js';
import { JobResult, JobStatus } from '../models/Job.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';
import mockLsfService from "./mock-LSF-service.js";

const execAsync = promisify(exec);

const submitJob = async (inputFilePath: string, outputFilePath: string): Promise<string> => {
    await fs.access(inputFilePath);

    const command = createSubmitCommand(inputFilePath, outputFilePath);
    return await submitToLSF(command);
};

const isJobCompleted = async (jobId: string, outputDirectory: string): Promise<boolean> => {
    const { stdout } = await execAsync(`bjobs -noheader ${jobId}`);
    if (stdout.trim() === '') return true;
    return stdout.includes('DONE') || stdout.includes('EXIT');
};

const getJobResult = async (jobId: string, outputDirectory: string): Promise<JobResult> => {
    const isCompleted = await isJobCompleted(jobId, outputDirectory);
    
    if (!isCompleted) {
        return { status: JobStatus.RUNNING };
    }

    const outputFilePath = await findJobOutputFile(jobId, outputDirectory);
    if (!outputFilePath) {
        return {
            status: JobStatus.FAILED,
            errorMessage: 'Job output file not found'
        };
    }

    const logFilePath = `${outputFilePath}.log`;
    const jobStatus = await checkJobLogStatus(logFilePath);

    if (jobStatus.failed) {
        return {
            status: JobStatus.FAILED,
            errorMessage: 'Job failed, check LSF logs for details',
            outputFilePath: logFilePath
        };
    }

    return {
        status: JobStatus.COMPLETED,
        outputFilePath
    };
};

const checkJobOutputExists = async (jobId: string, outputDirectory: string): Promise<boolean> => {
    const outputFilePath = await findJobOutputFile(jobId, outputDirectory);
    if (!outputFilePath) return false;

    try {
        await fs.access(outputFilePath);
        return true;
    } catch {
        return false;
    }
};

const findJobOutputFile = async (jobId: string, outputDirectory: string): Promise<string | null> => {
    try {
        const files = await fs.readdir(outputDirectory);
        const outputFile = files.find(file => file.startsWith(`output-${jobId}`));
        return outputFile ? path.join(outputDirectory, outputFile) : null;
    } catch {
        return null;
    }
};

// Helper functions ----

const createSubmitCommand = (inputFilePath: string, outputFilePath: string): string => {
    return `bsub -q 9_lpcgpu -gpu num=1 -e /project/apexgpu_shared/logs/%J.err -o /project/apexgpu_shared/logs/%J.out python APEX_predict.py -i ${inputFilePath} -o ${outputFilePath}`;
};

const submitToLSF = async (command: string): Promise<string> => {
    const { stdout, stderr } = await execAsync(command);
    
    if (stderr && !stdout) {
        throw new Error(`LSF submission error: ${stderr}`);
    }

    const jobIdMatch = stdout.match(/Job <(\d+)>/);
    if (!jobIdMatch?.[1]) {
        throw new Error(`Could not parse job ID from LSF output: ${stdout}`);
    }

    return jobIdMatch[1];
};

const checkJobLogStatus = async (logFilePath: string): Promise<{ failed: boolean }> => {
    try {
        const logContent = await fs.readFile(logFilePath, 'utf-8');
        return { failed: logContent.includes('ERROR') || logContent.includes('FAILED') };
    } catch {
        return { failed: true };
    }
};

const lsfService: LSFServiceInterface = {
    submitJob,
    isJobCompleted,
    getJobResult,
    checkJobOutputExists,
    findJobOutputFile
};

const useMockLsf = false;

export default useMockLsf ? mockLsfService : lsfService;