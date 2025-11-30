import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { PageId } from '../types';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-orange-600 relative overflow-hidden">
       {/* Industrial Pattern Overlay */}
       <div className="absolute inset-0 opacity-10" style={{ 
         backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' 
       }}></div>
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-8 drop-shadow-lg">
             Нуждаете се от надежден превозвач?
           </h2>
           <p className="text-black font-bold text-xl md:text-2xl mb-12 bg-white inline-block px-4 py-2 transform -rotate-1">
             Ние организираме всичко - от товаренето до доставката.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, '')}`} className="group flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-black text-lg hover:bg-zinc-900 transition-all shadow-[8px_8px_0px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
               <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
               {CONTACT_INFO.phonePrimary}
             </a>
             <Link to={PageId.CONTACT} className="group flex items-center justify-center gap-3 bg-white text-black px-10 py-5 font-black text-lg border-4 border-black hover:bg-gray-100 transition-all shadow-[8px_8px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
               <FileText className="w-6 h-6" />
               Поискай Оферта
             </Link>
           </div>
         </div>
       </div>
    </section>
  );
};

export default CTA;