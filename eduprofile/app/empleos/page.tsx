import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { SearchIcon, MapPinIcon, BriefcaseIcon, BuildingIcon, ClockIcon } from "lucide-react"
import Image from "next/image"

export default function EmpleosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="EduProfile Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold text-primary">EduProfile</span>
            </Link>
          </div>
          <div className="relative hidden md:flex items-center">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar empleos, personas, empresas..."
              className="w-[300px] rounded-full bg-muted pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <SearchIcon className="h-5 w-5" />
              <span className="text-xs">Inicio</span>
            </Link>
            <Link href="/empleos" className="flex flex-col items-center gap-1 text-foreground">
              <BriefcaseIcon className="h-5 w-5" />
              <span className="text-xs">Empleos</span>
            </Link>
            <Link
              href="/notificaciones"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <SearchIcon className="h-5 w-5" />
              <span className="text-xs">Notificaciones</span>
            </Link>
            <Link
              href="/perfil"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <SearchIcon className="h-5 w-5" />
              <span className="text-xs">Perfil</span>
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Ofertas Laborales</h1>
          <Button>Publicar Oferta</Button>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <SearchIcon className="h-4 w-4" />
                    Búsqueda
                  </h3>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Puesto, empresa o palabra clave" className="pl-9" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4" />
                    Ubicación
                  </h3>
                  <Input placeholder="Ciudad o país" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BriefcaseIcon className="h-4 w-4" />
                    Tipo de empleo
                  </h3>
                  <div className="space-y-2">
                    {["Tiempo completo", "Medio tiempo", "Contrato", "Freelance", "Prácticas"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BuildingIcon className="h-4 w-4" />
                    Sector
                  </h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Tecnología</SelectItem>
                      <SelectItem value="education">Educación</SelectItem>
                      <SelectItem value="health">Salud</SelectItem>
                      <SelectItem value="finance">Finanzas</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    Fecha de publicación
                  </h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Cualquier momento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Hoy</SelectItem>
                      <SelectItem value="week">Última semana</SelectItem>
                      <SelectItem value="month">Último mes</SelectItem>
                      <SelectItem value="any">Cualquier momento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Aplicar filtros</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Mostrando 1-10 de 56 resultados</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Relevancia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevancia</SelectItem>
                    <SelectItem value="recent">Más recientes</SelectItem>
                    <SelectItem value="salary">Mayor salario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {[1, 2, 3, 4, 5].map((job) => (
              <Card key={job} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 flex gap-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Logo empresa"
                      width={64}
                      height={64}
                      className="rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">
                            Desarrollador {job % 2 === 0 ? "Backend" : "Frontend"}
                          </h3>
                          <p className="text-muted-foreground">TechCorp {job}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Aplicar
                        </Button>
                      </div>
                      <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="h-3 w-3" />
                          Medellin, Colombia
                        </span>
                        <span className="flex items-center gap-1">
                          <BriefcaseIcon className="h-3 w-3" />
                          Tiempo completo
                        </span>
                        <span className="flex items-center gap-1">
                          <BuildingIcon className="h-3 w-3" />
                          Tecnología
                        </span>
                      </div>
                      <p className="mt-3 text-sm">
                        Buscamos desarrollador con experiencia en{" "}
                        {job % 2 === 0 ? "Node.js, Express y MongoDB" : "React, Next.js y TypeScript"} para unirse a
                        nuestro equipo.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          job % 2 === 0 ? "Node.js" : "React",
                          "Git",
                          job % 2 === 0 ? "MongoDB" : "TypeScript",
                        ].map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Publicado hace {job} día{job !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center mt-6">
              <div className="flex">
                <Button variant="outline" size="icon" disabled>
                  &lt;
                </Button>
                <Button variant="outline" size="icon" className="ml-1 bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="icon" className="ml-1">
                  2
                </Button>
                <Button variant="outline" size="icon" className="ml-1">
                  3
                </Button>
                <Button variant="outline" size="icon" className="ml-1">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="EduProfile Logo"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-semibold">EduProfile</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/acerca" className="hover:underline">
              Acerca de
            </Link>
            <Link href="/privacidad" className="hover:underline">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:underline">
              Términos
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EduProfile. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

