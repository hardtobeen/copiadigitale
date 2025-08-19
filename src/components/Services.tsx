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
         <div className="mt-12 sm:mt-16 text-center px-4">
           <div className="bg-gradient-to-r from-tech-primary to-tech-secondary p-6 sm:p-8 rounded-xl text-white bg-[#0571d3]">
             <h3 className="text-xl font-space-grotesk font-bold mb-3 sm:mb-4 sm:text-3xl">
               Pronto a rivoluzionare la tua presenza online?
             </h3>
             <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
               Realizza la tua copia digitale personalizzata e accelera il tuo business
             </p>
             <button onClick={() => document.getElementById('contatti')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-white text-tech-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-[#0571d3]">
               Richiedi una consulenza
             </button>
           </div>
         </div>
      </div>
    </section>;
};

export default Services;
