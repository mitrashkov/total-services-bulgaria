import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Scroll to top and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white py-3 border-gray-200 text-black shadow-lg' 
          : 'bg-black/90 backdrop-blur-md py-4 border-white/10 text-white'
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-lg md:text-xl border-2 transition-all ${
              scrolled ? 'bg-orange-600 border-orange-600 text-white' : 'bg-transparent border-white text-white'
            }`}>
              TS
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg md:text-xl tracking-tighter uppercase leading-none ${scrolled ? 'text-black' : 'text-white'}`}>
                Total Services
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase ${scrolled ? 'text-orange-600' : 'text-gray-400'}`}>
                Bulgaria
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-widest hover:text-orange-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full ${
                  location.pathname === link.href ? 'text-orange-500 after:w-full' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 font-bold transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none border-2 border-transparent text-sm"
            >
              <Phone size={16} />
              <span>{CONTACT_INFO.phonePrimary}</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={`xl:hidden p-2 z-50 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[100] transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } xl:hidden flex flex-col`}>
        
        {/* Header inside menu for close button alignment */}
        <div className="flex justify-between items-center p-4 md:px-6 border-b border-white/10 bg-black">
           <div className="flex items-center gap-2 opacity-0">
             {/* Placeholder to balance the layout if needed, or keeping logo visible behind is tricky with fixed overlay */}
           </div>
           <button 
             onClick={() => setIsOpen(false)}
             className="p-2 text-white hover:text-orange-500 transition-colors bg-white/10 rounded-full"
           >
             <X size={32} />
           </button>
        </div>

        <div className="flex flex-col justify-center flex-grow px-8 overflow-y-auto pb-20">
          <div className="flex flex-col space-y-2">
            {NAVIGATION_LINKS.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                className={`group flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-wider py-4 border-b border-white/10 transition-all ${
                  location.pathname === link.href ? 'text-orange-500 pl-4 border-l-4 border-orange-500' : 'text-white hover:text-orange-500 hover:pl-4'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{link.label}</span>
                <ArrowRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${location.pathname === link.href ? 'opacity-100' : ''}`} />
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 space-y-6">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Контакти</p>
            <a
              href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-center gap-4 text-white hover:text-orange-500 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white font-bold">
                <Phone size={24} />
              </div>
              <span className="text-xl font-bold">{CONTACT_INFO.phonePrimary}</span>
            </a>
            
            <div className="text-gray-400 text-sm pl-16">
              {CONTACT_INFO.address}
            </div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </>
  );
};

export default Navbar;