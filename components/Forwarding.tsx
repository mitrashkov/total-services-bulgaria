import React from 'react';
import { FORWARDING_CONTENT } from '../constants';
import { ClipboardList, CheckCircle2, TrendingUp } from 'lucide-react';

const Forwarding: React.FC = () => {
  return (
    <div className="bg-white pt-24 pb-12 min-h-screen">
      
      <section className="bg-orange-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8">
              Спедиция и<br/>Логистика
            </h1>
            <p className="text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-6">
              {FORWARDING_CONTENT.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Benefits & Intro */}
            <div className="space-y-12">
               <div>
                 <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                   <TrendingUp className="w-8 h-8 text-orange-600" />
                   Ползи за бизнеса
                 </h3>
                 <p className="text-lg text-gray-700 mb-6 font-medium">{FORWARDING_CONTENT.benefitsIntro}</p>
                 <ul className="space-y-4">
                   {FORWARDING_CONTENT.benefits.map((b, i) => (
                     <li key={i} className="flex items-start gap-3 bg-zinc-100 p-4 border-l-4 border-black">
                       <CheckCircle2 className="shrink-0 text-orange-600" />
                       <span className="font-bold text-gray-900">{b}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div>
                 <h3 className="text-3xl font-black uppercase mb-6">{FORWARDING_CONTENT.helpTitle}</h3>
                 <p className="text-gray-600 mb-6">{FORWARDING_CONTENT.helpIntro}</p>
                 <div className="grid gap-4">
                    {FORWARDING_CONTENT.helpList.map((h, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold shrink-0 group-hover:bg-orange-600 transition-colors">{i + 1}</div>
                        <p className="font-medium">{h}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Right Column: Services List */}
            <div className="bg-zinc-900 text-white p-8 md:p-12 relative shadow-[20px_20px_0px_0px_#ea580c]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ClipboardList size={200} />
               </div>
               
               <h3 className="text-3xl font-black uppercase mb-8 relative z-10 border-b border-white/20 pb-4">
                 {FORWARDING_CONTENT.servicesTitle}
               </h3>
               
               <ul className="space-y-6 relative z-10">
                 {FORWARDING_CONTENT.servicesList.map((service, i) => (
                   <li key={i} className="flex items-start gap-4 group">
                     <span className="text-orange-600 mt-1">●</span>
                     <span className="text-gray-300 group-hover:text-white transition-colors text-lg">{service}</span>
                   </li>
                 ))}
               </ul>
            </div>

         </div>
      </section>

    </div>
  );
};

export default Forwarding;