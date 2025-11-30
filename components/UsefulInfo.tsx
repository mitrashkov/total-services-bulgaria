import React from 'react';
import { USEFUL_INFO_CONTENT } from '../constants';
import { MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageId } from '../types';

const UsefulInfo: React.FC = () => {
  return (
    <div className="bg-zinc-100 min-h-screen pt-24 pb-12 flex flex-col">
      
      <section className="container mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-600 text-white shadow-[8px_8px_0px_0px_#000]">
                <Info size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase">Полезна Информация</h1>
           </div>

           <div className="bg-white p-8 md:p-16 border-4 border-black shadow-[20px_20px_0px_0px_#000]">
              <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-3 text-orange-600">
                <MessageCircle />
                {USEFUL_INFO_CONTENT.title}
              </h2>
              
              <p className="text-xl leading-relaxed text-gray-800 mb-12">
                {USEFUL_INFO_CONTENT.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {USEFUL_INFO_CONTENT.list.map((item, idx) => (
                   <div key={idx} className="bg-zinc-50 p-6 border-l-8 border-orange-600">
                     <p className="font-bold text-lg">{item}</p>
                   </div>
                ))}
              </div>

              <div className="bg-black text-white p-8 text-center">
                <p className="text-lg mb-6 uppercase tracking-widest font-bold">Свържете се с нас за безплатна консултация още днес</p>
                <Link to={PageId.CONTACT} className="inline-block bg-white text-black font-black uppercase px-8 py-4 hover:bg-orange-600 hover:text-white transition-colors">
                  Контакти
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default UsefulInfo;