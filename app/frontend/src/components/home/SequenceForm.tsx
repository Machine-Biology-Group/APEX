import { FC, useState } from 'react';
import { FastaDropzone } from './Dropzone';
import { Loader2 } from 'lucide-react';

type InputType = 'text' | 'file' | null;

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || '';

export const SequenceForm: FC = () => {
    const [inputType, setInputType] = useState<InputType>(null);
    const [email, setEmail] = useState('');
    const [textContent, setTextContent] = useState('');
    const [fileContent, setFileContent] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async () => {
        if (!email) return;
        if (!textContent && !fileContent) return;
        
        setIsLoading(true);
        setStatus('idle');
        try {
            const endpoint = inputType === 'file' 
                ? `${BACKEND_BASE_URL}/sequence/submit-file`
                : `${BACKEND_BASE_URL}/sequence/submit-text`;

            const formData = new FormData();
            formData.append('email', email);
            
            if (inputType === 'file' && fileContent) {
                formData.append('file', fileContent);
            } else {
                formData.append('text', textContent);
            }

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Request failed');

            setStatus('success');
            setTextContent('');
            setFileContent(null);
            setEmail('');
            setInputType(null);
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setFileContent(null);
        setInputType(null);
        setStatus('idle');
    };

    if (isLoading) {
        return (
            <section className="h-[90vh] flex flex-col items-center justify-center px-4 mt-[-100px]">
                <div className="flex flex-col items-center justify-center">
                    <Loader2 className="animate-spin h-8 w-8 mb-4" />
                    <p>Submitting...</p>
                </div>
            </section>
        );
    }

    const showFileUpload = inputType === 'file' && !fileContent;
    const showTextArea = inputType !== 'file';
    const hasContent = textContent || fileContent;

    return (
        <section className="h-[90vh] flex flex-col items-center justify-center px-4 mt-[-100px]">
            <h1 className="text-3xl text-gray-800 mb-8">Upload your sequence</h1>
            
            <div className="w-full max-w-2xl space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-primary-300 rounded-xl resize-none focus:outline-none focus:ring-2 border-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {showTextArea && (
                    <div className="space-y-4">
                        <textarea
                            className="w-full h-24 p-3 border border-primary-300 rounded-xl resize-none focus:outline-none focus:ring-2 border-gray-200"
                            placeholder="Enter your sequence here..."
                            value={textContent}
                            onChange={(e) => {
                                setTextContent(e.target.value);
                                setInputType('text');
                            }}
                        />
                        <div className="text-center">
                            <p className="mb-2">- OR -</p>
                            <button
                                onClick={() => setInputType('file')}
                                className="bg-primary-500 text-white rounded-md px-8 py-3 font-semibold text-base hover:bg-opacity-90"
                            >
                                Upload FASTA file
                            </button>
                        </div>
                    </div>
                )}

                {showFileUpload && (
                    <FastaDropzone 
                        onFileSelect={(file) => setFileContent(file)} 
                        className="border-2 border-dashed rounded-xl p-8 border-primary-300"
                    />
                )}

                <div className="space-y-4">
                    {fileContent && (
                        <p className="text-sm text-center text-gray-600">
                            Selected file: {fileContent.name}
                        </p>
                    )}
                    
                    {status === 'error' && <p className="text-red-500 text-sm mb-4 text-center">Failed to submit. Please try again.</p>}
                    {status === 'success' && <p className="text-green-500 text-sm mb-4 text-center">Successfully submitted!</p>}
                    
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleSubmit}
                            disabled={!email || (!textContent && !fileContent)}
                            className="bg-primary-500 text-white rounded-md px-8 py-3 font-semibold text-base hover:bg-opacity-90 disabled:bg-opacity-50"
                        >
                            Submit
                        </button>
                        {inputType === 'file' && fileContent && (
                            <button
                                onClick={handleReset}
                                className="bg-gray-500 text-white rounded-md px-8 py-3 font-semibold text-base hover:bg-opacity-90"
                            >
                                Select Another
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}; 