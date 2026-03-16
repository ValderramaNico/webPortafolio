import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import abogadojvaImg from '../assets/images/abogadojva.png'
import ckestudioImg from '../assets/images/ckestudiojuridico.png'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Abogadojva.cl",
      description: "Sitio web profesional para Abogado de Concepción - Jaime Venegas. Diseño elegante y funcional.",
      image: abogadojvaImg,
      url: "https://abogadojva.cl",
      tags: ["WordPress", "Elementor", "SEO"],
      color: "#00acac"
    },
    {
      id: 2,
      title: "Ckestudiojuridico.com",
      description: "Sitio web para Abogada de Puerto Montt - Camila Kopplin. Diseño profesional y moderno.",
      image: ckestudioImg,
      url: "https://ckestudiojuridico.com",
      tags: ["WordPress", "Diseño Custom", "Responsive"],
      color: "#6ed6a5"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="portafolio" className="section-padding" ref={ref} aria-labelledby="portafolio-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portafolio</span>
          <h2 id="portafolio-title" className="section-title">Proyectos destacados</h2>
          <p className="section-description">
            Una selección de mis trabajos más recientes. Cada proyecto es único 
            y está diseñado para cumplir objetivos específicos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-border">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: hoveredId === project.id ? 0.85 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col">
                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block py-1 px-2.5 rounded text-[0.7rem] font-medium"
                        style={{ 
                          backgroundColor: `${project.color}30`,
                          color: project.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <motion.p
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Links */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-primary text-white rounded-lg font-medium text-sm no-underline transition-all duration-300 w-fit hover:bg-primary-dark"
                    >
                      <ExternalLink size={14} />
                      Ver sitio
                    </a>
                  </motion.div>
                </div>

                {/* Decorative Border */}
                <motion.div
                  className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
                  style={{ borderColor: project.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            ¿Te gustaría ver tu proyecto aquí?
          </p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="py-3.5 px-8 border-2 border-primary text-primary bg-transparent rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Empecemos a trabajar juntos
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
