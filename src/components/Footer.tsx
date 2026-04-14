import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const socials = [
  { icon: Github, href: 'https://github.com/raunak-cybersec', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/raunak-rai-35968b316', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:raunak96963@gmail.com', label: 'Email' },
]

const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 pt-14 pb-10 px-6 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px" style={{ background: 'linear-gradient(90deg, transparent, #818cf8, #22d3ee, transparent)' }} />

      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">

          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="gradient-text font-bold text-2xl" style={{ fontFamily: 'Syne, sans-serif' }}>RR.</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Full-Stack Web Developer building modern,<br />scalable products with MERN stack.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-1">Navigation</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/40 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-widest mb-1">Connect</p>
            <div className="flex items-center gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/35 hover:text-white hover:bg-white/6 transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: 'rgba(255,255,255,0.04)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs flex items-center gap-1.5">
            Designed & built by
            <span className="text-white/40 font-medium">Raunak Rai</span>
            · Made with <Heart size={11} className="text-rose-500 fill-rose-500 mx-0.5" /> in India
            · {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs">React · TypeScript · Tailwind · Framer Motion</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white/30 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              title="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
