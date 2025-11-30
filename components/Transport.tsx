import React from 'react';
import { TRANSPORT_INTRO, TRANSPORT_OFFERINGS, TRANSPORT_SUBSECTIONS } from '../constants';
import { Truck, Ship, Anchor, Package, Flame, Globe } from 'lucide-react';

const Transport: React.FC = () => {
  return (
    <div className="bg-zinc-50 pt-24 pb-12">
      
      {/* INTRO HERO */}
      <section className="bg-zinc-900 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 text-white">
              Международен<br/>
              <span className="text-orange-600">Транспорт</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed border-l-4 border-orange-600 pl-6">
              {TRANSPORT_INTRO.description}
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGY & OFFERINGS */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
               <h3 className="text-2xl font-black uppercase mb-4">Стратегия и Развитие</h3>
               <p className="text-gray-700 leading-relaxed mb-6">{TRANSPORT_INTRO.methodology}</p>
               <p className="text-gray-700 leading-relaxed">{TRANSPORT_INTRO.context}</p>
            </div>
            
            <div className="p-8 bg-white border-2 border-black shadow-[10px_10px_0px_0px_#000]">
               <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                 <Truck className="text-orange-600" />
                 Какво предлагаме
               </h3>
               <ul className="space-y-4">
                 {TRANSPORT_OFFERINGS.map((offer, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <span className="w-2 h-2 bg-orange-600 mt-2 shrink-0"></span>
                     <span className="text-gray-800 font-medium">{offer}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="space-y-8">
             <img 
               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Container Ship" 
               className="w-full grayscale border-4 border-black"
             />
             <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Trucking" 
                className="w-full grayscale border-4 border-black"
             />
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="bg-white py-24 border-t-2 border-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">Нашите Направления</h2>
          
          <div className="space-y-24">
            {TRANSPORT_SUBSECTIONS.map((section, idx) => (
              <div key={section.id} id={section.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-black text-gray-200">0{idx + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase leading-none">{section.title}</h3>
                  </div>
                  
                  {section.subtitle && (
                    <div className="text-orange-600 font-bold uppercase tracking-widest mb-6">{section.subtitle}</div>
                  )}
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {section.content}
                  </p>

                  {(section.list.length > 0) && (
                    <div className="bg-zinc-100 p-8 border-l-4 border-orange-600">
                      {section.listTitle && <h4 className="font-bold uppercase mb-4">{section.listTitle}</h4>}
                      <ul className="grid gap-3">
                        {section.list.map((item, k) => (
                          <li key={k} className="flex items-start gap-2 text-sm md:text-base">
                            <span className="text-orange-600 font-bold">»</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-1/3">
                  <div className="sticky top-32">
                     <div className="aspect-square bg-zinc-900 flex items-center justify-center border-4 border-black shadow-[15px_15px_0px_0px_#ea580c]">
                        {/* Dynamic Icons based on ID */}
                        {section.id.includes('turkey') && <Globe className="text-white w-24 h-24" />}
                        {section.id.includes('groupage') && <Package className="text-white w-24 h-24" />}
                        {section.id.includes('oversized') && <Anchor className="text-white w-24 h-24" />}
                        {section.id.includes('bulk') && <Truck className="text-white w-24 h-24" />}
                        {section.id.includes('adr') && <Flame className="text-white w-24 h-24" />}
                        {section.id.includes('fertilizers') && <span className="text-white font-black text-2xl">NPK</span>}
                     </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Transport;