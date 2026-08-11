import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function EducationCard() {
  return (
    <div className="md:col-span-3 lg:col-span-4 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
      <div>
        <h2 className="text-3xl font-heading mb-2">Educación y Certificaciones</h2>
        <p className="text-foreground/70 max-w-xl">Formación académica continua y certificaciones especializadas en desarrollo de software y arquitecturas cloud.</p>
      </div>
      
      <Accordion
        className="w-full md:w-[500px] bg-background rounded-2xl px-6 py-2 border border-border"
        type="single"
        collapsible
      >
        <AccordionItem className="border-b border-border" value="edu-1">
          <AccordionTrigger className="text-left font-heading py-4 text-base hover:text-main">
            Universidad La Salle (Est. 2021 - Presente)
          </AccordionTrigger>
          <AccordionContent className="text-sm text-foreground/70 pb-4">
            Ingeniería de Software. Desarrollo de proyecto de tesis enfocado en optimización de rutas de transporte urbano implementando algoritmos de geolocalización.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-none" value="cert-1">
          <AccordionTrigger className="text-left font-heading py-4 text-base hover:text-main">
            Certificaciones Especializadas (Udemy & Cisco)
          </AccordionTrigger>
          <AccordionContent className="text-sm text-foreground/70 pb-4 space-y-2">
            <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> Flask y MySQL – Proyecto Web Completo (2025)</p>
            <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> APIs RESTful con Python, FastAPI y JWT (2025)</p>
            <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> Cisco Networking Academy (2022)</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
