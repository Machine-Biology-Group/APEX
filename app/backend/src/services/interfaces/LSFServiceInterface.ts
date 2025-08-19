import { JobResult } from "../../models/Job.js";

export interface LSFServiceInterface {
    submitJob(inputFilePath: string, outputDirectory: string): Promise<string>;

    isJobCompleted(jobId: string, outputDirectory: string): Promise<boolean>;

    getJobResult(jobId: string, outputDirectory: string): Promise<JobResult>;


    checkJobOutputExists(jobId: string, outputDirectory: string): Promise<boolean>;

    findJobOutputFile(jobId: string, outputDirectory: string): Promise<string | null>;
} 