import { useState } from 'react';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    label: 'Tutti i Progetti'
  }, {
    id: 'immobiliare',
    label: 'Immobiliare'
  }, {
    id: 'nautica',
    label: 'Nautica'
  }, {
    id: 'retail',
    label: 'Retail & Showroom'
  }, {
    id: 'hospitality',
    label: 'Hotel & Ristoranti'
  }, {
    id: 'cultura',
    label: 'Cultura & Musei'
  }];
  const projects = [{
    id: 1,
    title: "Agenzia Immobiliare Stima Casa Studio Gemelli - Torrevecchia Roma",
    category: "immobiliare",
    image: "/lovable-uploads/2fdb12b9-9c69-4d1b-ac28-c952941a65fd.png",
    description: "Virtual tour completo dell'agenzia immobiliare con uffici moderni e spazi funzionali",
    stats: {
      views: "4.5k",
      engagement: "94%"
    },
    link: "https://realsee.ai/WgwwxgW9"
  }, {
    id: 2,
    title: "Sito Archeologico Cavellas",
    category: "cultura",
    image: "/lovable-uploads/4034faa1-1360-4cd5-bc81-343fb22e9d3a.png",
    description: "Esplorazione virtuale del sito archeologico con reperti antichi e strutture storiche",
    stats: {
      views: "3.1k",
      engagement: "96%"
    },
    link: "https://realsee.ai/qjMMwaB6"
  }, {
    id: 3,
    title: "Valente Italian Properties Roma",
    category: "immobiliare",
    image: "/lovable-uploads/30819a08-f5b4-443e-802e-5476e3043baf.png",
    description: "Tour virtuale completo dell'agenzia immobiliare Valente a Roma con uffici moderni e consulenti professionali",
    stats: {
      views: "4.2k",
      engagement: "89%"
    },
    link: "https://realsee.ai/3kYYWYER"
  }, {
    id: 4,
    title: "Riva Boutique - Marciana Marina",
    category: "retail",
    image: "/lovable-uploads/3f83da03-bf00-4cc8-b133-073d8ec2c133.png",
    description: "Tour virtuale del negozio nautico con esposizione di barche e attrezzature marine professionali",
    stats: {
      views: "1.8k",
      engagement: "93%"
    },
    link: "https://realsee.ai/8VRR9eNj"
  }, {
    id: 5,
    title: "Immobile su due piani - Reggio Emilia",
    category: "immobiliare",
    image: "/lovable-uploads/87830f59-9930-4456-a88e-ca2d56cba25a.png",
    description: "Virtual tour di casa moderna su due livelli con ampi spazi luminosi e finiture di qualità",
    stats: {
      views: "1.5k",
      engagement: "91%"
    },
    link: "https://realsee.ai/N4eeOlDg"
  }, {
    id: 6,
    title: "Villa in Furore - Costiera Amalfitana",
    category: "immobiliare",
    image: "/lovable-uploads/81b253e0-5cf7-49fe-8088-7595806b2cf2.png",
    description: "Villa esclusiva sulla Costiera Amalfitana con vista panoramica mozzafiato sul mare e terrazze private",
    stats: {
      views: "7.8k",
      engagement: "95%"
    },
    link: "https://realsee.ai/7kyyNE2Y"
  }, {
    id: 7,
    title: "Parma Palazzo Liberati Trilocale",
    category: "immobiliare",
    image: "/lovable-uploads/c3f31521-68fd-4a0f-b2c2-e687cd453910.png",
    description: "Elegante trilocale nel centro storico di Parma con soffitti con travi a vista, cucina rustica e ampi spazi luminosi",
    stats: {
      views: "2.9k",
      engagement: "88%"
    },
    link: "https://realsee.ai/jmxxRajd"
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 sm:mb-6 text-[#439fcb]">
            Portfolio Interattivo
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Esplora i nostri lavori più recenti e scopri come trasformiamo spazi reali 
            in esperienze digitali coinvolgenti e memorabili.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} onClick={() => setActiveCategory(category.id)} size="sm" className={`transition-all duration-300 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 ${activeCategory === category.id ? 'bg-nav-color text-white hover:bg-nav-color/90' : 'border-nav-color text-nav-color hover:bg-nav-color hover:text-white'}`}>
              {category.label}
            </Button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map(project => <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <div className="aspect-video relative" style={{
              backgroundImage: project.image ? `url(${project.image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => project.link ? window.open(project.link, '_blank') : undefined}>
                    <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {project.stats.views} visite
                    </div>
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {project.stats.engagement} engagement
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="font-space-grotesk font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="group/btn w-full justify-between hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm" onClick={() => project.link ? window.open(project.link, '_blank') : undefined}>
                    Esplora il Tour
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>)}
        </div>

         {/* CTA Section */}
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
export default Portfolio;