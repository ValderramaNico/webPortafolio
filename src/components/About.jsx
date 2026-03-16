import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Target, Zap, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    { icon: Target, title: "Enfocado en resultados", description: "Cada proyecto está orientado a cumplir tus objetivos de negocio." },
    { icon: Zap, title: "Entrega rápida", description: "Trabajo eficiente sin sacrificar la calidad del producto final." },
    { icon: Heart, title: "Dedicación total", description: "Tu proyecto recibe mi atención completa de principio a fin." }
  ]

  return (
    <section id="sobre-mi" className="section-padding" ref={ref} aria-labelledby="about-title">
      <div className="container-custom">
        <div className="grid-2 items-center">
          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center mb-6">
                <User size={40} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Desarrollador Web
              </h3>
              <p className="text-primary font-medium mb-6">
                Freelance & Apasionado
              </p>
              
              <div className="flex flex-col gap-3">
                {[
                  { color: 'bg-primary', text: '+2 años de experiencia' },
                  { color: 'bg-success', text: 'Proyectos completados con éxito' },
                  { color: 'bg-purple-500', text: 'Clientes satisfechos' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-text-light">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">Sobre Mí</span>
            <h2 id="about-title" className="section-title">Un desarrollador comprometido con tu éxito</h2>
            
            <p className="text-text-muted text-lg mb-5 leading-relaxed">
              Soy un desarrollador web freelance especializado en crear experiencias 
              digitales únicas. Mi enfoque combina diseño moderno con código limpio.
            </p>
            
            <p className="text-text-muted mb-8 leading-relaxed">
              Trabajo directamente contigo para entender tus necesidades y transformar 
              tu visión en realidad. Sin intermediarios, solo resultados.
            </p>

            <div className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-text-muted text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
