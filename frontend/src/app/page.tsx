"use client";

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Animaciones controladas
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
    if (inView2) controls.start('visible');
    if (inView3) controls.start('visible');
    if (inView4) controls.start('visible');
  }, [controls, inView, inView2, inView3, inView4]);

  // Rotar testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ana Martínez",
      role: "Diseñadora UX",
      content: "Gracias a ProMatch encontré mi trabajo ideal en solo 2 semanas. El sistema de matching es increíblemente preciso y me ahorró meses de búsqueda.",
      avatar: "/avatar1.jpg"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Desarrollador Full Stack",
      content: "El analizador de CV me ayudó a mejorar mi currículum y recibí un 60% más de respuestas. Encontré un trabajo con mejor salario y beneficios.",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      name: "Laura González",
      role: "Gerente de Marketing",
      content: "Contratamos a 3 excelentes profesionales a través de ProMatch. La calidad de los candidatos superó nuestras expectativas completamente.",
      avatar: "/avatar3.jpg"
    }
  ];

  const stats = [
    { value: "85%", label: "de usuarios encuentran trabajo en menos de 3 meses" },
    { value: "10K+", label: "empresas confían en nuestra plataforma" },
    { value: "3x", label: "más entrevistas con nuestro optimizador de CV" },
    { value: "24h", label: "tiempo promedio para el primer contacto" }
  ];

  const jobCategories = [
    { name: "Tecnología", icon: "💻", count: 1243, bgColor: "bg-blue-50", borderColor: "border-blue-100" },
    { name: "Marketing", icon: "📢", count: 892, bgColor: "bg-purple-50", borderColor: "border-purple-100" },
    { name: "Finanzas", icon: "💰", count: 756, bgColor: "bg-green-50", borderColor: "border-green-100" },
    { name: "Salud", icon: "🏥", count: 643, bgColor: "bg-red-50", borderColor: "border-red-100" },
    { name: "Educación", icon: "📚", count: 532, bgColor: "bg-yellow-50", borderColor: "border-yellow-100" },
    { name: "Diseño", icon: "🎨", count: 487, bgColor: "bg-indigo-50", borderColor: "border-indigo-100" }
  ];

  const features = [
    {
      title: "Matching Inteligente",
      description: "Nuestra IA analiza tu perfil completo para encontrar las oportunidades que mejor se adaptan a ti.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Optimizador de CV",
      description: "Mejora automáticamente tu currículum para pasar los filtros ATS y llamar la atención de reclutadores.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Preparación Entrevistas",
      description: "Simulacros de entrevista con IA que te preparan para responder como un profesional.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>ProMatch - Encuentra tu trabajo ideal con IA</title>
        <meta name="description" content="La plataforma más avanzada para conectar talento con oportunidades laborales usando inteligencia artificial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header con gradiente y sombra suave */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-2xl font-bold">ProMatch</span>
                </div>
              </motion.div>
            </Link>
            
            <nav className="hidden lg:flex space-x-8">
              {[
                { name: "Inicio", path: "/" },
                { name: "Cómo funciona", path: "/how" },
                { name: "Ofertas", path: "/jobs" },
                { name: "Empresas", path: "/companies" },
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={item.path} className="text-blue-100 hover:text-white font-medium transition-colors relative group">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2 text-blue-100 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="px-4 py-2 text-blue-100 hover:text-white font-medium transition-colors">
                  Iniciar sesión
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/register" className="px-6 py-2 bg-white text-blue-800 rounded-full hover:bg-blue-100 font-medium transition-colors shadow-lg">
                  Registrarse
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Menú móvil con animación suave */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-blue-900 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-4">
                {[
                  { name: "Inicio", path: "/" },
                  { name: "Cómo funciona", path: "/how" },
                  { name: "Ofertas", path: "/jobs" },
                  { name: "Empresas", path: "/companies" },
                  { name: "Recursos", path: "/resources" }
                ].map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.path} 
                    className="block py-2 text-blue-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 space-y-3 border-t border-blue-800">
                  <Link 
                    href="/login" 
                    className="block py-2 text-center text-blue-100 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar sesión
                  </Link>
                  <Link 
                    href="/register" 
                    className="block py-2 text-center bg-white text-blue-800 rounded-lg hover:bg-blue-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Contenido principal */}
      <main className="min-h-screen bg-white overflow-hidden">
        {/* Sección hero con gradiente animado */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-95"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            
            {/* Partículas animadas */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20, x: Math.random() * 100 - 50 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: [0, Math.random() * 100 + 50],
                  x: [0, Math.random() * 100 - 50]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 5 + 1 + 'px',
                  height: Math.random() * 5 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%'
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Encuentra tu <span className="text-blue-300">trabajo ideal</span> con IA
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                La plataforma inteligente que analiza tu perfil y te conecta con las mejores oportunidades laborales
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/register" 
                  className="px-8 py-4 bg-white text-blue-800 rounded-full hover:bg-blue-100 font-medium text-lg shadow-xl transition-all flex items-center justify-center"
                >
                  Comenzar ahora
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/demo" 
                  className="px-8 py-4 border-2 border-blue-300 text-white rounded-full hover:bg-blue-700 font-medium text-lg transition-all flex items-center justify-center"
                >
                  Ver demostración
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Sección de estadísticas con animación de números */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resultados comprobados</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Miles de profesionales y empresas ya transformaron sus procesos con ProMatch</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all border border-blue-100"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de características principales */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cómo te ayudamos a destacar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tecnología avanzada diseñada para acelerar tu carrera profesional</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-4 rounded-full bg-white shadow-md"
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de video explicativo */}
        <section className="py-24 bg-gradient-to-r from-blue-800 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Transformamos tu búsqueda de empleo</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Descubre cómo nuestra tecnología de IA puede acelerar tu carrera profesional
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto bg-black"
            >
              <div className="aspect-w-16 aspect-h-9">
                <video 
                  controls 
                  poster="/video-poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/transform-video.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de categorías de empleo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explora oportunidades en tu área</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Encuentra el trabajo perfecto en las categorías más demandadas</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className={`p-6 rounded-xl border ${category.borderColor} hover:shadow-lg transition-all ${category.bgColor}`}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Más de {category.count} oportunidades disponibles</p>
                  <Link 
                    href={`/jobs?category=${category.name.toLowerCase()}`} 
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                  >
                    Ver empleos
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de testimonios con animación de tarjetas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Historias de éxito</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Profesionales que transformaron sus carreras con ProMatch</p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentTestimonial].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 relative"
                  >
                    <Image 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-blue-100 object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                  <blockquote className="text-xl text-gray-700 mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                    <div className="text-blue-600">{testimonials[currentTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`Mostrar testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección CTA final con gradiente animado */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-95"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            
            {/* Efecto de burbujas */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: Math.random() * 100 - 50 }}
                animate={{ 
                  opacity: [0, 0.7, 0],
                  y: [-50, Math.random() * 200 + 100]
                }}
                transition={{ 
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute rounded-full bg-white bg-opacity-20"
                style={{
                  width: Math.random() * 20 + 10 + 'px',
                  height: Math.random() * 20 + 10 + 'px',
                  left: Math.random() * 100 + '%'
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              ¿Listo para el siguiente paso en tu carrera?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-10 max-w-2xl mx-auto text-blue-100"
            >
              Únete a miles de profesionales que ya están avanzando en sus carreras con ProMatch
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/register" 
                  className="block px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-100 font-medium text-lg shadow-xl transition-all"
                >
                  Crear cuenta gratis
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="block px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 font-medium text-lg transition-all"
                >
                  Contactar con un experto
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer con diseño moderno */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-2xl font-bold">ProMatch</span>
              </div>
              <p className="mb-4">
                La plataforma más avanzada para conectar talento con oportunidades usando inteligencia artificial.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <motion.div key={social} whileHover={{ y: -3 }}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{social}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <use xlinkHref={`/social-icons.svg#${social}`} />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Para candidatos</h4>
              <ul className="space-y-3">
                {[
                  { name: "Buscar empleo", path: "/jobs" },
                  { name: "Optimizar CV", path: "/cv-optimizer" },
                  { name: "Preparación entrevistas", path: "/interview-prep" },
                  { name: "Cursos", path: "/courses" },
                  { name: "Preguntas frecuentes", path: "/faq" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Para empresas</h4>
              <ul className="space-y-3">
                {[
                  { name: "Publicar vacante", path: "/post-job" },
                  { name: "Buscar candidatos", path: "/find-candidates" },
                  { name: "Soluciones empresariales", path: "/enterprise" },
                  { name: "Precios", path: "/pricing" },
                  { name: "Recursos", path: "/resources" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Compañía</h4>
              <ul className="space-y-3">
                {[
                  { name: "Nosotros", path: "/about" },
                  { name: "Blog", path: "/blog" },
                  { name: "Carreras", path: "/careers" },
                  { name: "Contacto", path: "/contact" },
                  { name: "Socios", path: "/partners" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm">
              © {new Date().getFullYear()} ProMatch. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Términos</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Mapa del sitio</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Componente auxiliar para animación de números
function CountUp({ value }: { value: string }) {
  const [count, setCount] = useState("0");
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    const duration = 2000; // Duración en ms
    const increment = end / (duration / 16); // Aprox. 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start).toString());
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{value.includes("+") ? `${count}+` : count}</span>;
}