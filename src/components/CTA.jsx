import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollTo = smoothScrollTo

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="card text-center max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary">¿Listo para empezar?</span>
          </div>

          <h2 className="section-title">
            Transformemos tu idea en una <span className="text-gradient">web increíble</span>
          </h2>

          <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto leading-relaxed">
            No importa si tienes una idea clara o solo una visión general. 
            Trabajemos juntos para crear algo extraordinario.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button onClick={() => scrollTo('#contacto')} className="btn-primary">
              Solicitar cotización gratis
              <ArrowRight size={20} />
            </button>
            <button onClick={() => scrollTo('#portafolio')} className="btn-outline">
              Ver trabajos anteriores
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 pt-8 border-t border-white/10">
            {[
              { value: '100%', label: 'Satisfacción' },
              { value: '24h', label: 'Respuesta' },
              { value: '∞', label: 'Revisiones' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
