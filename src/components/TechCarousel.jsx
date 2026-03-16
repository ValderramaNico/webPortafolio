import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

import wordpressLogo from '../assets/images/logos/wordpress.svg'
import elementorLogo from '../assets/images/logos/elementor.svg'
import vueLogo from '../assets/images/logos/vue3.svg'
import html5Logo from '../assets/images/logos/html5.svg'
import css3Logo from '../assets/images/logos/css3.svg'
import javascriptLogo from '../assets/images/logos/javascript.svg'
import bootstrapLogo from '../assets/images/logos/bootstrap.svg'
import tailwindLogo from '../assets/images/logos/tailwind.svg'
import chatgptLogo from '../assets/images/logos/chatgpt.svg'
import codeLogo from '../assets/images/logos/vscode.svg'
import reactlogo from '../assets/images/logos/react.svg'

const TechCarousel = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    { name: 'WordPress', logo: wordpressLogo },
    { name: 'Elementor', logo: elementorLogo },
    { name: 'HTML5', logo: html5Logo },
    { name: 'CSS3', logo: css3Logo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'React', logo: reactlogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'TailwindCSS', logo: tailwindLogo },
    { name: 'ChatGPT', logo: chatgptLogo },
    { name: 'VS Code', logo: codeLogo },
  ]

  return (
    <section className="section-padding overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tecnologías</span>
          <h2 className="section-title">Herramientas que domino</h2>
          <p className="section-description">
            Utilizo las tecnologías más modernas y eficientes para crear 
            soluciones web de alta calidad.
          </p>
        </motion.div>

        {/* Infinite Carousel with CSS */}
        <div className="relative mb-12">
          {/* Carousel Track */}
          <div className="overflow-hidden py-4">
            <div className="carousel-track">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={`tech-${index}`} className="carousel-item">
                  <div className="card w-[140px] h-[140px] flex flex-col items-center justify-center gap-3 p-5">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-[50px] h-[50px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-text-light text-xs text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid-4">
          {[
            { label: 'Frontend', count: '6+', desc: 'Frameworks' },
            { label: 'Backend', count: '3+', desc: 'Tecnologías' },
            { label: 'Diseño', count: '4+', desc: 'Herramientas' },
            { label: 'DevOps', count: '5+', desc: 'Tools' },
          ].map((category) => (
            <div key={category.label} className="card text-center">
              <span className="text-3xl font-bold text-primary">{category.count}</span>
              <h4 className="text-white font-semibold mt-2">{category.label}</h4>
              <p className="text-text-muted text-sm">{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechCarousel
