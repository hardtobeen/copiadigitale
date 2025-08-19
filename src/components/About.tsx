import { Users, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const values = [{
    icon: <img src="/lovable-uploads/9e4a63c8-f3cf-4142-a0a7-0f4647a50def.png" alt="Innovazione" className="h-8 w-8" />,
    title: "Innovazione",
    description: "Utilizziamo tecnologie all'avanguardia per dare vita a progetti personalizzati su misura"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Collaborazione", 
    description: "Lavoriamo a stretto contatto con i nostri clienti per comprendere e realizzare la loro visione."
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Qualità",
    description: "Ogni progetto viene realizzato con la massima attenzione ai dettagli e standard professionali."
  }, {
    icon: <Zap className="h-8 w-8" />,
    title: "Velocità",
    description: "Tempi di consegna rapidi garantendo la miglior qualità del risultato finale"
  }];
  return <section id="chi-siamo" className="py-12 xs:py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden">
       <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-center">
           {/* Left Content */}
           <div className="space-y-4 xs:space-y-6 sm:space-y-8 lg:space-y-10">
             <div>
               <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-space-grotesk text-tech-primary mb-6 sm:mb-8 leading-tight text-[#439fcb] xl:text-7xl">
                 Chi è Copia Digitale?
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                 Siamo <strong className="text-tech-primary">pionieri della realtà digitale</strong>, al servizio di aziende e
                 professionisti. Crediamo che ogni ambiente meriti di vivere anche
                 <strong className="text-tech-primary"> online</strong>, accessibile a <strong className="text-tech-primary">chiunque, ovunque e in qualunque momento</strong>.
               </p>
               <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                 Copia Digitale combina competenze tecniche, creatività e passione
                 per l'<strong className="text-tech-primary">innovazione</strong>.
                 Trasformiamo la visione dei nostri clienti in <strong className="text-tech-primary">esperienze virtuali</strong> che
                 generano <strong className="text-tech-primary">risultati concreti</strong>.
               </p>
             </div>

             {/* Mission Statement */}
             <div className="relative group">
               <div className="border-l-4 border-tech-primary rounded-lg p-6 sm:p-8 bg-[#eaeffe]">
                 <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-gray-900 mb-3 sm:mb-4">
                   La nostra Missione
                 </h3>
                 <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                   Democratizzare l'accesso alle tecnologie immersive,
                   permettendo ad ogni azienda di competere sul mercato con
                   strumenti professionali e soluzioni innovative
                 </p>
               </div>
             </div>
           </div>

           {/* Right Content - Values Grid */}
           <div className="space-y-8 sm:space-y-10">
             <div>
               <h3 className="text-2xl sm:text-3xl font-space-grotesk font-bold text-gray-900 mb-6 sm:mb-10 text-center">
                 I nostri valori
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                 {values.map((value, index) => <div key={index} className="group bg-blue-50 p-6 sm:p-8 text-center rounded-lg hover:bg-blue-100 transition-all duration-300">
                     <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tech-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg bg-[#0571d3]">
                       <div className="text-white scale-75 sm:scale-100">
                         {value.icon}
                       </div>
                     </div>
                     <h4 className="font-space-grotesk font-bold text-gray-900 mb-3 sm:mb-4 text-lg sm:text-xl">
                       {value.title}
                     </h4>
                     <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                       {value.description}
                     </p>
                   </div>)}
               </div>
             </div>

             {/* Team Stats */}
             <div className="relative group">
               <div className="from-tech-primary to-tech-secondary p-6 sm:p-8 rounded-xl text-white shadow-2xl bg-[t#0571d3] bg-[#0571d3]">
                 <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                   <div className="group/stat">
                     <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-space-grotesk">+5</div>
                     <div className="text-xs sm:text-sm opacity-90 font-medium leading-tight">Team di lavoro</div>
                   </div>
                   <div className="group/stat">
                     <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-space-grotesk">98%</div>
                     <div className="text-xs sm:text-sm opacity-90 font-medium leading-tight">Tasso di soddisfazione</div>
                   </div>
                   <div className="group/stat">
                     <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-space-grotesk">+100</div>
                     <div className="text-xs sm:text-sm opacity-90 font-medium leading-tight">Tour creati</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>;
};
export default About;
