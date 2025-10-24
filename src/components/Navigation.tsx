"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code2,
  Menu,
  Smartphone,
  Globe,
  Building2,
  Shield,
  Cloud,
  Brain,
  TrendingUp,
  Users,
  Phone,
  ChevronDown,
  ChevronRight,
  Calculator,
} from "lucide-react";

const megaMenuData = {
  software: {
    title: "SOFTWARE EMPRESARIAL",
    icon: Building2,
    columns: [
      {
        title: "Servicios Disponibles",
        items: [
          { name: "Ver Todos los Servicios", href: "/software-empresarial" },
          { name: "ERP Personalizado", href: "/software-empresarial#erp" },
          { name: "CRM Avanzado", href: "/software-empresarial#crm" },
          { name: "Business Intelligence", href: "/software-empresarial#bi" },
          { name: "Automatización RPA", href: "/software-empresarial#rpa" },
        ],
      },
      {
        title: "Información",
        items: [
          { name: "Casos de Éxito", href: "/portfolio" },
          { name: "Consulta Personalizada", href: "/contacto" },
          { name: "Sobre Nosotros", href: "/nosotros" },
        ],
      },
    ],
  },
  security: {
    title: "CIBERSEGURIDAD",
    icon: Shield,
    columns: [
      {
        title: "Servicios Disponibles",
        items: [
          { name: "Ver Todos los Servicios", href: "/ciberseguridad" },
          { name: "Pentesting Ético", href: "/ciberseguridad/pentesting" },
          { name: "Auditorías de Seguridad", href: "/ciberseguridad#auditorias" },
          { name: "Protección GDPR", href: "/ciberseguridad#gdpr" },
          { name: "Monitoreo 24/7", href: "/ciberseguridad#monitoreo" },
        ],
      },
      {
        title: "Información",
        items: [
          { name: "Blog Ciberseguridad", href: "/blog?category=ciberseguridad" },
          { name: "Casos de Éxito", href: "/portfolio" },
          { name: "Consulta de Emergencia", href: "/contacto" },
        ],
      },
    ],
  },
  cloud: {
    title: "CLOUD COMPUTING",
    icon: Cloud,
    columns: [
      {
        title: "Servicios Disponibles",
        items: [
          { name: "Ver Todos los Servicios", href: "/cloud-computing" },
          { name: "Migración a la Nube", href: "/cloud-computing#migracion" },
          { name: "AWS Solutions", href: "/cloud-computing#aws" },
          { name: "Microsoft Azure", href: "/cloud-computing#azure" },
          { name: "Optimización de Costos", href: "/cloud-computing#optimizacion" },
        ],
      },
      {
        title: "Información",
        items: [
          { name: "Blog Cloud Computing", href: "/blog?category=cloud" },
          { name: "Casos de Éxito", href: "/portfolio" },
          { name: "Assessment Gratuito", href: "/contacto" },
        ],
      },
    ],
  },
  ai: {
    title: "IA & BIG DATA",
    icon: Brain,
    columns: [
      {
        title: "Servicios Disponibles",
        items: [
          { name: "Ver Todos los Servicios", href: "/ia-big-data" },
          { name: "Machine Learning", href: "/ia-big-data#machine-learning" },
          { name: "Chatbots Inteligentes", href: "/ia-big-data#chatbots" },
          { name: "Big Data Analytics", href: "/ia-big-data#analytics" },
          { name: "Computer Vision", href: "/ia-big-data#vision" },
        ],
      },
      {
        title: "Información",
        items: [
          { name: "Blog IA & Big Data", href: "/blog?category=ia" },
          { name: "Casos de Éxito", href: "/portfolio" },
          { name: "Consulta IA Gratuita", href: "/contacto" },
        ],
      },
    ],
  },
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const MegaMenu = ({ section }: { section: keyof typeof megaMenuData }) => {
    const data = megaMenuData[section];
    return (
      <DropdownMenuContent className="w-screen max-w-6xl p-6 mt-2">
        <div className="grid grid-cols-2 gap-8">
          {data.columns.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    );
  };

  const MobileSubMenu = ({ section }: { section: keyof typeof megaMenuData }) => {
    const data = megaMenuData[section];
    const isSubmenuOpen = openSubmenu === section;

    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setOpenSubmenu(isSubmenuOpen ? null : section)}
          className="flex items-center justify-between w-full py-3 px-4 text-left hover:bg-gray-50"
        >
          <div className="flex items-center space-x-3">
            <data.icon className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-gray-900">{data.title}</span>
          </div>
          <ChevronRight
            className={`h-4 w-4 text-gray-500 transition-transform ${
              isSubmenuOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isSubmenuOpen && (
          <div className="bg-gray-50 px-4 pb-4">
            {data.columns.map((column, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-medium text-gray-900 text-sm mb-2 px-2">
                  {column.title}
                </h4>
                <ul className="space-y-1">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PLUS TECNOLOGIA</span>
          </Link>

          <nav className="flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              INICIO
            </Link>

            {Object.entries(megaMenuData).map(([key, data]) => (
              <DropdownMenu key={key}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    <span>{data.title}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <MegaMenu section={key as keyof typeof megaMenuData} />
              </DropdownMenu>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/calculadora-presupuesto">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Precio
              </Button>
            </Link>
            <Link href="/contacto">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Consulta Gratis
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">PLUS TECNOLOGIA</span>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0 overflow-y-auto">
              <SheetHeader className="p-4 border-b border-gray-200">
                <SheetTitle className="text-left">Menú de Navegación</SheetTitle>
              </SheetHeader>

              <div className="py-4">
                <Link
                  href="/"
                  className="flex items-center space-x-3 py-3 px-4 hover:bg-gray-50 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">H</span>
                  </div>
                  <span className="font-medium text-gray-900">INICIO</span>
                </Link>

                {Object.entries(megaMenuData).map(([key]) => (
                  <MobileSubMenu key={key} section={key as keyof typeof megaMenuData} />
                ))}

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <Link
                    href="/nosotros"
                    className="flex items-center space-x-3 py-3 px-4 hover:bg-gray-50 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Nosotros</span>
                  </Link>

                  <Link
                    href="/blog"
                    className="flex items-center space-x-3 py-3 px-4 hover:bg-gray-50 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">Blog</span>
                  </Link>

                  <Link
                    href="/contacto"
                    className="flex items-center space-x-3 py-3 px-4 hover:bg-gray-50 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">Contacto</span>
                  </Link>
                </div>

                <div className="p-4 space-y-3">
                  <Link href="/calculadora-presupuesto" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calcular Presupuesto
                    </Button>
                  </Link>
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Consulta Gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
