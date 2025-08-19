import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { aminoAcidFrequencyData } from '../../data/chartData';

export const AminoAcidFrequencyChart: FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-[600px] flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Amino Acid Residue Frequency</h2>
            <div className="flex-1">
                <Bar 
                    data={aminoAcidFrequencyData} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    autoSkip: false,
                                    font: {
                                        size: 11
                                    }
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Frequency'
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}; 