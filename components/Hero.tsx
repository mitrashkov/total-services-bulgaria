import React from 'react';
import { ArrowRight, Globe, Box } from 'lucide-react';
import { PageId } from '../types';
import { HERO_CONTENT } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-zinc-900 text-white overflow-hidden pt-32 pb-24 md:pt-20 md:pb-0">
      
      {/* Background with gritty overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Logistics Highway"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        {/* Grid Overlay for Brutalist feel */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-6xl border-l-4 border-orange-600 pl-6 md:pl-16 py-8">
          <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-base animate-fadeIn">
            Total Services Bulgaria
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.9] mb-8 tracking-tighter break-words">
            <span className="block">Международен</span>
            <span className="block text-orange-600">Транспорт и</span>
            <span className="block">Спедиция</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end border-t border-white/20 pt-8 mt-8">
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {HERO_CONTENT.subtitle}
              <span className="block mt-4 text-gray-400 text-base md:text-lg">{HERO_CONTENT.description}</span>
            </p>

            <Link 
              to={PageId.CONTACT}
              className="bg-orange-600 hover:bg-orange-700 text-white text-base md:text-lg font-bold px-8 py-4 md:px-12 md:py-6 inline-flex items-center gap-4 transition-all hover:translate-x-2 whitespace-nowrap shadow-[8px_8px_0px_0px_#000]"
            >
              Заяви Оферта
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Brutalist Footer Strip - Hidden on very small screens to save vertical space, or simplified */}
      <div className="relative md:absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-sm z-20 mt-12 md:mt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: 'EU / TR / RU', icon: Globe },
              { label: 'Groupage', icon: Box },
              { label: 'Oversized', icon: ArrowRight },
              { label: 'Logistics', icon: Box },
            ].map((item, idx) => (
              <div key={idx} className="p-4 md:p-6 flex items-center justify-center gap-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-default">
                <item.icon size={16} className="text-orange-500 md:w-5 md:h-5" />
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;