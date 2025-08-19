import { FC, useState } from 'react';
import clsx from 'clsx';
import Dropzone, { FileRejection } from 'react-dropzone'
import { FileText, Loader2, MousePointerSquareDashed } from 'lucide-react'

export type DropzoneProps = {
    className?: string;
    onFileSelect?: (file: File) => void;
}

export const FastaDropzone: FC<DropzoneProps> = ({ className, onFileSelect }) => {
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;
        setIsDragOver(false);
        console.error(`${file.file.name} is not a valid FASTA file`);
    }
    
    const onDropAccepted = (acceptedFiles: File[]) => {
        const [file] = acceptedFiles;
        onFileSelect?.(file);
        setIsDragOver(false);
    }

    return (
        <div className={clsx("", className)}>
            <Dropzone
                onDropRejected={onDropRejected}
                onDropAccepted={onDropAccepted}
                accept={{
                    'application/fasta': ['.fasta'],
                    'text/plain': ['.fasta']
                }}
                onDragEnter={() => setIsDragOver(true)}
                onDragLeave={() => setIsDragOver(false)}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        className='h-full w-full flex-1 flex flex-col items-center justify-center'
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragOver ? (
                            <MousePointerSquareDashed className='h-6 w-6 text-muted-foreground mb-2' />
                        ) : isLoading ? (
                            <Loader2 className='animate-spin h-6 w-6 text-muted-foreground mb-2' />
                        ) : (
                            <FileText className='h-6 w-6 text-muted-foreground mb-2' />
                        )}
                        <div className='flex flex-col justify-center mb-2 text-sm text-foreground'>
                            {isLoading ? (
                                <div className='flex flex-col items-center'>
                                    <p>Processing...</p>
                                </div>
                            ) : isDragOver ? (
                                <p>
                                    <span className='font-semibold'>Drop file</span> to upload
                                </p>
                            ) : (
                                <p>
                                    <span className='font-semibold'>Click to upload</span> or
                                    drag and drop
                                </p>
                            )}
                        </div>

                        <p className='text-xs text-muted-foreground'>FASTA files only</p>
                    </div>
                )}
            </Dropzone>
        </div>
    );
};

