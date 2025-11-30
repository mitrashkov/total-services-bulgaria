import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO, TRANSPORT_SUBSECTIONS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white relative pt-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-orange-600 font-bold tracking-[0.2em] uppercase mb-4">Контакти</h2>
              <h3 className="text-5xl md:text-6xl font-black text-black mb-8 uppercase leading-none">
                Свържете се<br/>с нас
              </h3>
              <p className="text-gray-600 text-xl mb-12 border-l-4 border-black pl-6">
                Имате товар за превоз? Ние сме насреща за консултация и оферта.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-1">Телефони</h4>
                    <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="block text-xl text-gray-800 hover:text-orange-600 font-mono transition-colors">{CONTACT_INFO.phonePrimary}</a>
                    <a href={`tel:${CONTACT_INFO.phoneSecondary}`} className="block text-xl text-gray-800 hover:text-orange-600 font-mono transition-colors">{CONTACT_INFO.phoneSecondary}</a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-1">Имейл</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="block text-xl text-gray-800 hover:text-orange-600 transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl uppercase mb-1">Адрес</h4>
                    <p className="text-xl text-gray-800 max-w-xs">{CONTACT_INFO.address}</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 mt-2 hover:underline uppercase tracking-wide">
                      Виж на картата <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-zinc-100 border border-zinc-200">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Clock className="text-orange-600" /> Работно Време
              </h4>
              <p className="text-gray-600">Понеделник - Петък: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-orange-600 p-8 md:p-12 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black text-white mb-8 uppercase">Изпратете Запитване</h3>
            
            {/* Note about PHP backend compatibility */}
            <form action="#" method="POST" className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Име</label>
                  <input type="text" name="name" className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-black outline-none font-bold text-black placeholder:text-gray-400" placeholder="ВАШЕТО ИМЕ" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Телефон</label>
                  <input type="tel" name="phone" className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-black outline-none font-bold text-black placeholder:text-gray-400" placeholder="+359..." required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Имейл</label>
                <input type="email" name="email" className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-black outline-none font-bold text-black placeholder:text-gray-400" placeholder="EMAIL@EXAMPLE.COM" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Вид Услуга</label>
                <div className="relative">
                  <select name="service" className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-black outline-none font-bold text-black appearance-none cursor-pointer">
                    <option value="">ИЗБЕРЕТЕ УСЛУГА...</option>
                    {TRANSPORT_SUBSECTIONS.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="forwarding">Спедиция</option>
                    <option value="other">ДРУГО</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/80 uppercase tracking-widest">Детайли за товара</label>
                <textarea name="message" rows={4} className="w-full px-4 py-4 bg-white border-2 border-transparent focus:border-black outline-none font-bold text-black placeholder:text-gray-400 resize-none" placeholder="Опишете товара, дестинация, тегло..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-black text-white font-black uppercase tracking-widest hover:bg-zinc-900 transition-colors border-2 border-white hover:border-black">
                Изпрати Запитване
              </button>
            </form>
            
            {/* Decorative background stripes */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rotate-45 pointer-events-none"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rotate-45 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;