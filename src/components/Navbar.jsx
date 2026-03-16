import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const scrollToSection = (href) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      smoothScrollTo(href)
    }
  }

  return (
    <header className="fixed w-full top-0 z-50">
      <motion.nav
        className={`transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-[10px]' : 'py-6 bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white no-underline">
            DevStudio
          </Link>

          {/* Desktop Menu */}
          <ul className="desktop-nav gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('#') ? (
                  <button 
                    onClick={() => scrollToSection(link.href)} 
                    className="text-white font-medium bg-transparent border-none cursor-pointer text-base transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    to={link.href} 
                    className={`font-medium no-underline transition-colors duration-300 hover:text-primary ${location.pathname === link.href ? 'text-primary' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-nav-btn bg-transparent border-none text-white cursor-pointer z-50"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(link.href)} 
                      className="text-white font-medium bg-transparent border-none cursor-pointer text-3xl transition-colors duration-300 hover:text-primary"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      onClick={() => setMenuOpen(false)} 
                      className="text-white font-medium no-underline text-3xl transition-colors duration-300 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
