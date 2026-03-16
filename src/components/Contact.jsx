import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: value.replace(/\D/g, '') }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://formspree.io/f/xeoeqvjv', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus({ type: 'success', message: '¡Mensaje enviado! Te contactaré pronto.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Hubo un error. Intenta de nuevo.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión. Intenta de nuevo.' })
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@devstudio.com' },
    { icon: Phone, label: 'Teléfono', value: '+56 9 1234 5678' },
    { icon: MapPin, label: 'Ubicación', value: 'Chile' },
  ]

  return (
    <section id="contacto" className="section-padding" ref={ref} aria-labelledby="contacto-title">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contacto</span>
          <h2 id="contacto-title" className="section-title">Hablemos de tu proyecto</h2>
          <p className="section-description">
            ¿Tienes una idea en mente? Cuéntame sobre tu proyecto y 
            encontremos juntos la mejor solución.
          </p>
        </motion.div>

        <div className="grid-2 max-w-[1000px] mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-text-light mb-2 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full py-3 px-4 bg-transparent border-0 border-b border-gray-600 text-white text-base outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-light mb-2 font-medium">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full py-3 px-4 bg-transparent border-0 border-b border-gray-600 text-white text-base outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-text-light mb-2 font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                  className="w-full py-3 px-4 bg-transparent border-0 border-b border-gray-600 text-white text-base outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-light mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full py-3 px-4 bg-transparent border-0 border-b border-gray-600 text-white text-base outline-none resize-none focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-outline w-full"
              >
                {isSubmitting ? 'Enviando...' : <><Send size={20} /> Enviar mensaje</>}
              </button>

              {status.message && (
                <div className={`flex items-center gap-2 ${status.type === 'success' ? 'text-success' : 'text-danger'}`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              
              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-text-muted mb-4">
                  Respondo en menos de 24 horas. ¡Hablemos!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-success text-sm">Disponible para nuevos proyectos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
