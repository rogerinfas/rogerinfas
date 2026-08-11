import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function EducationCard() {
  return (
    <div className="md:col-span-3 lg:col-span-4 bg-secondary-background/60 rounded-2xl p-8 sm:p-10 border border-border flex flex-col md:flex-row gap-8 items-start md:items-center justify-between transition-all hover:border-foreground/30">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold block mb-2">[ ACADÉMICO ]</span>
        <h2 className="text-3xl font-serif italic mb-2">Educación & Certificaciones</h2>
        <p className="text-xs text-foreground/60 max-w-xl leading-relaxed">Formación académica universitaria y especializaciones técnicas en arquitectura de software y desarrollo web.</p>
      </div>
      
      <Accordion
        className="w-full md:w-[500px] bg-background/50 rounded-xl px-6 py-1 border border-border/80"
        type="single"
        collapsible
      >
        <AccordionItem className="border-b border-border/60" value="edu-1">
          <AccordionTrigger className="text-left font-heading text-xs uppercase tracking-wider py-4 hover:no-underline hover:text-foreground/70">
            Universidad La Salle (2021 - Presente)
          </AccordionTrigger>
          <AccordionContent className="text-xs text-foreground/75 pb-4 leading-relaxed">
            Ingeniería de Software. Proyecto de tesis enfocado en optimización de rutas de transporte urbano implementando algoritmos de geolocalización y movilidad inteligente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="cert-1">
          <AccordionTrigger className="text-left font-heading text-xs uppercase tracking-wider py-4 hover:no-underline hover:text-foreground/70">
            Certificaciones Técnicas (Udemy & Cisco)
          </AccordionTrigger>
          <AccordionContent className="text-xs text-foreground/75 pb-4 space-y-2">
            <p>• Flask y MySQL – Desarrollo Web Integral (2025)</p>
            <p>• APIs RESTful con Python, FastAPI y JWT (2025)</p>
            <p>• Cisco Networking Academy (2022)</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
