import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket, Search, ArrowRight } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web a Medida",
      description: "Sitios web únicos desarrollados desde cero, adaptados a las necesidades específicas de tu negocio.",
      features: ["Código limpio y optimizado", "Diseño responsive", "Integración de APIs"]
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Interfaces modernas y atractivas que ofrecen una experiencia de usuario excepcional.",
      features: ["Diseño moderno", "Experiencia intuitiva", "Identidad visual"]
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "Páginas de aterrizaje optimizadas para convertir visitantes en clientes.",
      features: ["Alta conversión", "Diseño persuasivo", "Carga rápida"]
    },
    {
      icon: Search,
      title: "SEO Básico",
      description: "Optimización para motores de búsqueda para mejorar tu visibilidad online.",
      features: ["Meta tags optimizados", "Estructura semántica", "Velocidad de carga"]
    }
  ]

  return (
    <section id="servicios" className="section-padding" ref={ref} aria-labelledby="servicios-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Servicios</span>
          <h2 id="servicios-title" className="section-title">Lo que puedo hacer por ti</h2>
          <p className="section-description">
            Ofrezco soluciones web completas adaptadas a tus necesidades, 
            desde el diseño hasta el desarrollo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-5">
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-text-light mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button 
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-primary font-medium bg-transparent border-none cursor-pointer p-0 hover:gap-3 transition-all duration-300"
                >
                  Solicitar info
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
