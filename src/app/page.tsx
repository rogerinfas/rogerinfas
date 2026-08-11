import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-background text-foreground">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-border bg-secondary-background px-3 py-1 text-xs font-semibold text-foreground/80">
            React + shadcn/ui Initial Template
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            Proyecto Inicial Mínimo
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Configuración limpia y liviana con componentes nativos de React, Next.js App Router y la biblioteca de shadcn/ui.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button>Empezar</Button>
          <Button variant="outline">Documentación</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6">
          <Card>
            <CardHeader>
              <CardTitle>React 19 & Next.js 16</CardTitle>
              <CardDescription>Infraestructura base moderna.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm opacity-80">
              Arquitectura basada en Server Components e interfaz ultrarrápida.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui Componentes</CardTitle>
              <CardDescription>Librería UI lista para producción.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm opacity-80">
              Estilos con Tailwind CSS y accesibilidad garantizada con Radix UI primitives.
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
