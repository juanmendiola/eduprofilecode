import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  HomeIcon,
  BriefcaseIcon,
  BellIcon,
  UserIcon,
  SearchIcon,
  PencilIcon,
  MapPinIcon,
  BuildingIcon,
  GraduationCapIcon,
  CalendarIcon,
  LinkIcon,
} from "lucide-react"
import Image from "next/image"

export default function PerfilPage() {
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
              <HomeIcon className="h-5 w-5" />
              <span className="text-xs">Inicio</span>
            </Link>
            <Link
              href="/empleos"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <BriefcaseIcon className="h-5 w-5" />
              <span className="text-xs">Empleos</span>
            </Link>
            <Link
              href="/notificaciones"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <BellIcon className="h-5 w-5" />
              <span className="text-xs">Notificaciones</span>
            </Link>
            <Link href="/perfil" className="flex flex-col items-center gap-1 text-foreground">
              <UserIcon className="h-5 w-5" />
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
        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/10 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
              >
                <PencilIcon className="h-4 w-4" />
              </Button>
              <div className="absolute -bottom-16 left-8">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Foto de perfil"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-background"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-0 right-0 bg-background rounded-full h-8 w-8 shadow"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="pt-20 pb-6 px-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">David Ochoa</h1>
                  <p className="text-muted-foreground">Desarrollador Frontend Senior</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      Medellin, Colombia
                    </span>
                    <span className="flex items-center gap-1">
                      <BuildingIcon className="h-4 w-4" />
                      TechCorp
                    </span>
                    <span className="flex items-center gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <Link href="https://marialopez.dev" className="text-primary hover:underline">
                        
                      
                    </span>
                  </div>
                </div>
                <Button>Editar perfil</Button>
              </div>
              <p className="mt-4 max-w-3xl">
                Desarrollador Frontend con más de 3 años de experiencia en la creación de interfaces de usuario
                atractivas y funcionales. Especializada en Next.js y TypeScript.
                
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "UI/UX",
                  "Accesibilidad Web",
                ].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="experiencia" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="experiencia">Experiencia</TabsTrigger>
            <TabsTrigger value="educacion">Educación</TabsTrigger>
            <TabsTrigger value="certificaciones">Certificaciones</TabsTrigger>
            <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
          </TabsList>

          <TabsContent value="experiencia" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Experiencia Profesional</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <PencilIcon className="h-4 w-4" />
                Añadir experiencia
              </Button>
            </div>

            {[
              {
                role: "Desarrolladora Frontend Senior",
                company: "TechCorp",
                period: "Enero 2022 - Presente",
                description:
                  "Desarrollo de aplicaciones web con React y Next.js. Implementación de interfaces de usuario accesibles y optimización del rendimiento.",
              },
              {
                role: "Desarrolladora Frontend",
                company: "InnovaSoft",
                period: "Marzo 2019 - Diciembre 2021",
                description:
                  "Desarrollo de componentes reutilizables con React. Colaboración con diseñadores UX/UI para implementar interfaces de usuario modernas.",
              },
              {
                role: "Desarrolladora Web Junior",
                company: "WebSolutions",
                period: "Junio 2017 - Febrero 2019",
                description:
                  "Desarrollo de sitios web responsivos con HTML, CSS y JavaScript. Mantenimiento y actualización de sitios web existentes.",
              },
            ].map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex gap-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt={`Logo ${exp.company}`}
                    width={64}
                    height={64}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="mt-3 text-sm">{exp.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="educacion" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Educación</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <PencilIcon className="h-4 w-4" />
                Añadir educación
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="h-16 w-16 rounded bg-muted flex items-center justify-center">
                  <GraduationCapIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Grado en Ingeniería Informática</h3>
                      <p className="text-muted-foreground">Universidad Politécnica de Madrid</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                    <CalendarIcon className="h-3 w-3" />
                    <span>2013 - 2017</span>
                  </div>
                  <p className="mt-3 text-sm">
                    Especialización en Ingeniería del Software. Proyecto final: Desarrollo de una aplicación web para la
                    gestión de proyectos colaborativos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificaciones" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Certificaciones</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <PencilIcon className="h-4 w-4" />
                Añadir certificación
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "React Advanced Developer",
                  issuer: "React Certification Board",
                  date: "Junio 2022",
                },
                {
                  name: "Web Accessibility Specialist",
                  issuer: "International Association of Accessibility Professionals",
                  date: "Marzo 2021",
                },
                {
                  name: "JavaScript Professional Developer",
                  issuer: "JavaScript Certification Authority",
                  date: "Noviembre 2020",
                },
                {
                  name: "Responsive Web Design",
                  issuer: "freeCodeCamp",
                  date: "Agosto 2019",
                },
              ].map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proyectos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Proyectos</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <PencilIcon className="h-4 w-4" />
                Añadir proyecto
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Dashboard de Analíticas",
                  description:
                    "Dashboard interactivo para visualización de datos de marketing con gráficos y filtros avanzados.",
                  technologies: ["React", "D3.js", "Tailwind CSS"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Plataforma de E-learning",
                  description: "Plataforma para cursos online con sistema de progreso, evaluaciones y certificados.",
                  technologies: ["Next.js", "TypeScript", "Supabase"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "App de Gestión de Tareas",
                  description: "Aplicación para gestión de tareas con funcionalidades de colaboración y recordatorios.",
                  technologies: ["React", "Redux", "Firebase"],
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "Tienda Online",
                  description: "E-commerce con catálogo de productos, carrito de compras y pasarela de pagos.",
                  technologies: ["Next.js", "Stripe", "MongoDB"],
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{project.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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

