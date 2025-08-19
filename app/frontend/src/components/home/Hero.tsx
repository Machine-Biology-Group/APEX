import React, { useState } from 'react';

export function Hero() {
    const [sequence, setSequence] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'rate-limited'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isSequenceValid = (sequence: string) => sequence.trim().length > 0;

    const handleSubmit = async () => {
        setIsSubmitted(true);
        if (!isEmailValid(email) || !isSequenceValid(sequence)) return;
        setStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sequence, email })
            });

            if (!response.ok) {
                if (response.status === 429) {
                    // Rate limit exceeded
                    const errorData = await response.json();
                    setStatus('rate-limited');
                    setErrorMessage(errorData.message || 'Rate limit exceeded. Please try again later.');
                } else {
                    throw new Error('Request failed');
                }
                return;
            }

            setStatus('success');
            setSequence('');
            setEmail('');
            setIsSubmitted(false);
        } catch (error) {
            console.error('Failed to submit:', error);
            setStatus('error');
            setErrorMessage('Failed to submit. Please try again.');
        }
    };

    const getStatusMessage = () => {
        switch (status) {
            case 'error':
                return <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>;
            case 'rate-limited':
                return <p className="text-orange-500 text-sm mb-4 text-center">{errorMessage}</p>;
            case 'success':
                return <p className="text-green-500 text-sm mb-4 text-center">Successfully submitted!</p>;
            default:
                return null;
        }
    };

    return (
        <section className="h-[90vh] flex flex-col items-center justify-center px-4 mt-[-100px]">
            <h1 className="text-3xl text-gray-800 mb-8">Upload your sequence</h1>

            <div className="w-full max-w-2xl">
                <textarea
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                    className={`w-full h-24 p-3 mb-2 border border-primary-300 rounded-xl resize-none focus:outline-none focus:ring-2 ${isSubmitted && !isSequenceValid(sequence) ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your sequence here"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 mb-6  border border-primary-300 rounded-xl resize-none focus:outline-none focus:ring-2  ${isSubmitted && !isEmailValid(email) ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your email"
                />
                {getStatusMessage()}
                <button
                    onClick={handleSubmit}
                    className="bg-primary-500 w-60 text-white rounded-md px-8 py-3 font-semibold text-base mx-auto block hover:bg-opacity-90"
                >
                    Upload
                </button>
            </div>
        </section>
    );
} 