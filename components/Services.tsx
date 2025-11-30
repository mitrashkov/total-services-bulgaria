import React from 'react';
import { SERVICES_DATA } from '../constants';
import { SectionId } from '../types';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[name];
    return IconComponent ? <IconComponent size={32} /> : <Icons.Box size={32} />;
  };

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-zinc-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="border-b border-white/20 pb-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-2">Нашите Услуги</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase leading-none mt-2">
              Логистични<br/>Решения
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left text-lg">
            От малки пратки до извънгабаритни товари. Ние движим вашия бизнес напред.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-t border-l border-zinc-800">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative border-r border-b border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 p-8 flex flex-col h-full"
            >
              <div className="mb-8 flex justify-between items-start">
                 <div className="p-4 bg-orange-600 text-white inline-block shadow-[4px_4px_0px_0px_#fff]">
                   {getIcon(service.icon)}
                 </div>
                 <span className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 select-none">
                   0{index + 1}
                 </span>
              </div>
              
              <h4 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-orange-500 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {service.details && (
                <ul className="mt-auto space-y-2 mb-6 border-t border-zinc-700 pt-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-orange-500 font-bold">/</span> {detail}
                    </li>
                  ))}
                </ul>
              )}

              <div className="h-1 w-0 group-hover:w-full bg-orange-600 transition-all duration-500 ease-out mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;