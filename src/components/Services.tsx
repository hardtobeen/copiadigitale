import { Camera, Globe, MapPin, FileText, Video, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const coreServices = [{
    icon: <Globe className="h-8 w-8" />,
    title: "Virtual Tour e Digitalizzazione degli Spazi",
    description: "Creiamo esperienze immersive in 3D che trasformano luoghi reali in ambienti esplorabili online. Ideale per immobili, showroom, hotel, ristoranti, musei, cantieri e ambienti nautici.",
    gradient: "bg-primary"
  }, {
    icon: <MapPin className="h-8 w-8" />,
    title: "Google Maps & Posizionamento Online",
    description: "Inseriamo le attività su Google Maps e Street View, con ottimizzazione local SEO per migliorare la visibilità e attrarre clienti reali.",
    gradient: "bg-primary"
  }, {
    icon: <img src="/lovable-uploads/071388d8-c18c-461c-8028-70a0ce953d82.png" alt="Siti Web Moderni" className="h-10 w-10" />,
    title: "Siti Web Moderni per la Tua Attività",
    description: "Realizziamo siti web veloci, belli e ottimizzati per la conversione. Soluzioni su misura per immobili, agenzie, hotel, cantieri nautici.",
    gradient: "bg-primary"
  }, {
    icon: <FileText className="h-8 w-8" />,
    title: "Presenza su Portali Immobiliari e Nautici",
    description: "Gestiamo la tua visibilità su portali come Immobiliare.it, Idealista, YachtWorld e altri. Dalla pubblicazione alla strategia di vendita.",
    gradient: "bg-primary"
  }];

  const enhancedServices = [{
    icon: <Camera className="h-8 w-8" />,
    title: "Fotografia & Motion Graphics per Aziende",
    description: "Servizi fotografici professionali, motion graphics e contenuti visual per rafforzare la tua immagine aziendale.",
    gradient: "bg-primary"
  }, {
    icon: <img src="/lovable-uploads/b86d7c99-5eea-475d-abab-6411455e91fe.png" alt="Laser Scanner 3D" className="h-12 w-12" />,
    title: "Apparecchiatura di ultima generazione",
    description: "Siamo rivenditori autorizzati di laser scanner 3D dotati di tecnologia LiDAR. Perfetti per applicazioni in ambito architettonico, ingegneristico e real estate.",
    gradient: "bg-primary"
  }, {
    icon: <img src="/lovable-uploads/020403d2-bd57-4f6a-950e-de5dc257ac74.png" alt="Ispezioni con Droni" className="h-10 w-10" />,
    title: "Ispezioni con Droni & Raccolta Dati",
    description: "Utilizziamo droni avanzati per effettuare rilievi e modellazioni 3D in ambienti industriali, anche pericolosi o difficili da raggiungere.",
    gradient: "bg-primary"
  }, {
    icon: <img src="/lovable-uploads/afa5416b-cad2-4b1f-a321-d00c943724d9.png" alt="Digital Twin" className="h-10 w-10" />,
    title: "Digital Twin (Gemelli Digitali)",
    description: "Creazione di modelli digitali realistici per monitoraggio continuo, manutenzione predittiva e supporto alle decisioni operative.",
    gradient: "bg-primary"
  }];

  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section id="servizi" className="py-12 xs:py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden">
       <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
         <div className="text-center mb-10 xs:mb-12 sm:mb-16 lg:mb-20">
           <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-space-grotesk text-tech-primary mb-6 sm:mb-8 leading-tight text-[#439fcb] xl:text-7xl">
             I nostri servizi
           </h2>
           <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed px-2 xs:px-4 mb-6">
             Scegli la soluzione più adatta alla tua azienda
           </p>
         </div>

         {/* Servizi Principali */}
         <div className="mb-12 sm:mb-16">
           <div className="text-center mb-8 sm:mb-12">
             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-tech-primary mb-3 sm:mb-4 text-[#439fcb]">
               Servizi principali
             </h3>
             <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
               Il cuore di Copiadigitale - le nostre specializzazioni principali
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
             {coreServices.map((service, index) => (
               <div key={index} className="group bg-blue-50 p-6 sm:p-8 text-center rounded-lg hover:bg-blue-100 transition-all duration-300">
                 <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tech-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg bg-[#0571d3]">
                   <div className="text-white scale-75 sm:scale-100">
                     {service.icon}
                   </div>
                 </div>
                 <h4 className="text-lg sm:text-xl font-space-grotesk text-gray-900 mb-3 sm:mb-4 leading-tight font-bold">
                   {service.title}
                 </h4>
                 <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                   {service.description}
                 </p>
               </div>
             ))}
           </div>
         </div>

         {/* Servizi di Potenziamento */}
         <div className="mb-16 sm:mb-20">
           <div className="text-center mb-8 sm:mb-12">
             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-tech-primary mb-3 sm:mb-4 text-[#439fcb]">
               Servizi di potenziamento
             </h3>
             <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
               Valore aggiunto che rende Copiadigitale una realtà completa e all'avanguardia
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
             {enhancedServices.map((service, index) => (
               <div key={index} className="group bg-blue-50 p-6 sm:p-8 text-center rounded-lg hover:bg-blue-100 transition-all duration-300">
                 <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tech-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg bg-[#0571d3]">
                   <div className="text-white scale-75 sm:scale-100">
                     {service.icon}
                   </div>
                 </div>
                 <h4 className="text-lg sm:text-xl font-space-grotesk text-gray-900 mb-3 sm:mb-4 leading-tight font-bold">
                   {service.title}
                 </h4>
                 <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                   {service.description}
                 </p>
               </div>
             ))}
           </div>
         </div>

          {/* CTA finale */}
          <div className="text-center px-4">
            <div className="relative overflow-hidden bg-gradient-to-br from-tech-primary via-digital-blue to-tech-secondary rounded-3xl px-8 sm:px-16 py-10 sm:py-12 shadow-2xl group hover:shadow-tech-primary/20 transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50 bg-[#6202d0]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl sm:text-2xl leading-tight mb-4 font-space-grotesk text-slate-50 lg:text-4xl">
                  Pronto a rivoluzionare la tua presenza online?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-slate-50">
                  Realizza la tua copia digitale personalizzata e accelera il tuo business con soluzioni innovative
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={handleConsultationClick}
                    className="group/btn text-tech-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg min-w-[200px] text-gray-950 bg-[#0571d3]"
                  >
                    <span className="flex items-center justify-center gap-2 text-base text-slate-50">
                      Richiedi consulenza gratuita
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>;
};

export default Services;
