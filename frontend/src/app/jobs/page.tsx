"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function JobsPage() {
  // Estado para filtros (simulado)
  const [filters, setFilters] = useState({
    searchQuery: '',
    jobType: '',
    location: '',
    experience: ''
  });

  // Datos de ejemplo para empleos (simulados)
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend React",
      company: "TechSolutions Inc.",
      location: "Remoto",
      type: "Tiempo completo",
      salary: "$60,000 - $80,000",
      posted: "Hace 2 días",
      logo: "/company-logos/tech-solutions.png",
      skills: ["React", "JavaScript", "CSS", "TypeScript"],
      featured: true
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      company: "CreativeMinds",
      location: "Ciudad de México",
      type: "Medio tiempo",
      salary: "$45,000 - $60,000",
      posted: "Hace 1 semana",
      logo: "/company-logos/creative-minds.png",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      featured: false
    },
    {
      id: 3,
      title: "Ingeniero de Backend",
      company: "DataSystems",
      location: "Guadalajara",
      type: "Tiempo completo",
      salary: "$70,000 - $90,000",
      posted: "Hace 3 días",
      logo: "/company-logos/data-systems.png",
      skills: ["Node.js", "Python", "SQL", "AWS"],
      featured: true
    },
    {
      id: 4,
      title: "Especialista en Marketing Digital",
      company: "GrowthAgency",
      location: "Remoto",
      type: "Contrato",
      salary: "$50,000 - $65,000",
      posted: "Hace 5 días",
      logo: "/company-logos/growth-agency.png",
      skills: ["SEO", "Google Ads", "Redes Sociales", "Analítica"],
      featured: false
    },
    {
      id: 5,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Monterrey",
      type: "Tiempo completo",
      salary: "$80,000 - $100,000",
      posted: "Hace 1 día",
      logo: "/company-logos/innovate-tech.png",
      skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
      featured: true
    },
    {
      id: 6,
      title: "Analista de Datos",
      company: "InfoAnalytics",
      location: "Remoto",
      type: "Tiempo completo",
      salary: "$55,000 - $75,000",
      posted: "Hace 2 semanas",
      logo: "/company-logos/info-analytics.png",
      skills: ["SQL", "Power BI", "Excel", "Python"],
      featured: false
    }
  ];

  // Manejar cambios en filtros (simulado)
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Encuentra tu trabajo ideal</h1>
            <p className="text-xl text-blue-200">
              Explora miles de oportunidades que coinciden con tus habilidades y aspiraciones
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filtros de Búsqueda */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="searchQuery" className="block text-sm font-medium text-gray-700 mb-1">Palabras clave</label>
              <input
                type="text"
                id="searchQuery"
                name="searchQuery"
                placeholder="Título, habilidades, empresa"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filters.searchQuery}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
              <select
                id="jobType"
                name="jobType"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filters.jobType}
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="full-time">Tiempo completo</option>
                <option value="part-time">Medio tiempo</option>
                <option value="contract">Contrato</option>
                <option value="internship">Pasantía</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
              <select
                id="location"
                name="location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filters.location}
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                <option value="remote">Remoto</option>
                <option value="mexico-city">CDMX</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="international">Internacional</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experiencia</label>
              <select
                id="experience"
                name="experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filters.experience}
                onChange={handleFilterChange}
              >
                <option value="">Todas</option>
                <option value="internship">Pasantía</option>
                <option value="entry-level">Junior (0-2 años)</option>
                <option value="mid-level">Mid-level (2-5 años)</option>
                <option value="senior">Senior (5+ años)</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
              Limpiar filtros
            </button>
          </div>
        </motion.div>
      </div>

      {/* Resultados de Empleos */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Filtros adicionales (simulado) */}
          <div className="md:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm sticky top-6"
            >
              <h3 className="font-bold text-lg text-gray-800 mb-4">Filtrar por</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Salario estimado</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="salary1" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="salary1" className="ml-2 text-sm text-gray-700">$0 - $40,000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="salary2" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="salary2" className="ml-2 text-sm text-gray-700">$40,000 - $70,000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="salary3" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="salary3" className="ml-2 text-sm text-gray-700">$70,000 - $100,000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="salary4" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="salary4" className="ml-2 text-sm text-gray-700">$100,000+</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Habilidades</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="skill1" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="skill1" className="ml-2 text-sm text-gray-700">React</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill2" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="skill2" className="ml-2 text-sm text-gray-700">Node.js</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill3" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="skill3" className="ml-2 text-sm text-gray-700">Diseño UX</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill4" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="skill4" className="ml-2 text-sm text-gray-700">Marketing Digital</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Beneficios</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="benefit1" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="benefit1" className="ml-2 text-sm text-gray-700">Seguro médico</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="benefit2" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="benefit2" className="ml-2 text-sm text-gray-700">Home office</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="benefit3" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="benefit3" className="ml-2 text-sm text-gray-700">Bonos</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="benefit4" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="benefit4" className="ml-2 text-sm text-gray-700">Capacitaciones</label>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lista de Empleos */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {jobs.length} {jobs.length === 1 ? 'empleo encontrado' : 'empleos encontrados'}
              </h2>
              <div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>Ordenar por: Relevancia</option>
                  <option>Ordenar por: Más reciente</option>
                  <option>Ordenar por: Mejor salario</option>
                </select>
              </div>
            </div>

            {/* Empleos destacados */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Empleos destacados</h3>
              <div className="space-y-4">
                {jobs.filter(job => job.featured).map(job => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -2 }}
                    className="bg-white border-l-4 border-blue-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden mr-4">
                          <Image
                            src={job.logo}
                            alt={`Logo de ${job.company}`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Destacado
                            </span>
                          </div>
                          <p className="text-gray-600">{job.company} • {job.location}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-500">{job.type}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm font-medium text-gray-700">{job.salary}</span>
                        </div>
                        <div className="text-sm text-gray-500">{job.posted}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 flex justify-end">
                      <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Todos los empleos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Todos los empleos</h3>
              <div className="space-y-4">
                {jobs.filter(job => !job.featured).map(job => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden mr-4">
                          <Image
                            src={job.logo}
                            alt={`Logo de ${job.company}`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                          <p className="text-gray-600">{job.company} • {job.location}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-500">{job.type}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm font-medium text-gray-700">{job.salary}</span>
                        </div>
                        <div className="text-sm text-gray-500">{job.posted}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-3 flex justify-end">
                      <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Paginación (simulada) */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <button className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Anterior
                </button>
                <button className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-blue-50">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}