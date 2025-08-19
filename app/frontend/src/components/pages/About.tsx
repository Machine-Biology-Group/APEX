import React, {FC} from 'react';
import {Markdown} from "../dumb-components/Markdown";

export type AboutProps = {}

export const About: FC<AboutProps> = ({}) => {
    const content = `
## About us

The de la Fuente Lab at the University of Pennsylvania is at the forefront of computational biology and antimicrobial research. Our work focuses on developing innovative approaches to combat infectious diseases through machine learning and synthetic biology.

## CONTACT

Cesar de la Fuente, Ph.D. (cfuente@upenn.edu)

To apply to become a graduate student in the lab, please first apply to a PhD program at the University of Pennsylvania. For other positions, please contact Cesar de Fuente.

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
