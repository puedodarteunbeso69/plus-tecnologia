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
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code2,
  Menu,
  Smartphone,
  Globe,
  Settings,
  Shield,
  Cloud,
  Brain,
  TrendingUp,
  Building,
  Phone,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const menuData = {
  "desarrollo-movil": {
    title: "📱 DESARROLLO MÓVIL",
    icon: Smartphone,
    columns: [
      {
        title: "Plataformas Nativas",
        items: [
          { name: "Apps iOS Nativas", href: "/desarrollo-movil/ios" },
          { name: "Apps Android Nativas", href: "/desarrollo-movil/android" },
          { name: "Apps Híbridas", href: "/desarrollo-movil/hibridas" },
          { name: "Apps React Native", href: "/desarrollo-movil/react-native" },
          { name: "Apps Flutter", href: "/desarrollo-movil/flutter" },
        ],
      },
      {
        title: "Soluciones Especializadas",
        items: [
          { name: "Apps Empresariales", href: "/desarrollo-movil/empresariales" },
          { name: "Apps E-commerce", href: "/desarrollo-movil/ecommerce" },
          { name: "Realidad Aumentada", href: "/desarrollo-movil/ar" },
          { name: "Apps Multiplataforma", href: "/desarrollo-movil/multiplataforma" },
          { name: "Mantenimiento Apps", href: "/desarrollo-movil/mantenimiento" },
        ],
      },
    ],
  },
  "desarrollo-web": {
    title: "🌐 DESARROLLO WEB",
    icon: Globe,
    columns: [
      {
        title: "Sitios Web Profesionales",
        items: [
          { name: "Sitios Web Corporativos", href: "/desarrollo-web/corporativos" },
          { name: "Tiendas Online", href: "/desarrollo-web/ecommerce" },
          { name: "Landing Pages", href: "/desarrollo-web/landing" },
          { name: "Portales Web", href: "/desarrollo-web/portales" },
          { name: "Aplicaciones Web", href: "/desarrollo-web/aplicaciones" },
        ],
      },
      {
        title: "Tecnologías Avanzadas",
        items: [
          { name: "WordPress Premium", href: "/desarrollo-web/wordpress" },
          { name: "CMS Personalizado", href: "/desarrollo-web/cms" },
          { name: "PWA Avanzadas", href: "/desarrollo-web/pwa" },
          { name: "APIs & Integraciones", href: "/desarrollo-web/apis" },
          { name: "Optimización Web", href: "/desarrollo-web/optimizacion" },
        ],
      },
    ],
  },
  "software-empresarial": {
    title: "💼 SOFTWARE EMPRESARIAL",
    icon: Settings,
    columns: [
      {
        title: "Sistemas de Gestión",
        items: [
          { name: "ERP Personalizado", href: "/software-empresarial/erp" },
          { name: "CRM Avanzado", href: "/software-empresarial/crm" },
          { name: "Sistemas de Gestión", href: "/software-empresarial/gestion" },
          { name: "Software Logística", href: "/software-empresarial/logistica" },
          { name: "Facturación Electrónica", href: "/software-empresarial/facturacion" },
        ],
      },
      {
        title: "Automatización y BI",
        items: [
          { name: "Automatización RPA", href: "/software-empresarial/rpa" },
          { name: "Integración Sistemas", href: "/software-empresarial/integracion" },
          { name: "Plataformas E-learning", href: "/software-empresarial/elearning" },
          { name: "Dashboards BI", href: "/software-empresarial/bi" },
          { name: "Microservicios", href: "/software-empresarial/microservicios" },
        ],
      },
    ],
  },
  ciberseguridad: {
    title: "🔒 CIBERSEGURIDAD",
    icon: Shield,
    columns: [
      {
        title: "Auditorías y Análisis",
        items: [
          { name: "Auditorías Seguridad", href: "/ciberseguridad/auditorias" },
          { name: "Pentesting Ético", href: "/ciberseguridad/pentesting" },
          { name: "Análisis Vulnerabilidades", href: "/ciberseguridad/vulnerabilidades" },
          { name: "Protección GDPR", href: "/ciberseguridad/gdpr" },
          { name: "Cumplimiento LOPD", href: "/ciberseguridad/lopd" },
        ],
      },
      {
        title: "Protección Avanzada",
        items: [
          { name: "Seguridad Cloud", href: "/ciberseguridad/cloud" },
          { name: "Encriptación Datos", href: "/ciberseguridad/encriptacion" },
          { name: "Backup Seguro", href: "/ciberseguridad/backup" },
          { name: "Monitoreo 24/7", href: "/ciberseguridad/monitoreo" },
          { name: "Hardening Servidores", href: "/ciberseguridad/hardening" },
        ],
      },
    ],
  },
  cloud: {
    title: "☁️ CLOUD COMPUTING",
    icon: Cloud,
    columns: [
      {
        title: "Plataformas Cloud",
        items: [
          { name: "Migración Cloud", href: "/cloud/migracion" },
          { name: "AWS Solutions", href: "/cloud/aws" },
          { name: "Microsoft Azure", href: "/cloud/azure" },
          { name: "Google Cloud", href: "/cloud/gcp" },
          { name: "Servidores VPS", href: "/cloud/vps" },
        ],
      },
      {
        title: "Servicios Cloud",
        items: [
          { name: "Infraestructura Cloud", href: "/cloud/infraestructura" },
          { name: "SaaS Development", href: "/cloud/saas" },
          { name: "Cloud Security", href: "/cloud/security" },
          { name: "Escalabilidad", href: "/cloud/escalabilidad" },
          { name: "Disaster Recovery", href: "/cloud/recovery" },
        ],
      },
    ],
  },
  "ia-bigdata": {
    title: "🤖 IA & BIG DATA",
    icon: Brain,
    columns: [
      {
        title: "Inteligencia Artificial",
        items: [
          { name: "Machine Learning", href: "/ia-bigdata/machine-learning" },
          { name: "Chatbots IA", href: "/ia-bigdata/chatbots" },
          { name: "Procesamiento NLP", href: "/ia-bigdata/nlp" },
          { name: "Visión Artificial", href: "/ia-bigdata/vision" },
          { name: "Sistemas Recomendación", href: "/ia-bigdata/recomendacion" },
        ],
      },
      {
        title: "Big Data Analytics",
        items: [
          { name: "Business Intelligence", href: "/ia-bigdata/bi" },
          { name: "Big Data Analytics", href: "/ia-bigdata/analytics" },
          { name: "Dashboards Predictivos", href: "/ia-bigdata/predictivos" },
          { name: "Data Mining", href: "/ia-bigdata/mining" },
          { name: "Automatización IA", href: "/ia-bigdata/automatizacion" },
        ],
      },
    ],
  },
  "marketing-digital": {
    title: "📈 MARKETING DIGITAL",
    icon: TrendingUp,
    columns: [
      {
        title: "SEO y Posicionamiento",
        items: [
          { name: "SEO Técnico", href: "/marketing-digital/seo-tecnico" },
          { name: "SEO Local", href: "/marketing-digital/seo-local" },
          { name: "Auditoría SEO", href: "/marketing-digital/auditoria-seo" },
          { name: "Link Building", href: "/marketing-digital/link-building" },
          { name: "Contenido SEO", href: "/marketing-digital/contenido-seo" },
        ],
      },
      {
        title: "Publicidad y Analytics",
        items: [
          { name: "Google Ads", href: "/marketing-digital/google-ads" },
          { name: "Facebook Ads", href: "/marketing-digital/facebook-ads" },
          { name: "Email Marketing", href: "/marketing-digital/email" },
          { name: "Analytics", href: "/marketing-digital/analytics" },
          { name: "Conversión CRO", href: "/marketing-digital/cro" },
        ],
      },
    ],
  },
};

const mobileMenuData = [
  { name: "🏠 INICIO", href: "/" },
  {
    name: "📱 DESARROLLO MÓVIL",
    href: "/desarrollo-movil",
    children: [
      { name: "Apps iOS", href: "/desarrollo-movil/ios" },
      { name: "Apps Android", href: "/desarrollo-movil/android" },
      { name: "Apps Híbridas", href: "/desarrollo-movil/hibridas" },
      { name: "Apps Empresariales", href: "/desarrollo-movil/empresariales" },
      { name: "Realidad Aumentada", href: "/desarrollo-movil/ar" },
    ]
  },
  {
    name: "🌐 DESARROLLO WEB",
    href: "/desarrollo-web",
    children: [
      { name: "Sitios Corporativos", href: "/desarrollo-web/corporativos" },
      { name: "E-commerce", href: "/desarrollo-web/ecommerce" },
      { name: "Landing Pages", href: "/desarrollo-web/landing" },
      { name: "Aplicaciones Web", href: "/desarrollo-web/aplicaciones" },
      { name: "CMS Personalizado", href: "/desarrollo-web/cms" },
    ]
  },
  {
    name: "💼 SOFTWARE EMPRESARIAL",
    href: "/software-empresarial",
    children: [
      { name: "ERP Personalizado", href: "/software-empresarial/erp" },
      { name: "CRM Avanzado", href: "/software-empresarial/crm" },
      { name: "Automatización", href: "/software-empresarial/rpa" },
      { name: "Integración", href: "/software-empresarial/integracion" },
      { name: "Business Intelligence", href: "/software-empresarial/bi" },
    ]
  },
  {
    name: "🔒 CIBERSEGURIDAD",
    href: "/ciberseguridad",
    children: [
      { name: "Auditorías", href: "/ciberseguridad/auditorias" },
      { name: "Pentesting", href: "/ciberseguridad/pentesting" },
      { name: "GDPR", href: "/ciberseguridad/gdpr" },
      { name: "Seguridad Cloud", href: "/ciberseguridad/cloud" },
      { name: "Monitoreo", href: "/ciberseguridad/monitoreo" },
    ]
  },
  {
    name: "☁️ CLOUD COMPUTING",
    href: "/cloud",
    children: [
      { name: "AWS", href: "/cloud/aws" },
      { name: "Azure", href: "/cloud/azure" },
      { name: "Migración", href: "/cloud/migracion" },
      { name: "SaaS", href: "/cloud/saas" },
      { name: "VPS", href: "/cloud/vps" },
    ]
  },
  {
    name: "🤖 IA & BIG DATA",
    href: "/ia-bigdata",
    children: [
      { name: "Machine Learning", href: "/ia-bigdata/machine-learning" },
      { name: "Chatbots", href: "/ia-bigdata/chatbots" },
      { name: "Analytics", href: "/ia-bigdata/analytics" },
      { name: "Predictivo", href: "/ia-bigdata/predictivos" },
      { name: "Automatización", href: "/ia-bigdata/automatizacion" },
    ]
  },
  {
    name: "📈 MARKETING DIGITAL",
    href: "/marketing-digital",
    children: [
      { name: "SEO", href: "/marketing-digital/seo-tecnico" },
      { name: "Google Ads", href: "/marketing-digital/google-ads" },
      { name: "Social Media", href: "/marketing-digital/facebook-ads" },
      { name: "Analytics", href: "/marketing-digital/analytics" },
      { name: "CRO", href: "/marketing-digital/cro" },
    ]
  },
  {
    name: "🏢 NOSOTROS",
    href: "/nosotros",
    children: [
      { name: "Quiénes Somos", href: "/nosotros/quienes-somos" },
      { name: "Portfolio", href: "/nosotros/portfolio" },
      { name: "Casos Éxito", href: "/nosotros/casos-exito" },
      { name: "Equipo", href: "/nosotros/equipo" },
      { name: "Certificaciones", href: "/nosotros/certificaciones" },
    ]
  },
  { name: "📞 CONTACTO", href: "/contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleMobileItem = (itemName: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PLUS TECNOLOGIA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              INICIO
            </Link>

            {Object.entries(menuData).map(([key, menu]) => (
              <DropdownMenu key={key}>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none">
                  {menu.title.replace(/^.{2}\s/, '')}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[800px] p-0 border-0 shadow-2xl">
                  <div className="bg-white rounded-lg">
                    <div className="p-6 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {menu.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Soluciones profesionales y especializadas
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 p-6">
                      {menu.columns.map((column, colIndex) => (
                        <div key={colIndex}>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 text-blue-600">
                            {column.title}
                          </h4>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href}
                                  className="block px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <Link
              href="/nosotros"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              NOSOTROS
            </Link>
            <Link
              href="/contacto"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              CONTACTO
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 hidden sm:inline-flex">
              Consulta Gratis
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                        <Code2 className="h-4 w-4 text-white" />
                      </div>
                      <span>PLUS TECNOLOGIA</span>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="text-left">
                    Menú de navegación
                  </SheetDescription>
                </SheetHeader>

                <nav className="mt-6">
                  <ul className="space-y-1">
                    {mobileMenuData.map((item, index) => (
                      <li key={index}>
                        <div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={item.href}
                              className="flex-1 px-2 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                            {item.children && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleMobileItem(item.name)}
                                className="px-2"
                              >
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    expandedItems[item.name] ? 'rotate-90' : ''
                                  }`}
                                />
                              </Button>
                            )}
                          </div>
                          {item.children && expandedItems[item.name] && (
                            <ul className="mt-1 ml-4 space-y-1">
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.href}
                                    className="block px-2 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar Ahora
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
