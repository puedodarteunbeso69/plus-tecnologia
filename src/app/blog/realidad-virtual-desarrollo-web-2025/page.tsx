// ...existing code... <no existing file>
import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, User, ArrowLeft, Globe, Headphones, Eye, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Realidad Virtual en Desarrollo Web 2025 | PLUS TECNOLOGIA",
  description: "Descubre cómo WebXR, metaverso empresarial y tecnologías inmersivas están revolucionando el desarrollo web en 2025.",
  keywords: ["realidad virtual", "WebXR", "metaverso", "desarrollo web", "VR", "AR", "three.js", "2025"],
  openGraph: {
    title: "Realidad Virtual en Desarrollo Web 2025",
    description: "Guía completa sobre WebXR, metaverso empresarial y el futuro inmersivo de la web.",
    images: ["/images/vr-web-development-2025.jpg"],
    type: "article"
  }
};

const vrApplications = [
  {
    title: "Showrooms Virtuales",
    description: "Experiencias inmersivas de productos en 3D",
    benefits: ["60% más engagement", "40% menos devoluciones", "Acceso global 24/7"],
    technology: "Three.js + WebXR",
    industry: "Retail/Inmobiliario"
  },
  {
    title: "Formación Corporativa VR",
    description: "Training inmersivo para empleados",
    benefits: ["75% mejor retención", "50% menos tiempo", "Práctica sin riesgos"],
    technology: "A-Frame + Web Components",
    industry: "Educación/Empresa"
  },
  {
    title: "Turismo Virtual",
    description: "Visitas 360° y experiencias de viaje",
    benefits: ["Previsualizaciones reales", "Ventas anticipadas", "Marketing viral"],
    technology: "WebXR + Geolocation",
    industry: "Turismo/Cultura"
  }
];

export default function RealidadVirtualWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Realidad Virtual Desarrollo Web 2025</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl px-2 sm:px-4">

          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              <Headphones className="w-4 h-4 mr-2" />
              Realidad Virtual
            </Badge>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Realidad Virtual en Desarrollo Web 2025: WebXR y el Metaverso Empresarial
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Equipo PLUS TECNOLOGIA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>10 min lectura</span>
              </div>
              <time>23 Enero 2025</time>
            </div>

            {/* Featured Image */}
            <div className="relative h-48 sm:h-64 lg:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&h=400&fit=crop&auto=format&q=85"
                alt="Realidad Virtual en desarrollo web"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-lg max-w-none">

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">🌐 En este artículo descubrirás:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Estado actual de WebXR y su adopción empresarial</li>
                <li>• Casos de uso reales con ROI medible</li>
                <li>• Stack tecnológico para desarrollo VR web</li>
                <li>• Implementación práctica paso a paso</li>
                <li>• Tendencias 2025: metaverso empresarial y Web3D</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">WebXR: La Revolución Inmersiva Llega a la Web</h2>

            <p className="text-lg text-gray-700 mb-6">
              WebXR (Web Extended Reality) representa el siguiente paso evolutivo de la web. En 2025, más del 65% de las empresas B2C están evaluando experiencias inmersivas, y el 30% ya las han implementado con resultados medibles.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              La clave del éxito de WebXR radica en su accesibilidad: no requiere instalación de apps, funciona directamente en el navegador y es compatible con dispositivos desde smartphones hasta cascos VR profesionales.
            </p>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">📊 Estadísticas WebXR 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">78%</div>
                  <div className="text-sm opacity-90">↑ Engagement vs web tradicional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-sm opacity-90">↓ Tiempo decisión compra</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3.2x</div>
                  <div className="text-sm opacity-90">Más tiempo en página</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos de Uso Empresariales con ROI Probado</h2>

            <div className="space-y-6 mb-8">
              {vrApplications.map((app, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Eye className="w-5 h-5 text-purple-600 mr-2" />
                        {app.title}
                      </CardTitle>
                      <Badge variant="outline">{app.industry}</Badge>
                    </div>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Beneficios Medibles:</h4>
                        <ul className="space-y-1">
                          {app.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Stack Tecnológico:</h4>
                        <p className="text-sm text-purple-600 font-medium">{app.technology}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stack Tecnológico para VR Web 2025</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Frameworks y Librerías Core</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li><strong>Three.js:</strong> La base fundamental para gráficos 3D en web. Versión 160+ con mejoras de rendimiento WebXR.</li>
                <li><strong>A-Frame:</strong> Framework declarativo que simplifica el desarrollo VR. Ideal para prototipos rápidos.</li>
                <li><strong>Babylon.js:</strong> Motor 3D completo con herramientas visuales. Excelente para proyectos complejos.</li>
                <li><strong>React Three Fiber:</strong> Wrapper de Three.js para React. Perfecto para integrar VR en apps existentes.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. APIs y Estándares Web</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">WebXR Device API</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto mb-4">
{`// Ejemplo básico de inicialización WebXR
async function initWebXR() {
  if ('xr' in navigator) {
    const xr = navigator.xr;
    const isSupported = await xr.isSessionSupported('immersive-vr');

    if (isSupported) {
      const session = await xr.requestSession('immersive-vr');
      // Configurar renderizado VR
      setupVRRendering(session);
    }
  }
}`}
              </pre>
              <p className="text-gray-700 text-sm">
                La WebXR Device API proporciona acceso estandardizado a dispositivos VR/AR desde el navegador.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Herramientas de Desarrollo</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li><strong>WebXR Emulator:</strong> Extensión de Chrome para testing sin hardware VR</li>
              <li><strong>Blender + glTF:</strong> Pipeline para assets 3D optimizados</li>
              <li><strong>WebXR Layers:</strong> Composición avanzada de elementos UI y 3D</li>
              <li><strong>WebRTC:</strong> Para experiencias colaborativas multi-usuario</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementación Práctica: Showroom Virtual</h2>

            <p className="text-lg text-gray-700 mb-6">
              Vamos a crear un showroom virtual básico que funcione tanto en escritorio como en VR. Este ejemplo práctico muestra la potencia de WebXR.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Estructura del Proyecto:</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`project/
├── index.html
├── js/
│   ├── main.js
│   ├── vr-controls.js
│   └── product-loader.js
├── models/
│   └── products.glb
└── textures/
    └── environment.hdr`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Paso 1: Configuración Base Three.js + WebXR</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class VRShowroom {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.init();
  }

  init() {
    // Configurar renderer para VR
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.xr.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    // Añadir botón VR
    document.body.appendChild(VRButton.createButton(this.renderer));

    this.setupScene();
    this.loadProducts();
    this.startRenderLoop();
  }

  setupScene() {
    // Iluminación
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);

    this.scene.add(ambientLight, directionalLight);

    // Suelo
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);
  }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Paso 2: Interacciones VR</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Sistema de raycast para interacciones VR
setupVRInteractions() {
  this.raycaster = new THREE.Raycaster();
  this.intersections = [];

  // Controladores VR
  this.controller1 = this.renderer.xr.getController(0);
  this.controller1.addEventListener('selectstart', this.onSelectStart.bind(this));
  this.controller1.addEventListener('selectend', this.onSelectEnd.bind(this));
  this.scene.add(this.controller1);

  // Visual feedback
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -1)
  ]);
  const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x0000ff }));
  this.controller1.add(line);
}

onSelectStart(event) {
  const controller = event.target;
  controller.userData.isSelecting = true;

  // Detectar objeto seleccionado
  this.raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
  this.raycaster.ray.direction.set(0, 0, -1).transformDirection(controller.matrixWorld);

  const intersects = this.raycaster.intersectObjects(this.products, true);
  if (intersects.length > 0) {
    this.showProductInfo(intersects[0].object);
  }
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Metaverso Empresarial: Casos de Uso B2B</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Globe className="w-5 h-5 text-blue-600 inline mr-2" />
                  Reuniones Virtuales Inmersivas
                </h3>
                <p className="text-gray-700 mb-3">
                  Espacios de colaboración 3D que van más allá de las videollamadas. Pizarras virtuales, modelos 3D compartidos y presencia espacial.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold text-blue-600">85%</div>
                    <div className="text-gray-600">Más engagement</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">60%</div>
                    <div className="text-gray-600">Mejor retención info</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">40%</div>
                    <div className="text-gray-600">Menos tiempo reunión</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Smartphone className="w-5 h-5 text-green-600 inline mr-2" />
                  Formación y Onboarding Virtual
                </h3>
                <p className="text-gray-700 mb-3">
                  Simulaciones seguras para entrenar empleados en entornos de riesgo. Desde soldadura hasta cirugía, la VR permite práctica sin consecuencias.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold text-green-600">75%</div>
                    <div className="text-gray-600">Mejor retención</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-600">50%</div>
                    <div className="text-gray-600">Menos tiempo training</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-600">90%</div>
                    <div className="text-gray-600">Reducción accidentes</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimización y Performance</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Técnicas Críticas para VR Web</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Level of Detail (LOD):</strong> Modelos menos detallados según distancia</li>
              <li><strong>Occlusion Culling:</strong> No renderizar objetos ocultos</li>
              <li><strong>Texture Compression:</strong> Formatos optimizados (ASTC, ETC2)</li>
              <li><strong>Instanced Rendering:</strong> Para objetos repetidos</li>
              <li><strong>WebAssembly:</strong> Para cálculos pesados de física</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">⚡ Métricas de Performance VR</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Frame Rate:</strong> Mínimo 72 FPS (ideal 90 FPS)
                </div>
                <div>
                  <strong>Latencia:</strong> &lt; 20ms movimiento a pantalla
                </div>
                <div>
                  <strong>Resolución:</strong> Mín 1080x1200 por ojo
                </div>
                <div>
                  <strong>Draw Calls:</strong> &lt; 100 por frame
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tendencias 2025: El Futuro de VR Web</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">WebXR Layers API</h3>
            <p className="text-lg text-gray-700 mb-6">
              La nueva Layers API permite composición avanzada de elementos 2D y 3D, mejorando significativamente el rendimiento y las posibilidades de UI.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mixed Reality en Web</h3>
            <p className="text-lg text-gray-700 mb-6">
              AR en web está madurando rápidamente. WebXR AR sessions permiten experiencias de realidad aumentada directamente en el navegador, sin apps.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Generated 3D Content</h3>
            <p className="text-lg text-gray-700 mb-8">
              Herramientas de IA que generan modelos 3D, texturas y animaciones están democratizando la creación de contenido VR de calidad profesional.
            </p>

            <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Listo para Crear Experiencias Inmersivas?</h3>
              <p className="mb-6">
                Desarrollamos showrooms virtuales, formación VR y metaversos empresariales que transforman tu negocio.
              </p>
              <Link href="/contacto">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
                  Consulta VR/WebXR Gratuita
                  <Headphones className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {["Realidad Virtual", "WebXR", "Three.js", "Metaverso", "A-Frame", "VR Web", "Desarrollo 3D", "Experiencias Inmersivas"].map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "IA y Machine Learning para Empresas en 2025",
                  excerpt: "Implementación práctica de IA empresarial con ROI medible y casos de éxito reales.",
                  href: "/blog/ia-machine-learning-empresas-2025"
                },
                {
                  title: "Automatización de Procesos con IA en 2025",
                  excerpt: "RPA inteligente y automatización de workflows con IA para optimizar operaciones.",
                  href: "/blog/automatizacion-procesos-ia-2025"
                },
                {
                  title: "Desarrollo Web Performance en 2025",
                  excerpt: "Técnicas avanzadas para optimizar velocidad y Core Web Vitals en aplicaciones modernas.",
                  href: "/blog/desarrollo-ia-generativa-2025"
                }
              ].map((article, index) => (
                <Link key={index} href={article.href}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <div className="relative h-24 sm:h-32overflow-hidden rounded-t-lg">
                      <Image
                        src={`https://images.unsplash.com/photo-${1592478411213 + index * 2000}-6153e4ebc07d?w=400&h=200&fit=crop&auto=format&q=80`}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <WhatsAppChat />
    </div>
  );
}
// ...existing code... <end of new file>
