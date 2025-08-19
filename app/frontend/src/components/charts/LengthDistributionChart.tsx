import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { lengthDistributionData } from '../../data/chartData';

export const LengthDistributionChart: FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-[600px] flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Length Distribution</h2>
            <div className="flex-1">
                <Bar 
                    data={lengthDistributionData} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Normalized Frequency'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Length'
                                },
                                ticks: {
                                    minRotation: 0,
                                    maxRotation: 0
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}; 