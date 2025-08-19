const homeTexts = {
    title: "Give us your peptides",
    titleButtonText: "Upload",
    titleButtonPlaceholder: "Enter your sequence here ",
    stats: [
        {name: "Monomer", value: 233},
        {name: "Multimer", value: 1000},
        {name: "Multi Peptide", value: 9000}
    ],
    uploadDescription: "Give us your peptides",
    uploadButton: "Upload file",
    apexDbDescription: "Explore our existing database with some sequences",
    apexDbButton: "Explore APEX DB",
    downloadDbDescription: "Download our database to check it out locally",
    downloadDbButton: "Download APEX DB csv",
    citationsAndAttribution: `
[Torres, M.D.T.; Wan, F.; de la Fuente-Nunez, C. Antibiotic Discovery for all with APEXSEARCH. XX, X, XX-XX, 2025. DOI: X](X)

[Wan, F.; Torres, M.D.T.; Peng, J.; de la Fuente-Nunez, C. Deep-learning-enabled antibiotic discovery through molecular de-extinction. Nature Biomedical Engineering, 8, 854–871, 2024. DOI: 0.1038/s41551-024-01201-x](https://www.nature.com/articles/s41551-024-01201-x)
`
}

const aboutTexts = {
    text: `## Overview
A popular AI chat tool generated this text to fill the about page. The APEX database of AI-sourced peptides has been developed to offer users comprehensive details on experimentally validated peptides, including their chemical structure and efficacy against specific biological targets. The database is meticulously curated and includes information on ribosomal, nonribosomal, and synthetic peptides known for their biological activity, categorized as Monomers, Multimers, and Multi-Peptides.

Monomer – comprises a single polypeptide chain (for example, PeptideX, PeptideY).


Multimer – consists of two or more polypeptide chains linked by interchain covalent bonds (for example, PeptideA, PeptideB).

Multi-Peptide – involves two or more distinct polypeptide chains without interchain covalent bonds. Their biological activity depends on the synergistic interaction between the peptides at equimolar concentrations, as individual peptides may exhibit minimal or no activity on their own (for example, PeptideM, PeptideN).

The project was initially supported by the National Science Foundation of CountryX and the Research Council of CountryY.

It is now a collaborative effort between the Laboratory of Computational Biology at the Center for Advanced Biomedical Research (CABR, CountryX) and the Division of Computational Biology and Bioinformatics (DCBB/NIAID/NIH, USA).

`,
    downloadFileDescription:"Previous work can be downloaded here:",
    downloadFileButton:"Download",
}

const ApexDbTexts = {
    filters: {
        title: "Filters",
        genomeQualityLabel: "Genome quality",
        genomeQualityLow: "Only Low",
        genomeQualityMedium: "Only Medium",
        genomeQualityHigh: "Only High",
        passGnucLabel: "Pass GNUC",
        passGnucAll: "All GNUC",
        passGnucYes: "Yes",
        passGnucNo: "No",
        clearFiltersButton: "Clear all filters",
        completenessLabel: "Completeness",
        contaminationLabel: "Contamination",
        trnaLabel: "tRNA",
        s16Label: "16S",
        s5Label: "5S",
        s23Label: "23S",
        highQualityGenomesCountLabel: "High quality genomes: ",
        mediumQualityGenomesCountLabel: "Medium quality genomes: ",
        lowQualityGenomesCountLabel: "Low quality genomes: ",
        excludeLowQualityBins: "Exclude low quality bins",
        excludeMediumQualityBins: "Exclude medium quality bins",
        excludeHighQualityBins: "Exclude high quality bins",
    },
    pagination: {
        itemsPerPage: "per page",
        itemsCountLabel: "%{from}-%{to} of %{count}",
        pagesCountLabel: "of %{count}",
        previous: "Previous",
        next: "Next",
    },
    table: {
        IdLabel: "ID",
        sequenceLabel: "Sequence",
        LengthLabel: "Length",
        hydrophobicMomentLabel: "Hydrophobic moment",
        detailsButtonLabel: "View",
    }
}


export const appTexts = {
    homeTexts,
    aboutTexts,
    ApexDbTexts,
}





