import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BellIcon,
  HomeIcon,
  BriefcaseIcon,
  UserIcon,
  SearchIcon,
  MessageSquareIcon,
  CheckIcon,
  EyeIcon,
} from "lucide-react"
import Image from "next/image"

export default function NotificacionesPage() {
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
            <Link href="/notificaciones" className="flex flex-col items-center gap-1 text-foreground">
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
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Notificaciones</h1>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <CheckIcon className="h-4 w-4" />
            Marcar todas como leídas
          </Button>
        </div>

        <Tabs defaultValue="todas" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="empleos">Empleos</TabsTrigger>
            <TabsTrigger value="mensajes">Mensajes</TabsTrigger>
            <TabsTrigger value="red">Red</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="space-y-4">
            <Card className="bg-primary/5 border-l-4 border-l-primary">
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Tu aplicación ha sido revisada</h3>
                    <span className="text-xs text-muted-foreground">Hace 1 hora</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    TechCorp ha revisado tu aplicación para el puesto de Desarrollador Frontend. Haz clic para ver los
                    detalles.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="default">
                      Ver detalles
                    </Button>
                    <Button size="sm" variant="ghost" className="flex items-center gap-1">
                      <EyeIcon className="h-3 w-3" />
                      Marcar como leída
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <MessageSquareIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Nuevo mensaje de Ana García</h3>
                    <span className="text-xs text-muted-foreground">Ayer</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ana García te ha enviado un mensaje sobre oportunidades de colaboración.
                  </p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">
                      Responder
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Foto de perfil"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Carlos Rodríguez quiere conectar</h3>
                    <span className="text-xs text-muted-foreground">Hace 2 días</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Carlos Rodríguez, Director de Tecnología en InnovaTech, quiere añadirte a su red profesional.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="default">
                      Aceptar
                    </Button>
                    <Button size="sm" variant="outline">
                      Rechazar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Nuevas ofertas que podrían interesarte</h3>
                    <span className="text-xs text-muted-foreground">Hace 3 días</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hemos encontrado 5 nuevas ofertas de empleo que coinciden con tu perfil profesional.
                  </p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">
                      Ver ofertas
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="empleos" className="space-y-4">
            <Card className="bg-primary/5 border-l-4 border-l-primary">
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Tu aplicación ha sido revisada</h3>
                    <span className="text-xs text-muted-foreground">Hace 1 hora</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    TechCorp ha revisado tu aplicación para el puesto de Desarrollador Frontend. Haz clic para ver los
                    detalles.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="default">
                      Ver detalles
                    </Button>
                    <Button size="sm" variant="ghost" className="flex items-center gap-1">
                      <EyeIcon className="h-3 w-3" />
                      Marcar como leída
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Nuevas ofertas que podrían interesarte</h3>
                    <span className="text-xs text-muted-foreground">Hace 3 días</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hemos encontrado 5 nuevas ofertas de empleo que coinciden con tu perfil profesional.
                  </p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">
                      Ver ofertas
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mensajes" className="space-y-4">
            <Card>
              <CardContent className="p-4 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <MessageSquareIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Nuevo mensaje de Ana García</h3>
                    <span className="text-xs text-muted-foreground">Ayer</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ana García te ha enviado un mensaje sobre oportunidades de colaboración.
                  </p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">
                      Responder
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="red" className="space-y-4">
            <Card>
              <CardContent className="p-4 flex gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Foto de perfil"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Carlos Rodríguez quiere conectar</h3>
                    <span className="text-xs text-muted-foreground">Hace 2 días</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Carlos Rodríguez, Director de Tecnología en InnovaTech, quiere añadirte a su red profesional.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="default">
                      Aceptar
                    </Button>
                    <Button size="sm" variant="outline">
                      Rechazar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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

