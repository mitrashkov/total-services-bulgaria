import React from 'react';
import { ABOUT_FULL } from '../constants';
import { CheckSquare, Target, Users, HelpCircle } from 'lucide-react';

const About: React.FC = () => {
  const { whoWeAre, mission, whyUs, whoFor } = ABOUT_FULL;

  return (
    <div className="bg-white text-black pt-24 pb-12">
      {/* WHO ARE WE Section */}
      <section className="py-12 md:py-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 relative">
             <div className="sticky top-24">
                 <div className="text-[120px] md:text-[200px] font-black text-gray-100 absolute -top-20 -left-10 select-none z-0 leading-none">TSB</div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase leading-none relative z-10 mb-8">
                   За<br />Нас
                 </h2>
                 <div className="w-24 h-4 bg-orange-600 mb-8"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Logistics Office" 
                   className="w-full h-auto grayscale contrast-125 border-4 border-black shadow-[15px_15px_0px_0px_rgba(234,88,12,1)]"
                 />
             </div>
          </div>
          
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h3 className="text-3xl font-black uppercase mb-6">{whoWeAre.title}</h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 border-l-8 border-black pl-8 mb-8">
                {whoWeAre.text}
              </p>
              <div className="bg-zinc-100 p-8 border border-zinc-200">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Users className="text-orange-600" />
                  Нашата методология
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {whoWeAre.subText}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Кога?', 'Как?', 'Защо?', 'За какво?', 'За кого?', 'Колко?'].map(q => (
                    <span key={q} className="bg-black text-white px-4 py-1 font-bold text-sm uppercase">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission & Goals */}
            <div className="grid gap-8">
                <div className="bg-black text-white p-8 md:p-12 relative overflow-hidden shadow-[15px_15px_0px_0px_#ea580c]">
                   <Target className="text-orange-600 w-16 h-16 mb-6" />
                   <h3 className="text-3xl font-black uppercase mb-8">{mission.title}</h3>
                   
                   <div className="grid md:grid-cols-2 gap-12 relative z-10">
                     <div>
                       <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">{mission.missionTitle}</h4>
                       <ul className="space-y-4">
                         {mission.missionList.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                             <span className="text-orange-600 font-bold text-lg">/</span>
                             {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4 border-b border-white/20 pb-2">{mission.goalsTitle}</h4>
                       <ul className="space-y-4">
                         {mission.goalsList.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                             <span className="text-orange-600 font-bold text-lg">/</span>
                             {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                   {/* Decoration */}
                   <div className="absolute -bottom-20 -right-20 w-80 h-80 border-4 border-white/5 rounded-full"></div>
                </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-zinc-100 py-24 border-t border-black">
        <div className="container mx-auto px-6">
           <h3 className="text-4xl md:text-5xl font-black uppercase mb-16 text-center">{whyUs.title}</h3>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {whyUs.list.map((reason, idx) => (
               <div key={idx} className="bg-white p-8 border-2 border-black hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <div className="text-6xl font-black text-zinc-100 mb-4 select-none">0{idx + 1}</div>
                 <p className="font-bold text-lg leading-snug">{reason}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-24 bg-white container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black uppercase mb-12 flex items-center justify-center gap-3">
             <HelpCircle className="w-10 h-10 text-orange-600" />
             {whoFor.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whoFor.list.map((item, idx) => (
              <div key={idx} className="text-left bg-zinc-900 text-white p-8 relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div>
                 <p className="font-medium text-lg text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;