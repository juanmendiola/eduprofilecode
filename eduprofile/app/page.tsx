import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, BellIcon, HomeIcon, UserIcon, SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
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
            <Link
              href="/perfil"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <UserIcon className="h-5 w-5" />
              <span className="text-xs">Perfil</span>
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <HomeIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <BriefcaseIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <UserIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-10 md:py-16">
          <div className="container grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Encuentra tu próxima oportunidad profesional
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Conecta con empresas, explora ofertas laborales y desarrolla tu carrera profesional con EduProfile.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg">Buscar Empleos</Button>
                <Button size="lg" variant="outline">
                  Publicar Oferta
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Profesionales trabajando"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Ofertas Destacadas</h2>
              <Link href="/empleos" className="text-primary hover:underline">
                Ver todas
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((job) => (
                <Card key={job} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-20 bg-primary/10 relative">
                      <div className="absolute -bottom-6 left-4">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Logo empresa"
                          width={48}
                          height={48}
                          className="rounded border-2 border-background bg-background"
                        />
                      </div>
                    </div>
                    <div className="p-6 pt-8">
                      <h3 className="font-semibold text-lg">Desarrollador Frontend</h3>
                      <p className="text-muted-foreground text-sm mb-2">TechCorp • Madrid, España</p>
                      <p className="text-sm mb-4">
                        Buscamos desarrollador con experiencia en React, Next.js y TypeScript para unirse a nuestro
                        equipo.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Hace 2 días</span>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Empresas Destacadas</h2>
              <Link href="/empresas" className="text-primary hover:underline">
                Ver todas
              </Link>
            </div>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {[1, 2, 3, 4, 5, 6].map((company) => (
                <Card key={company} className="flex flex-col items-center justify-center p-6">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Logo empresa"
                    width={64}
                    height={64}
                    className="mb-3"
                  />
                  <p className="font-medium text-center">Empresa {company}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
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

