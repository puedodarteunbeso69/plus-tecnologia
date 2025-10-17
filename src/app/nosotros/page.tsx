import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Code2,
  Brain,
  Shield,
  Cloud,
  Globe,
  Star,
  Calendar,
  Building2,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre Nosotros | PLUS TECNOLOGIA - Expertos en Desarrollo y Tecnología",
  description: "Conoce PLUS TECNOLOGIA: equipo de expertos en desarrollo de software, ciberseguridad, cloud computing e IA. +10 años transformando empresas con tecnología.",
  keywords: [
    "sobre plus tecnologia",
    "equipo desarrollo software",
    "empresa tecnologia madrid",
    "expertos desarrollo",
    "historia plus tecnologia",
    "valores empresa",
    "equipo expertos IT"
  ],
  openGraph: {
    title: "Sobre Nosotros | PLUS TECNOLOGIA",
    description: "Descubre quiénes somos: equipo de expertos apasionados por la tecnología con +10 años transformando empresas.",
    images: ["/images/about-us-og.jpg"],
    type: "website"
  }
};

const teamMembers = [
  {
    name: "Aurimas Markunas",
    role: "CEO",
    speciality: "Chief Executive Officer",
    experience: "15+ años",
    image: "",
    skills: ["Leadership", "Strategy", "Business Development", "Innovation"],
    linkedin: "#"
  },
  {
    name: "Ramon Álvarez Vega",
    role: "CFO",
    speciality: "Chief Financial Officer",
    experience: "12+ años",
    image: "",
    skills: ["Finance", "Investment", "Risk Management", "Operations"],
    linkedin: "#"
  },
  {
    name: "Carlos Herrera Jiménez",
    role: "CTO",
    speciality: "Chief Technology Officer",
    experience: "14+ años",
    image: "",
    skills: ["Technology Strategy", "Architecture", "Development", "Innovation"],
    linkedin: "#"
  },
  {
    name: "Sara Kim",
    role: "CMO",
    speciality: "Chief Marketing Officer",
    experience: "10+ años",
    image: "",
    skills: ["Marketing", "Branding", "Digital Strategy", "Growth"],
    linkedin: "#"
  },
  {
    name: "Marina Costa Silva",
    role: "COO",
    speciality: "Chief Operations Officer",
    experience: "11+ años",
    image: "",
    skills: ["Operations", "Process Optimization", "Team Management", "Quality"],
    linkedin: "#"
  },
  {
    name: "Carmen López",
    role: "UX/UI Designer",
    speciality: "Diseño de Experiencias",
    experience: "7+ años",
    image: "",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    linkedin: "#"
  }
];

const companyValues = [
  {
    icon: Target,
    title: "Excelencia Técnica",
    description: "Utilizamos las mejores prácticas y tecnologías de vanguardia para entregar soluciones de máxima calidad."
  },
  {
    icon: Users,
    title: "Enfoque al Cliente",
    description: "Cada proyecto es único y nos adaptamos a las necesidades específicas de cada cliente y su industria."
  },
  {
    icon: TrendingUp,
    title: "Innovación Continua",
    description: "Nos mantenemos a la vanguardia tecnológica para ofrecer las soluciones más avanzadas del mercado."
  },
  {
    icon: Shield,
    title: "Seguridad y Confiabilidad",
    description: "La seguridad y la confiabilidad son pilares fundamentales en todos nuestros desarrollos."
  },
  {
    icon: Globe,
    title: "Transparencia",
    description: "Comunicación clara, procesos transparentes y entregas puntuales en cada fase del proyecto."
  },
  {
    icon: Award,
    title: "Compromiso",
    description: "Nos comprometemos con el éxito de tu proyecto desde la primera consulta hasta el soporte continuo."
  }
];

const companyStats = [
  {
    number: "10+",
    label: "Años de Experiencia",
    icon: Calendar
  },
  {
    number: "50+",
    label: "Proyectos Completados",
    icon: CheckCircle
  },
  {
    number: "25+",
    label: "Clientes Satisfechos",
    icon: Users
  },
  {
    number: "98%",
    label: "Tasa de Éxito",
    icon: Target
  }
];

const technologies = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"]
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "Java", "C#", "PHP"]
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "iOS Native", "Android Native"]
  },
  {
    category: "Cloud",
    tools: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    category: "Database",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    category: "AI/ML",
    tools: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"]
  }
];

const timeline = [
  {
    year: "2014",
    title: "Fundación",
    description: "Inicio de PLUS TECNOLOGIA con enfoque en desarrollo web y móvil."
  },
  {
    year: "2017",
    title: "Expansión Cloud",
    description: "Incorporamos servicios de cloud computing y migración a AWS."
  },
  {
    year: "2019",
    title: "Ciberseguridad",
    description: "Lanzamos división de ciberseguridad con servicios de pentesting."
  },
  {
    year: "2021",
    title: "IA & Big Data",
    description: "Agregamos capacidades de inteligencia artificial y análisis de datos."
  },
  {
    year: "2023",
    title: "Certificaciones",
    description: "Obtuvimos certificaciones AWS Advanced Partner e ISO 27001."
  },
  {
    year: "2025",
    title: "Liderazgo",
    description: "Consolidación como referente en transformación digital empresarial."
  }
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Nosotros</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Building2 className="w-4 h-4 mr-2" />
                  Sobre Nosotros
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Somos <span className="text-blue-600">PLUS TECNOLOGIA</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Un equipo de expertos apasionados por la tecnología, comprometidos con transformar ideas en soluciones digitales que impulsan el crecimiento empresarial. Con más de 10 años de experiencia, hemos ayudado a decenas de empresas a alcanzar sus objetivos tecnológicos.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="#equipo">
                  <Button className="h-12 px-6 text-base bg-blue-600 hover:bg-blue-700">
                    Conoce nuestro Equipo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="default" className="h-12 px-6 text-base" variant="outline">
                    Trabaja con Nosotros
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Equipo PLUS TECNOLOGIA"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <stat.icon className="h-12 w-12 mx-auto text-blue-600" />
                <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Transformar la manera en que las empresas operan a través de soluciones tecnológicas innovadoras.
                  Creamos software que no solo resuelve problemas, sino que abre nuevas oportunidades de crecimiento
                  y eficiencia para nuestros clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ser el socio tecnológico de referencia para empresas que buscan innovar y crecer.
                  Aspiramos a liderar la transformación digital en España, desarrollando soluciones que
                  marquen la diferencia en la competitividad de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestros <span className="text-blue-600">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Equipo <span className="text-blue-600">Ejecutivo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales expertos y apasionados que hacen posible cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="font-semibold text-blue-600">{member.role}</div>
                    <div>{member.speciality}</div>
                    <div className="text-sm">{member.experience}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver LinkedIn
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Tecnologías</span> que Dominamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.tools.map((tool, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestra <span className="text-blue-600">Historia</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestra <span className="text-blue-600">Oficina</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Madrid, España</CardTitle>
                <CardDescription>Oficinas centrales en el corazón de la capital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-gray-600">C. de Orense, 68, 12º<br />Tetuán, 28020 Madrid</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-gray-600">915 493 616</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@plustecologia.es</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop"
                alt="Oficinas PLUS TECNOLOGIA Madrid"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Quieres Formar Parte del Equipo?
            </h2>
            <p className="text-xl text-blue-100">
              Siempre estamos buscando talento excepcional para unirse a nuestro equipo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Ver Ofertas de Trabajo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                  Contactar RRHH
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Un equipo apasionado por la tecnología, comprometido con el éxito de nuestros clientes desde 2014.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/equipo" className="hover:text-white transition-colors">Nuestro Equipo</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Trabajar con Nosotros</Link></li>
                <li><Link href="/valores" className="hover:text-white transition-colors">Valores</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ia-big-data" className="hover:text-white transition-colors">IA & Big Data</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@plustecologia.es</li>
                <li>915 493 616</li>
                <li>C. de Orense, 68, 12º</li>
                <li>Tetuán, 28020 Madrid</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat */}
      <WhatsAppChat />
    </div>
  );
}
