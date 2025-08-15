import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <Phone className="h-6 w-6" />,
    title: "Telefono",
    value: "+39 02 1234 5678",
    action: "tel:+390212345678"
  }, {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "info@copiadigitale.it",
    action: "mailto:info@copiadigitale.it"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Sede",
    value: "Roma, Italia",
    action: null
  }, {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    value: "+39 333 123 4567",
    action: "https://wa.me/393331234567"
  }];
  return <section id="contatti" className="py-16 sm:py-20 bg-gray-900 text-white">
       <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
         <div className="text-center mb-12 sm:mb-16">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk text-white mb-4 sm:mb-6">
             Resta al passo, il futuro è Digitale
           </h2>
           <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
             Hai bisogno di più informazioni? Contattaci e scopri come possiamo aiutarti.
           </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
           {/* Contact Information */}
           <div className="space-y-6 sm:space-y-8">
             <div>
               <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-4 sm:mb-6">
                 Parliamo del tuo progetto
               </h3>
               <p className="text-base sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                 Siamo qui per rispondere a tutte le tue domande e guidarti nella scelta 
                 della soluzione migliore per la tua attività. Ogni consulenza è gratuita 
                 e senza impegno.
               </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
               {contactInfo.map((info, index) => <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-tech-primary transition-colors duration-300">
                   <div className="flex items-center space-x-3 sm:space-x-4">
                     <div className="bg-tech-primary p-2 sm:p-3 rounded-lg flex-shrink-0 bg-[#0571d3]">
                       <div className="text-white scale-90 sm:scale-100">
                         {info.icon}
                       </div>
                     </div>
                     <div className="min-w-0 flex-1">
                       <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                         {info.title}
                       </h4>
                       {info.action ? <a href={info.action} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-all">
                           {info.value}
                         </a> : <span className="text-gray-300 text-sm sm:text-base">{info.value}</span>}
                     </div>
                   </div>
                 </div>)}
             </div>

             {/* Quick Actions */}
             <div className="space-y-4">
               <h4 className="text-base sm:text-lg font-space-grotesk font-semibold text-white">
                 Azioni rapide
               </h4>
               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-white hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300 border border-gray-200 text-[#376697]">
                    prenota una video call
                  </button>
               </div>
             </div>
          </div>

           {/* Contact Form */}
           <div className="bg-white p-6 sm:p-8 rounded-lg">
             <div className="mb-4 sm:mb-6">
               <h3 className="text-xl sm:text-2xl font-space-grotesk text-gray-900 font-bold">
                 Richiedi un preventivo
               </h3>
             </div>
             <div className="pt-0">
               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                     <Input type="text" name="name" placeholder="Nome e Cognome *" value={formData.name} onChange={handleChange} required className="bg-gray-50 border-gray-300 text-gray-900" />
                   </div>
                   <div>
                     <Input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="bg-gray-50 border-gray-300 text-gray-900" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                     <Input type="tel" name="phone" placeholder="Telefono" value={formData.phone} onChange={handleChange} className="bg-gray-50 border-gray-300 text-gray-900" />
                   </div>
                   <div>
                     <Input type="text" name="company" placeholder="Azienda" value={formData.company} onChange={handleChange} className="bg-gray-50 border-gray-300 text-gray-900" />
                   </div>
                 </div>

                 <div>
                   <select name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-primary focus:border-transparent bg-gray-50 text-gray-900">
                     <option value="">Seleziona un servizio</option>
                     <option value="virtual-tour">Virtual Tour 360°</option>
                     <option value="sito-web">Sviluppo Sito Web</option>
                     <option value="fotografia">Fotografia Professionale</option>
                     <option value="google-maps">Google Maps & Street View</option>
                     <option value="immobiliare">Servizi Immobiliari</option>
                     <option value="nautica">Servizi Nautici</option>
                     <option value="altro">Altro</option>
                   </select>
                 </div>

                 <div>
                   <Textarea name="message" placeholder="Descrivi il tuo progetto..." value={formData.message} onChange={handleChange} rows={4} className="bg-gray-50 border-gray-300 text-gray-900" />
                 </div>

                 <button type="submit" className="w-full bg-tech-primary hover:bg-tech-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center text-[#0571d3]">
                   <Send className="mr-2 h-5 w-5" />
                   Invia richiesta
                 </button>

                 <p className="text-sm text-gray-600 text-center">
                   Risponderemo entro 24 ore. I tuoi dati sono protetti e non verranno condivisi.
                 </p>
               </form>
             </div>
           </div>
        </div>
      </div>
    </section>;
};
export default Contact;