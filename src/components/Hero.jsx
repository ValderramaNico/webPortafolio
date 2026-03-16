import { motion } from 'framer-motion'
import { ArrowDown, Code2, Sparkles } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const Hero = () => {
  const scrollTo = smoothScrollTo

  return (
    <header role="banner" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-30 pb-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-[800px] mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-6 cursor-pointer transition-all duration-300 hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(0,172,172,0.4)] hover:brightness-125"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary">Desarrollo Web Profesional</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold mb-6 leading-[1.1]"
          >
            <span className="text-white">Transformo</span>
            <br />
            <span className="text-gradient">Ideas en Web</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-text-muted mb-10 max-w-[600px] mx-auto leading-relaxed"
          >
            Diseño y desarrollo sitios web únicos, modernos y funcionales 
            que impulsan tu negocio al siguiente nivel.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button onClick={() => scrollTo('#contacto')} className="btn-primary">
              Hablemos de tu proyecto
            </button>
            <button onClick={() => scrollTo('#portafolio')} className="btn-outline">
              Ver Portafolio
            </button>
          </motion.div>

          {/* Code Preview - Desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-15 hidden md:block"
          >
            <div className="card max-w-[400px] mx-auto text-left">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm text-text-light font-mono m-0">
{`const website = {
  design: "moderno",
  responsive: true,
  performance: "óptimo"
};`}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-15 text-center"
        >
          <motion.button
            onClick={() => scrollTo('#servicios')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted bg-transparent border-none cursor-pointer mx-auto"
          >
            <span className="text-sm">Descubre más</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
