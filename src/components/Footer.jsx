import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'
import { smoothScrollTo } from '../utils/smoothScroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const quickLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
  ]

  const scrollTo = smoothScrollTo

  return (
    <footer className="bg-[#0a0e1a] border-t border-primary/30 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">DevStudio</h3>
            <p className="text-text-muted mb-6">
              Creando experiencias digitales efectivas y únicas.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-widest">
              Enlaces
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-text-muted bg-transparent border-none cursor-pointer text-base hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-widest">
              Contacto
            </h4>
            <button
              onClick={() => scrollTo('#contacto')}
              className="inline-flex items-center gap-2 text-text-muted bg-transparent border-none cursor-pointer text-base hover:text-primary transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Hablemos</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} DevStudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
