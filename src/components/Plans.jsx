import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Globe, Check, Clock } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const Plans = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCodePlan, setActiveCodePlan] = useState(1)
  const [activeWpPlan, setActiveWpPlan] = useState(1)

  const codePlans = [
    {
      id: 0,
      tabName: "Landing",
      title: "Landing Page",
      subtitle: "Ideal para emprendedores",
      features: [
        "1 página única con scroll",
        "Diseño 100% responsive",
        "Formulario de contacto",
        "Botón de WhatsApp flotante",
        "Integración redes sociales",
        "Optimización SEO básica",
        "Certificado SSL incluido",
        "2 correos corporativos",
        "Dominio por 1 año"
      ],
      deadline: "7-10 días"
    },
    {
      id: 1,
      tabName: "Estándar",
      title: "Web Estándar",
      subtitle: "Para pequeñas empresas",
      features: [
        "Hasta 5 páginas o secciones",
        "Diseño 100% responsive",
        "Formulario de contacto",
        "Botón de WhatsApp flotante",
        "Mapa de ubicación",
        "Galería de imágenes",
        "Integración redes sociales",
        "Optimización SEO completa",
        "Google Analytics",
        "Certificado SSL incluido",
        "5 correos corporativos",
        "Hosting + Dominio por 1 año"
      ],
      deadline: "15-20 días",
      popular: true
    },
    {
      id: 2,
      tabName: "Premium",
      title: "Web Premium",
      subtitle: "Solución completa",
      features: [
        "Hasta 10 páginas o secciones",
        "Diseño 100% responsive",
        "Formulario de contacto avanzado",
        "Botón de WhatsApp flotante",
        "Mapa de ubicación",
        "Sección de testimonios",
        "Galería de imágenes/videos",
        "Integración redes sociales",
        "Optimización SEO avanzada",
        "Google Analytics + Search Console",
        "Certificado SSL incluido",
        "10 correos corporativos",
        "Hosting + Dominio por 1 año",
        "Soporte técnico por 1 año",
        "Funcionalidades a medida"
      ],
      deadline: "25-30 días"
    }
  ]

  const wordpressPlans = [
    {
      id: 0,
      tabName: "Básico",
      title: "WordPress Básico",
      subtitle: "Rápido y funcional",
      features: [
        "Hasta 5 páginas",
        "Diseño 100% responsive",
        "Tema profesional personalizado",
        "Formulario de contacto",
        "Plugins esenciales",
        "Certificado SSL incluido",
        "3 correos corporativos",
        "Panel auto-administrable"
      ],
      deadline: "7-10 días"
    },
    {
      id: 1,
      tabName: "Avanzado",
      title: "WordPress Avanzado",
      subtitle: "Web completa y escalable",
      features: [
        "Hasta 10 páginas",
        "Diseño 100% responsive",
        "Tema profesional personalizado",
        "Formulario de contacto",
        "Botón de WhatsApp flotante",
        "Galería de imágenes",
        "Integración redes sociales",
        "Optimización SEO",
        "Google Analytics",
        "E-commerce opcional (WooCommerce)",
        "Certificado SSL incluido",
        "10 correos corporativos",
        "Panel auto-administrable",
        "Capacitación de uso incluida"
      ],
      deadline: "15-20 días",
      popular: true
    }
  ]

  const PlanCard = ({ icon: Icon, title, plans, activePlan, setActivePlan }) => {
    const currentPlan = plans.find(p => p.id === activePlan)
    
    return (
      <div className="card h-full flex flex-col">
        {/* Header con icono */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon size={24} className="text-primary" />
          </div>
          <h3 className="text-white font-bold text-xl m-0">{title}</h3>
        </div>

        {/* Mini Navbar de planes */}
        <div className="flex gap-1 mb-6 bg-black/30 p-1 rounded-lg">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`flex-1 py-2.5 px-3 border-none rounded-md cursor-pointer text-sm font-semibold transition-all duration-300 ${
                activePlan === plan.id 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent text-text-muted hover:text-white'
              }`}
            >
              {plan.tabName}
              {plan.popular && <span className="ml-1 text-[0.7rem]">★</span>}
            </button>
          ))}
        </div>

        {/* Contenido del plan seleccionado */}
        <div className="flex-1 flex flex-col">
          <div className="mb-4">
            <h4 className="text-white font-semibold text-lg m-0 mb-1">
              {currentPlan.title}
            </h4>
            <p className="text-text-muted text-sm m-0">{currentPlan.subtitle}</p>
          </div>

          <ul className="list-none p-0 m-0 flex-1">
            {currentPlan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 mb-2">
                <Check size={14} className="text-primary shrink-0 mt-1" />
                <span className="text-text-light text-sm leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Clock size={16} />
              <span>Entrega: {currentPlan.deadline}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="planes" className="section-padding" ref={ref} aria-labelledby="planes-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Planes</span>
          <h2 id="planes-title" className="section-title">Soluciones para cada necesidad</h2>
          <p className="section-description">
            Elige el tipo de desarrollo y el plan que mejor se adapte a tu proyecto.
          </p>
        </motion.div>

        {/* Cards lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid-2 items-stretch"
        >
          <PlanCard 
            icon={Code2} 
            title="Web de Código" 
            plans={codePlans} 
            activePlan={activeCodePlan} 
            setActivePlan={setActiveCodePlan} 
          />
          <PlanCard 
            icon={Globe} 
            title="WordPress" 
            plans={wordpressPlans} 
            activePlan={activeWpPlan} 
            setActivePlan={setActiveWpPlan} 
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-text-muted mb-4">
            ¿No estás seguro de qué plan elegir?
          </p>
          <button onClick={() => smoothScrollTo('#contacto')} className="btn-primary">
            Solicitar asesoría gratuita
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Plans
