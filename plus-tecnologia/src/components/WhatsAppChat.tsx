"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Clock } from "lucide-react";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el chat después de 3 segundos o al hacer scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappNumber = "34665820075"; // Número sin espacios ni símbolos
  const defaultMessage = "Hola! Me interesa conocer más sobre los servicios de PLUS TECNOLOGIA. ¿Podrían ayudarme?";

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || defaultMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    {
      title: "Desarrollo de Apps",
      message: "Hola! Me interesa desarrollar una aplicación móvil. ¿Podrían darme más información sobre sus servicios?"
    },
    {
      title: "Desarrollo Web",
      message: "Hola! Necesito una página web profesional para mi empresa. ¿Cuáles son sus tarifas?"
    },
    {
      title: "Ciberseguridad",
      message: "Hola! Me interesa una auditoría de ciberseguridad para mi empresa. ¿Podrían contactarme?"
    },
    {
      title: "Consulta General",
      message: "Hola! Me gustaría conocer más sobre sus servicios de tecnología. ¿Podrían llamarme?"
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Bubble */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-3rem)]">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">PLUS TECNOLOGIA</h3>
                  <div className="flex items-center text-green-100 text-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                    En línea
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Greeting Message */}
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700 mb-2">
                  👋 ¡Hola! Somos PLUS TECNOLOGIA
                </p>
                <p className="text-sm text-gray-600">
                  ¿En qué podemos ayudarte hoy? Elige una opción o escríbenos directamente:
                </p>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(msg.message)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                  >
                    <div className="text-sm font-medium text-gray-800 group-hover:text-green-700">
                      {msg.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  665 82 00 75
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Lun - Vie: 9:00 - 18:00
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp()}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Abrir WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
            isOpen ? 'rotate-180' : 'animate-pulse'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
            1
          </div>
        )}
      </div>

      {/* Welcome Message (only shows once) */}
      {isVisible && !isOpen && (
        <div className="fixed bottom-24 right-6 z-40 max-w-xs">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 relative">
            <div className="absolute bottom-0 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45 translate-y-2"></div>
            <p className="text-sm text-gray-700 mb-2">
              <strong>¡Hola! 👋</strong>
            </p>
            <p className="text-sm text-gray-600">
              ¿Necesitas ayuda con tu proyecto? ¡Contáctanos por WhatsApp!
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-2 text-green-600 text-sm font-medium hover:text-green-700"
            >
              Iniciar Chat &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
