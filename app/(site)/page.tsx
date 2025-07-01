"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Eye,
  Zap,
} from "lucide-react";
import Image from "next/image";

const heroImages = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
];

const stores = [
  {
    id: 1,
    name: "Unidade Shopping Center",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 1234-5678",
  },
  {
    id: 2,
    name: "Unidade Centro",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 2345-6789",
  },
  {
    id: 3,
    name: "Unidade Jardins",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 3456-7890",
  },
  {
    id: 4,
    name: "Unidade Vila Madalena",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 4567-8901",
  },
  {
    id: 5,
    name: "Unidade Moema",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 5678-9012",
  },
  {
    id: 6,
    name: "Unidade Pinheiros",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 6789-0123",
  },
  {
    id: 7,
    name: "Unidade Itaim Bibi",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 7890-1234",
  },
  {
    id: 8,
    name: "Unidade Brooklin",
    image: "/placeholder.svg?height=200&width=300",
    phone: "(11) 8901-2345",
  },
];

const brands = [
  "Prada",
  "Oakley",
  "Cartier",
  "Ray-Ban",
  "Gucci",
  "Versace",
  "Tom Ford",
  "Dior",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Óticas Personallité - Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Visão Personalizada,
                <br />
                <span className="text-[#0b4d4c]">Estilo Único</span>
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Descubra a combinação perfeita entre tecnologia avançada e
                design sofisticado
              </p>
              <Button
                size="lg"
                className="bg-[#0b4d4c] hover:bg-[#0a3f3e] text-white px-8 py-3 text-lg transition-all transform hover:scale-105"
              >
                Encontre Sua Unidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stores" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fale com uma Unidade
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre a unidade mais próxima e receba atendimento personalizado
              de nossos especialistas
            </p>
          </div>

          {/* Store Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stores.map((store) => (
              <Card
                key={store.id}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {store.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {store.phone}
                    </p>
                    <Button
                      className="w-full bg-[#0b4d4c] hover:bg-[#0a3f3e] text-white transition-colors"
                      size="sm"
                    >
                      Entrar em Contato
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Saiba qual está mais próxima de você
              </h3>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Digite seu CEP ou endereço"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-[#0b4d4c] hover:bg-[#0a3f3e] text-white px-8 transition-colors"
                >
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Marcas que Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos as mais prestigiadas marcas de óculos do mundo,
              garantindo qualidade e estilo únicos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800 group-hover:text-[#0b4d4c] transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tecnologia Visioffice X
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolucione sua experiência com óculos através da mais avançada
                tecnologia de medição e personalização. O Visioffice X oferece
                precisão milimétrica para garantir o ajuste perfeito e o máximo
                conforto visual.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Eye className="w-6 h-6 text-[#0b4d4c] mr-3" />
                  <span className="text-lg text-gray-700">
                    Medição precisa e personalizada
                  </span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-[#0b4d4c] mr-3" />
                  <span className="text-lg text-gray-700">
                    Tecnologia de ponta em análise visual
                  </span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-6 h-6 text-[#0b4d4c] mr-3" />
                  <span className="text-lg text-gray-700">
                    Resultados em tempo real
                  </span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#0b4d4c] hover:bg-[#0a3f3e] text-white px-8 py-3 text-lg transition-all transform hover:scale-105"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0b4d4c] to-[#0a3f3e] rounded-2xl p-12 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Eye className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Visioffice X
                </h3>
                <p className="text-white opacity-90">
                  Precisão, inovação e personalização em cada medida
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
