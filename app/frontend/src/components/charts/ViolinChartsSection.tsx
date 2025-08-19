import React, { FC } from 'react';

const violinCharts = [
    {
        title: "Tilt Angle",
        image: "/stats/Tilt_Angle_-_website.png"
    },
    {
        title: "Propensity to PPII coil",
        image: "/stats/Propensity_to_PPII_coil_-_website.png"
    },
    {
        title: "Propensity to In Vitro Aggregation",
        image: "/stats/Propensity_to_In_Vitro_Aggregation_-_website.png"
    },
    {
        title: "Penetration Depth",
        image: "/stats/Penetration_Depth_-_website.png"
    },
    {
        title: "Normalized Hydrophobicity",
        image: "/stats/Normalized_Hydrophobicity_-_website.png"
    },
    {
        title: "Normalized Hydrophobic Moment",
        image: "/stats/Normalized_Hydrophobic_Moment_-_website.png"
    },
    {
        title: "Net Charge",
        image: "/stats/Net_Charge_-_website.png"
    },
    {
        title: "Linear Moment",
        image: "/stats/Linear_Moment_-_website.png"
    },
    {
        title: "Isoelectric Point",
        image: "/stats/Isoelectric_Point_-_website.png"
    },
    {
        title: "Disordered Conformation Propensity",
        image: "/stats/Disordered_Conformation_Propensity_-_website.png"
    },
    {
        title: "Angle Subtended by the Hydrophobic Residues",
        image: "/stats/Angle_Subtended_by_the_Hydrophobic_Residues_-_website.png"
    },
    {
        title: "Amphiphilicity Index",
        image: "/stats/Amphiphilicity_Index_-_website.png"
    }
];

export const ViolinChartsSection: FC = () => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Feature Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {violinCharts.map((chart, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">{chart.title}</h3>
                        <div className="aspect-w-4 aspect-h-3">
                            <img 
                                src={chart.image} 
                                alt={chart.title}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 