import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function EducationCard() {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50">[ 04 / EDUCACIÓN & CERTIFICACIONES ]</span>
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">FORMACIÓN</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif italic">Formación Académica Continuada</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Ingeniería universitaria acreditada y certificaciones técnicas especializadas en desarrollo backend y cloud.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Accordion
            className="w-full border border-border rounded-2xl px-8 py-2 bg-secondary-background/40 divide-y divide-border"
            type="single"
            collapsible
          >
            <AccordionItem className="border-b border-border" value="edu-1">
              <AccordionTrigger className="text-left font-heading text-sm uppercase tracking-wider py-6 hover:no-underline hover:text-foreground/70">
                Universidad La Salle (2021 - Presente)
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75 pb-6 leading-relaxed">
                Ingeniería de Software. Proyecto de tesis enfocado en optimización de rutas de transporte urbano implementando algoritmos de geolocalización y movilidad inteligente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-none" value="cert-1">
              <AccordionTrigger className="text-left font-heading text-xs uppercase tracking-wider py-6 hover:no-underline hover:text-foreground/70">
                Certificaciones Técnicas Especializadas
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75 pb-6 space-y-3">
                <p>• Flask y MySQL – Desarrollo Web Integral (2025)</p>
                <p>• APIs RESTful con Python, FastAPI y JWT (2025)</p>
                <p>• Cisco Networking Academy (2022)</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
