import React, {FC} from 'react';
import {Markdown} from "../dumb-components/Markdown";

export type AboutProps = {}

export const About: FC<AboutProps> = ({}) => {
    const content = `
## About us

De la Fuente Lab/Machine Biology Group

We use the power of machines to accelerate discoveries in biology and medicine

## CONTACT

Cesar de la Fuente, Ph.D. (cfuente@upenn.edu)

To apply to become a graduate student in the lab, please first apply to a Ph.D. program at the University of Pennsylvania. For other positions, please contact Prof. Cesar de la Fuente.

Website: [delafuentelab.seas.upenn.edu](https://delafuentelab.seas.upenn.edu/)
`;

    return (
        <div className="mx-auto max-w-4xl py-16 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">The Lab</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                <Markdown>{content}</Markdown>
            </div>
        </div>
    )
};
