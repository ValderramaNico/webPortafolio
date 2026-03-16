import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#f0ecec] z-[1000] flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-[#00acac] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="text-[#00acac] text-xl font-semibold tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          CARGANDO
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Loader
