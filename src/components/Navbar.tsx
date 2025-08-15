import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    label: 'Servizi',
    href: '#servizi'
  }, {
    label: 'Portfolio',
    href: '#portfolio'
  }, {
    label: 'Chi Siamo',
    href: '#chi-siamo'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/20 shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/fe9ed6d0-62a5-4229-8adf-fee5fd82e9d0.png" 
              alt="Copiadigitale Logo" 
              className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto filter drop-shadow-lg"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
              {menuItems.map(item => <a key={item.href} onClick={() => scrollToSection(item.href)} className="relative transition-all duration-300 font-semibold cursor-pointer text-nav-color text-shadow text-sm lg:text-base xl:text-lg">
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nav-color transition-all duration-300 group-hover:w-full"></div>
                </a>)}
              <Button onClick={() => scrollToSection('#contatti')} className="bg-nav-color hover:bg-nav-color/90 transition-all duration-300 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base xl:text-lg text-white">
                Contattaci
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-tech-dark' : 'text-white'} transition-colors duration-300 p-2 rounded-lg hover:bg-white/10`}>
              {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="lg:hidden glass-dark border-t border-white/20 shadow-2xl">
          <div className="px-3 xs:px-4 sm:px-6 pt-3 xs:pt-4 pb-4 xs:pb-6 space-y-3 xs:space-y-4">
            {menuItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 xs:px-4 py-2 xs:py-3 text-white transition-colors duration-300 font-semibold rounded-lg hover:bg-white/10 text-sm xs:text-base">
                {item.label}
              </button>)}
            <div className="px-3 xs:px-4 pt-1 xs:pt-2">
              <Button onClick={() => scrollToSection('#contatti')} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 py-2 xs:py-3 rounded-lg xs:rounded-xl font-semibold text-sm xs:text-base">
                Contattaci
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;