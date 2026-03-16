import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle } from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Conversación inicial",
      description: "Hablamos sobre tu proyecto, objetivos y necesidades. Entiendo tu visión para poder materializarla."
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Propuesta y planificación",
      description: "Te presento una propuesta detallada con tiempos, alcance y un plan de trabajo claro."
    },
    {
      icon: Code2,
      number: "03",
      title: "Diseño y desarrollo",
      description: "Creo tu sitio web con actualizaciones constantes para que veas el progreso en tiempo real."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Lanzamiento",
      description: "Publicamos tu sitio web y te capacito para que puedas gestionarlo de forma autónoma."
    },
    {
      icon: CheckCircle,
      number: "05",
      title: "Soporte continuo",
      description: "Te acompaño después del lanzamiento con soporte técnico y mantenimiento."
    }
  ]

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Proceso</span>
          <h2 className="section-title">Cómo trabajo</h2>
          <p className="section-description">
            Un proceso claro y transparente para que sepas exactamente 
            qué esperar en cada etapa del proyecto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center shrink-0">
                <step.icon size={24} className="text-primary" />
              </div>

              {/* Content */}
              <div className="card flex-1">
                <span className="text-primary font-bold text-sm">{step.number}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
