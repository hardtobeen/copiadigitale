import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/30 via-transparent to-tech-darker/40 z-10"></div>
        
        {/* Video Background */}
        <div className="w-full h-full absolute inset-0">
          <iframe 
            src="https://player.vimeo.com/video/1109920305?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              width: '120vw', 
              height: '67.5vw', 
              minHeight: '120vh', 
              minWidth: '213.33vh', 
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
            title="Point cloud Town bianco,nero e sfocatura">
          </iframe>
        </div>
      </div>

      {/* Content con nuovo design tech */}
      <div className="relative z-20 container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
           <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-space-grotesk text-white mb-4 xs:mb-6 sm:mb-8 lg:mb-10 animate-fade-in text-shadow-xl leading-tight">
             Digitalizziamo la tua realtà
           </h1>
          
           <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white/90 mb-6 xs:mb-8 sm:mb-12 lg:mb-16 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto animate-fade-in font-medium leading-relaxed text-shadow-lg px-1 xs:px-2 sm:px-4" style={{
          animationDelay: '0.2s'
        }}>virtual tour 3D immersivi, siti web moderni e presenza online completa.</p>

          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 lg:gap-8 justify-center items-center animate-fade-in mb-8 xs:mb-12 sm:mb-16 lg:mb-20 px-2 xs:px-4" style={{
          animationDelay: '0.4s'
        }}>
             <Button onClick={() => scrollToSection('#portfolio')} size="lg" className="group relative overflow-hidden bg-nav-color hover:bg-nav-color/90 transition-all duration-500 transform hover:scale-105 px-4 xs:px-6 sm:px-8 lg:px-10 py-3 xs:py-4 sm:py-5 lg:py-6 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white border-0 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-2xl w-full sm:w-auto">
               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform relative z-10" />
               <span className="relative z-10">guarda un virtual tour</span>
             </Button>
            
             <Button onClick={() => scrollToSection('#contatti')} size="lg" variant="outline" className="group relative overflow-hidden bg-white/10 text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 px-4 xs:px-6 sm:px-8 lg:px-10 py-3 xs:py-4 sm:py-5 lg:py-6 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl w-full sm:w-auto">
               <span className="relative z-10">contattaci</span>
             </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator migliorato */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center glass backdrop-blur-sm relative overflow-hidden">
          <div className="w-1 h-4 bg-gradient-to-b from-tech-accent to-tech-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;