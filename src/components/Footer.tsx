
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Music } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = ['Virtual Tour 360°', 'Sviluppo Siti Web', 'Fotografia Professionale', 'Google Maps & Street View', 'Servizi Immobiliari', 'Servizi Nautici'];
  const quickLinks = [{
    label: 'Chi Siamo',
    href: '#chi-siamo'
  }, {
    label: 'Servizi',
    href: '#servizi'
  }, {
    label: 'Portfolio',
    href: '#portfolio'
  }, {
    label: 'Contatti',
    href: '#contatti'
  }];
  const socialLinks = [{
    icon: <img src="/lovable-uploads/7f78d5b2-89a0-49b9-bfdf-07707170a593.png" alt="Instagram" className="h-5 w-5" />,
    href: 'https://www.instagram.com/copia_digitale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    label: 'Instagram'
  }, {
    icon: <img src="/lovable-uploads/498010d9-e28c-436d-bf1f-1fe9555f1a68.png" alt="LinkedIn" className="h-5 w-5" />,
    href: 'https://www.linkedin.com/company/copia-digitale/posts/?feedView=all',
    label: 'LinkedIn'
  }, {
    icon: <img src="/lovable-uploads/7ebc044a-f0a3-47f6-80f6-e1611e1fca23.png" alt="YouTube" className="h-5 w-5" />,
    href: 'https://youtube.com/@copia.digitale?si=4dc7SzZA1adA_z4m',
    label: 'YouTube'
  }, {
    icon: <img src="/lovable-uploads/b64e03db-f2ca-43e2-8478-e982f047b541.png" alt="TikTok" className="h-5 w-5" />,
    href: 'https://www.tiktok.com/@copia_digitale?_t=ZN-8ys7Rv0b6fO&_r=1',
    label: 'TikTok'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk bg-gradient-neon bg-clip-text text-transparent mb-3 sm:mb-4">
                  Copiadigitale
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Diamo vita digitale ai tuoi spazi con virtual tour immersivi, 
                  siti web moderni e presenza digitale completa.
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-digital-cyan flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">Roma, Italia</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-digital-cyan flex-shrink-0" />
                  <a href="tel:+393482951909" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                    +39 348 295 1909
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-digital-cyan flex-shrink-0" />
                  <a href="mailto:info@copiadigitale.it" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all">
                    info@copiadigitale.it
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-space-grotesk font-semibold mb-4 sm:mb-6">
                Servizi
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => <li key={index}>
                    <a href="#servizi" onClick={e => {
                  e.preventDefault();
                  scrollToSection('#servizi');
                }} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {service}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-space-grotesk font-semibold mb-4 sm:mb-6">
                Link Rapidi
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => <li key={index}>
                    <button onClick={() => scrollToSection(link.href)} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {link.label}
                    </button>
                  </li>)}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-space-grotesk font-semibold mb-3 sm:mb-4">
                  Rimani aggiornato
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  Iscriviti alla nostra newsletter per ricevere le ultime novità e consigli.
                </p>
                <div className="flex">
                  <input type="email" placeholder="La tua email" className="flex-1 px-3 sm:px-4 py-2 bg-navy-light border border-gray-600 rounded-l-lg focus:outline-none focus:border-digital-blue text-white text-sm sm:text-base" />
                  <button className="bg-gradient-digital px-3 sm:px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity bg-[#0571d3]">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Seguici</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => <a key={index} href={social.href} className="p-2 sm:p-3 rounded-lg hover:bg-gradient-digital transition-all duration-300 group" style={{backgroundColor: '#0571d3'}} aria-label={social.label}>
                      <div className="scale-90 sm:scale-100">
                        {social.icon}
                      </div>
                    </a>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Copiadigitale. Tutti i diritti riservati.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-700 py-3 sm:py-4">
          <div className="text-center text-gray-400 text-xs space-y-1">
            <div>© 2025 Copia Digitale Immobiliare S.R.L.S.</div>
            <div>P.IVA: 18180011001</div>
            <div className="break-words">Sede legale: Via Marsala 29H, 00185 Roma (RM)</div>
            <div className="break-all">Email PEC: copiadigitaleimmobiliaresrls@pecimprese.it</div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
