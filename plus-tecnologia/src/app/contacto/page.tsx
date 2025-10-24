"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Code2,
  Send,
  MessageSquare,
  Users,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
    presupuesto: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case "nombre":
        if (!value.trim()) {
          newErrors.nombre = "El nombre es obligatorio";
        } else if (value.trim().length < 2) {
          newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
        } else {
          delete newErrors.nombre;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "El email es obligatorio";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "Formato de email inválido";
        } else {
          delete newErrors.email;
        }
        break;

      case "telefono":
        const phoneRegex = /^[+]?[\d\s-()]+$/;
        if (!value.trim()) {
          newErrors.telefono = "El teléfono es obligatorio";
        } else if (!phoneRegex.test(value)) {
          newErrors.telefono = "Formato de teléfono inválido";
        } else {
          delete newErrors.telefono;
        }
        break;

      case "mensaje":
        if (!value.trim()) {
          newErrors.mensaje = "El mensaje es obligatorio";
        } else if (value.trim().length < 10) {
          newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
        } else {
          delete newErrors.mensaje;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos
    Object.keys(formData).forEach(key => {
      if (["nombre", "email", "telefono", "mensaje"].includes(key)) {
        validateField(key, formData[key as keyof typeof formData]);
      }
    });

    // Verificar si hay errores
    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío de email (aquí integrarías con un servicio real como EmailJS, Resend, etc.)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        servicio: "",
        mensaje: "",
        presupuesto: ""
      });
    } catch (error) {
      console.error("Error enviando formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Contacto</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contacto Directo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ¿Hablamos de tu <span className="text-blue-600">Proyecto</span>?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estamos aquí para ayudarte a transformar tu idea en realidad. Consulta gratuita y presupuesto sin compromiso en 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Llamada Directa</CardTitle>
                <CardDescription>Habla directamente con nuestros expertos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">915493616</p>
                <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Mail className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle>Email Corporativo</CardTitle>
                <CardDescription>Respuesta garantizada en 2 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-green-600 mb-2">info@plustecologia.es</p>
                <p className="text-gray-600">Disponible 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <MapPin className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle>Oficina Madrid</CardTitle>
                <CardDescription>Reuniones presenciales disponibles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">C. de Orense, 68, 12º</p>
                <p className="text-gray-600">Tetuán, 28020 Madrid</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Solicita tu <span className="text-blue-600">Consulta Gratuita</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Completa el formulario y te contactaremos en menos de 24 horas con un análisis personalizado de tu proyecto.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Consultoría Personalizada",
                    description: "Análisis detallado de tus necesidades tecnológicas"
                  },
                  {
                    icon: Calendar,
                    title: "Reunión Sin Compromiso",
                    description: "Videollamada o presencial según prefieras"
                  },
                  {
                    icon: CheckCircle,
                    title: "Presupuesto Detallado",
                    description: "Propuesta económica transparente y ajustada"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Formulario de Contacto</CardTitle>
                <CardDescription>
                  Todos los campos marcados con * son obligatorios
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600">
                      Hemos recibido tu consulta. Te contactaremos en las próximas 24 horas.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Enviar Otro Mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className={errors.nombre ? "border-red-500" : ""}
                          placeholder="Tu nombre completo"
                        />
                        {errors.nombre && (
                          <p className="text-sm text-red-600">{errors.nombre}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Corporativo *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "border-red-500" : ""}
                          placeholder="nombre@empresa.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className={errors.telefono ? "border-red-500" : ""}
                          placeholder="+34 915 493 616"
                        />
                        {errors.telefono && (
                          <p className="text-sm text-red-600">{errors.telefono}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="servicio">Servicio de Interés</Label>
                        <select
                          id="servicio"
                          name="servicio"
                          value={formData.servicio}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="desarrollo-movil">Desarrollo Móvil</option>
                          <option value="desarrollo-web">Desarrollo Web</option>
                          <option value="software-empresarial">Software Empresarial</option>
                          <option value="ciberseguridad">Ciberseguridad</option>
                          <option value="cloud-computing">Cloud Computing</option>
                          <option value="ia-big-data">IA & Big Data</option>
                          <option value="marketing-digital">Marketing Digital</option>
                          <option value="consultoria">Consultoría IT</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="presupuesto">Presupuesto Estimado</Label>
                        <select
                          id="presupuesto"
                          name="presupuesto"
                          value={formData.presupuesto}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Selecciona rango</option>
                          <option value="5000-15000">5.000€ - 15.000€</option>
                          <option value="15000-30000">15.000€ - 30.000€</option>
                          <option value="30000-50000">30.000€ - 50.000€</option>
                          <option value="50000+">Más de 50.000€</option>
                          <option value="no-definido">Sin definir</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Cuéntanos sobre tu proyecto *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        className={errors.mensaje ? "border-red-500" : ""}
                        placeholder="Describe tu proyecto, objetivos, plazos y cualquier detalle relevante..."
                        rows={5}
                      />
                      {errors.mensaje && (
                        <p className="text-sm text-red-600">{errors.mensaje}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Consulta
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      Al enviar este formulario, aceptas que contactemos contigo para evaluar tu proyecto.
                      <br />
                      <Link href="/privacidad" className="text-blue-600 hover:underline">
                        Política de Privacidad
                      </Link>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Preguntas <span className="text-blue-600">Frecuentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "¿Cuánto tiempo toma desarrollar una aplicación?",
                answer: "El tiempo depende de la complejidad. Una app básica puede tardar 2-3 meses, mientras que aplicaciones empresariales complejas pueden requerir 6-12 meses."
              },
              {
                question: "¿Ofrecen soporte después del lanzamiento?",
                answer: "Sí, incluimos 3 meses de soporte gratuito y ofrecemos planes de mantenimiento continuo con actualizaciones y monitoreo 24/7."
              },
              {
                question: "¿Trabajan con empresas internacionales?",
                answer: "Absolutamente. Trabajamos con clientes en toda Europa y América. Ofrecemos reuniones virtuales y comunicación en inglés y español."
              },
              {
                question: "¿Qué incluye la consulta gratuita?",
                answer: "La consulta incluye análisis de requerimientos, propuesta técnica, estimación de tiempos, presupuesto detallado y roadmap del proyecto."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Sistemas Empresariales</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@plustecologia.es</li>
                <li>915493616</li>
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
    </div>
  );
}
