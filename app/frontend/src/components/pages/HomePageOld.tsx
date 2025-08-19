// import React, {FC} from 'react';
// import {appTexts} from "../../texts";
// import {Markdown} from '@components/dumb-components/Markdown';
// import {ButtonPrimary} from "@components/dumb-components/ButtonPrimary.tsx";
// import {Link} from "react-router-dom";

// export type HomeProps = {}

// export const Home: FC<HomeProps> = ({}) => {
//     const homeTexts = appTexts.homeTexts;

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="relative min-h-[60vh]">
//                 <div
//                     className="flex flex-col max-w-3xl w-full absolute left-1/2 top-1/2 -translate-x-1/2 rounded-lg p-6 shadow-red-500">
//                     <h2 className="mb-6 text-2xl text-center font-medium text-gray-700">{homeTexts.title}</h2>
//                     <div className="flex flex-col">
//                         <textarea 
//                             className="w-full bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-300 focus:border-primary-300 p-2.5 mb-4 resize-none h-32 shadow-inner focus:outline-none"
//                             placeholder={homeTexts.titleButtonPlaceholder}/>
//                         <Link to="/#" className="self-end text-center mx-auto w-full sm:w-auto">
//                             <ButtonPrimary className="w-full min-w-60">{homeTexts.titleButtonText}</ButtonPrimary>
//                         </Link>
//                     </div>
//                 </div>
//             </div>            

//             <Markdown className="max-w-3xl mx-auto p-4 mt-64">{homeTexts.citationsAndAttribution}</Markdown>
//         </div>
//     )
// };

export default {};