import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'

const ROLES = [
  'Full-Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Problem Solver',
]

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = words[wordIdx]
    if (!deleting && charIdx === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    } else {
      timeout.current = setTimeout(() => {
        setCharIdx(i => i + (deleting ? -1 : 1))
        setDisplayed(current.slice(0, charIdx + (deleting ? -1 : 1)))
      }, deleting ? speed / 2.2 : speed)
    }
    return () => { if (timeout.current) clearTimeout(timeout.current) }
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let raf: number

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.2,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.55 + 0.05,
      color: Math.random() > 0.5 ? '129,140,248' : '34,211,238',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
      })
      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(129,140,248,${0.035 * (1 - dist / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      <ParticleCanvas />

      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] -top-32 -left-32" style={{ background: '#818cf8', animationDelay: '0s', opacity: 0.09 }} />
      <div className="orb w-[400px] h-[400px] top-1/3 -right-28" style={{ background: '#22d3ee', animationDelay: '-4s', opacity: 0.08 }} />
      <div className="orb w-80 h-80 bottom-10 left-1/3" style={{ background: '#a78bfa', animationDelay: '-7s', opacity: 0.07 }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/6 text-indigo-300 text-xs font-semibold mb-8 tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Open to Internship Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-6xl sm:text-7xl md:text-[88px] lg:text-[100px] font-bold mb-4 leading-[0.95] tracking-tight"
        >
          <span className="text-white">Raunak</span>{' '}
          <span className="gradient-text">Rai</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-medium text-white/50">
            I build as a{' '}
            <span className="gradient-text font-bold">{role}</span>
            <span className="typewriter-cursor" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
          className="text-white/38 text-base sm:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
        >
          2nd Year CSE @ SRM University AP — engineering full-stack products
          that are fast, clean, and actually shipped.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.46, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
              boxShadow: '0 0 30px rgba(129,140,248,0.3), 0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <Sparkles size={16} />
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white/80 text-sm tracking-wide border border-white/10 bg-white/4 hover:text-white transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-14"
        >
          {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Vercel'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.07 }}
              className="text-white/22 text-xs font-medium tracking-wider hidden sm:block"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
