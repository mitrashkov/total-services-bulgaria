import React from 'react';
import { ABOUT_FULL } from '../constants';

const Features: React.FC = () => {
  const { whyUs } = ABOUT_FULL;

  return (
    <section className="bg-zinc-100 py-24 border-t border-black">
      <div className="container mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase mb-4">Предимства</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-black">{whyUs.title}</h3>
         </div>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {whyUs.list.map((reason, idx) => (
             <div key={idx} className="bg-white p-8 border-2 border-black hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
               <div className="text-6xl font-black text-zinc-100 mb-4 select-none">0{idx + 1}</div>
               <p className="font-bold text-lg leading-snug text-black">{reason}</p>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Features;