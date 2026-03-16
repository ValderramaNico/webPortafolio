import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo varía según la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio web completo puede tomar 3-6 semanas. Te daré un cronograma detallado en la propuesta inicial."
    },
    {
      question: "¿Qué necesito para empezar mi proyecto?",
      answer: "Principalmente necesito entender tu visión: qué quieres lograr, tu público objetivo, y cualquier material que tengas (logo, textos, imágenes). Si no tienes todo listo, puedo ayudarte a definirlo."
    },
    {
      question: "¿Ofrecen mantenimiento después del lanzamiento?",
      answer: "Sí, ofrezco planes de mantenimiento que incluyen actualizaciones de seguridad, backups, pequeños cambios y soporte técnico. También te capacito para que puedas hacer cambios básicos por tu cuenta."
    },
    {
      question: "¿El sitio web será responsive (adaptable a móviles)?",
      answer: "Absolutamente. Todos mis proyectos son 100% responsive y están optimizados para verse perfectamente en cualquier dispositivo: móviles, tablets y computadoras de escritorio."
    },
    {
      question: "¿Puedo actualizar el contenido yo mismo?",
      answer: "Sí, dependiendo de la tecnología utilizada. Si usamos WordPress, tendrás un panel de administración fácil de usar. Para sitios custom, te capacito en las herramientas necesarias o puedo incluir un CMS."
    },
    {
      question: "¿Qué formas de pago aceptas?",
      answer: "Trabajo con un modelo de pago por etapas: un anticipo para comenzar, pagos intermedios según avance, y el saldo al entregar. Acepto transferencias bancarias y otros métodos que acordemos."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-description">
            Respuestas a las dudas más comunes sobre mis servicios y proceso de trabajo.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card overflow-hidden p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left bg-transparent border-none cursor-pointer text-white"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className="text-primary shrink-0" />
                    <span className="text-white font-medium">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-text-muted" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pl-14">
                        <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-text-muted mb-4">
            ¿Tienes otra pregunta?
          </p>
          <button
            onClick={() => smoothScrollTo('#contacto')}
            className="text-primary font-medium bg-transparent border-none cursor-pointer hover:underline"
          >
            Contáctame directamente →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
