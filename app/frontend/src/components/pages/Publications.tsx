import React from 'react';
import { Markdown } from "../dumb-components/Markdown";

const pageTitle = "Publications";

const publicationSections = [
  {
    title: "APEX",
    content: `
[Wan, F.; Torres, M.D.T.; Peng, J.; de la Fuente-Nunez, C. Deep-learning-enabled antibiotic discovery through molecular de-extinction. Nature Biomedical Engineering, 8, 854–871, 2024. DOI: 10.1038/s41551-024-01201-x.](https://www.nature.com/articles/s41551-024-01201-x)

[Wan, F.; Torres, M. D. T.; Guan, C.; de la Fuente-Nunez, C. Tutorial: guidelines for the use of machine learning methods to mine genomes and proteomes for antibiotic discovery. Nature Protocols, 20, 2685-2697, 2025. DOI: 10.1038/s41596-025-01144-w.](https://www.nature.com/articles/s41596-025-01144-w)

[Guan, C.; Torres, M.D.T.; Li, S.; de la Fuente-Nunez, C. Computational exploration of global venoms for antimicrobial discovery with Venomics artificial intelligence. Nature Communications, 16, 6446, 2025. DOI: 10.1038/s41467-025-60051-6.](https://www.nature.com/articles/s41467-025-60051-6)

[Torres, M. D. T.; Wan, F.; de la Fuente-Nunez, C. Deep learning reveals antibiotics in the archaeal proteome, Nature Microbiology, 10, 2153-2167, 2025. DOI: https://doi.org/10.1038/s41564-025-02061-0](https://doi.org/10.1038/s41564-025-02061-0)

[Cesaro, A.; Wan, F.; Torres, M.D.T.; de la Fuente-Nunez, C. Design of multimodal antibiotics against intracellular infections using deep learning. bioRXiv, 2025.](https://www.biorxiv.org/content/10.1101/2024.12.20.629780v2)

[Leng, T.; Wan, F.; Torres, M. D. T.; de la Fuente-Nunez, C. Predicting and generating antibiotics against future pathogens with ApexOracle. arXiv, 2025.](https://arxiv.org/abs/2507.07862)

[Torres, M.D.T.; Zeng, Y.; Wan, F.; Maus, N.; Gardner, J.; de la Fuente-Nunez, C. A generative artificial intelligence approach for antibiotic optimization. bioRXiv, 2025.](https://www.biorxiv.org/content/10.1101/2024.11.27.625757v1)

[Xia, X.; Torres, M.D.T.; de la Fuente-Nunez, C. Proteasome-derived antimicrobial peptides discovered via deep learning. bioRXiv, 2025.](https://www.biorxiv.org/content/10.1101/2025.03.17.643752v1.abstract)`
  },
  {
    title: "Molecular de-extinction",
    content: `
[Maasch, J.R.M.A.; Torres, M.D.T.; Melo, M.C.R.; de la Fuente-Nunez, C. Molecular de-extinction of ancient antimicrobial peptides enabled by machine learning. Cell Host Microbe, v. 31, i. 8, p. 1260-1274.E6, 2023. DOI: 10.1016/j.chom.2023.07.001](https://www.sciencedirect.com/science/article/pii/S1931312823002962?via%3Dihub)

[Torrance, A.W.; de la Fuente-Nunez, C. The patentability and bioethics of molecular de-extinction. Nature Biotechnology, 42, 1179-1180, 2024. DOI: 10.1038/s41587-024-02332-x](https://www.nature.com/articles/s41587-024-02332-x)`
  },
  {
    title: "Encrypted peptides",
    content: `
[Torres, M.D.T.; Melo, M.C.R.; Flowers, L.; Crescenzi, O.; Notomista, E.; de la Fuente-Nunez, C. Mining for encrypted peptide antibiotics in the human proteome. Nature Biomedical Engineering, v. 6, i. 1, p. 67-75, 2022. DOI: 10.1038/s41551-021-00801-1](https://www.nature.com/articles/s41551-021-00801-1)

[Torres, M.D.T.; Cesaro, A.; de la Fuente-Nunez, C. Encrypted peptides from the human proteome target infections through antimicrobial and immunomodulatory properties. Trends in Biotechnology, 2024. DOI: 10.1016/j.tibtech.2024.09.008](https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(24)00251-8)

[Torres, M.D.T.; Brooks, E.; Cesaro, A.; Sberro, H.; Nicolaou, C.; Bhatt, A.S.; de la Fuente-Nunez, C. Human gut metagenomic mining reveals an untapped source of peptide antibiotics. Cell, v. 187, i. 19, p. 5453-5467.E152024. DOI: 10.1016/j.cell.2024.07.027](https://www.cell.com/cell/fulltext/S0092-8674(24)00802-X)

[Santos-Junior, C.D.; Torres, M.D.T.; Duas, Y.; del Rio, A.R.; Schmidt, T.S.B.; Chong, H.; Fullam, A.; Kuhn, M.; Zhu, C.; Houseman, A.; Somborski, J.; Vines, A.; Zhao, X.M.; Bork, P.; Huerta-Cepas, J.; de la Fuente-Nunez, C., Coelho, L.P. Computational exploration of the global microbiome for antibiotic discovery. Cell, v. 187, i. 14, p. 3761-3778.E16, 2024. DOI: 10.1016/j.cell.2024.05.013](https://www.cell.com/cell/fulltext/S0092-8674(24)00522-1)`
  }
];

export default function Publications() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl text-center font-bold text-[#303030] mb-12">{pageTitle}</h1>
        
        {publicationSections.map((section, index) => (
          <section key={index} className="mb-12">
            <div className="bg-white rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-[#303030] mb-6">{section.title}</h2>
              <Markdown>{section.content}</Markdown>
            </div>
          </section>
        ))}

        <div className="flex justify-center mt-8">
          <a
            href="https://delafuentelab.seas.upenn.edu/publications-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-300"
          >
            View All Publications
          </a>
        </div>
        
      </div>
    </div>
  );
} 