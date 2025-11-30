import React from 'react';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-8 border-orange-600">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Brand */}
          <div className="space-y-8">
             <div>
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-black text-2xl mb-4">
                  TS
                </div>
                <span className="font-black text-3xl tracking-tighter uppercase leading-none block">
                  Total<br/>Services
                </span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-orange-600 pl-4">
               Вашият надежден партньор за международен транспорт и спедиция. Базирани в Русе, опериращи в цял свят.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg uppercase tracking-widest mb-8 text-orange-600">Меню</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white hover:pl-2 transition-all font-bold uppercase text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-600"></span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-lg uppercase tracking-widest mb-8 text-orange-600">Свържете се с нас</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="space-y-4">
                 <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                   <MapPin className="mt-1 shrink-0 text-orange-600" size={20} />
                   <span>{CONTACT_INFO.address}</span>
                 </div>
                 <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                   <Mail className="mt-1 shrink-0 text-orange-600" size={20} />
                   <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                   <Phone className="mt-1 shrink-0 text-orange-600" size={20} />
                   <div className="flex flex-col">
                      <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="font-mono text-lg text-white">{CONTACT_INFO.phonePrimary}</a>
                      <a href={`tel:${CONTACT_INFO.phoneSecondary}`} className="font-mono">{CONTACT_INFO.phoneSecondary}</a>
                   </div>
                 </div>
                 <div className="flex gap-4 mt-4">
                    <a href="#" className="p-2 bg-zinc-800 hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
                 </div>
               </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Total Services Bulgaria EOOD.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика за поверителност</a>
            <a href="#" className="hover:text-white transition-colors">Бисквитки</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;