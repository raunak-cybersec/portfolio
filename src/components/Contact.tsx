import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raunak96963@gmail.com',
    href: 'mailto:raunak96963@gmail.com',
    color: '#818cf8',
    description: 'Best for formal outreach',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raunak-rai',
    href: 'https://www.linkedin.com/in/raunak-rai-35968b316',
    color: '#22d3ee',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/raunak-cybersec',
    href: 'https://github.com/raunak-cybersec',
    color: '#a78bfa',
    description: 'Check out my work',
  },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with EmailJS or Formspree for production
    setTimeout(() => {
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1800)
  }

  const inputBase = `
    w-full text-white text-sm placeholder-white/25 outline-none
    rounded-xl px-4 py-3.5 transition-all duration-200
    border focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/15
  `
  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    borderColor: 'rgba(255,255,255,0.07)',
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="orb w-[450px] h-[450px] -bottom-24 -left-24" style={{ background: '#22d3ee', animationDelay: '-3s', opacity: 0.06 }} />
      <div className="orb w-80 h-80 right-0 top-20" style={{ background: '#818cf8', animationDelay: '-2s', opacity: 0.05 }} />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-heading-line" />
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.15em] uppercase">Get In Touch</span>
            <div className="section-heading-line" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-white/40 text-[15px] mt-4 max-w-md mx-auto leading-relaxed">
            Open to internship opportunities — drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left — Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2 space-y-3"
          >
            <p className="text-white/50 text-[14px] leading-[1.8] mb-7">
              I'm currently looking for internship roles in full-stack development. Whether you have an exciting opportunity or just want to say hi — my inbox is always open.
            </p>

            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.055)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}20`,
                    boxShadow: `0 0 0 0 ${s.color}40`,
                  }}
                >
                  <s.icon size={18} style={{ color: s.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/35 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{s.label}</p>
                  <p className="text-white/75 text-xs font-medium group-hover:text-white transition-colors truncate">{s.value}</p>
                  <p className="text-white/28 text-[10px] mt-0.5">{s.description}</p>
                </div>
                <ArrowRight size={14} className="text-white/20 group-hover:text-white/50 transition-all duration-200 shrink-0 group-hover:translate-x-1" />
              </motion.a>
            ))}

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-6 p-4 rounded-2xl flex items-center gap-3"
              style={{
                background: 'rgba(52,211,153,0.06)',
                border: '1px solid rgba(52,211,153,0.15)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <p className="text-emerald-400/80 text-xs font-medium">
                Available for internship / freelance — <span className="text-emerald-400">Let's connect</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl space-y-5"
              style={{
                background: 'rgba(255,255,255,0.022)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.065)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold mb-2 uppercase tracking-[0.12em]">Your Name</label>
                  <input
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Raunak Rai"
                    className={inputBase}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[10px] font-semibold mb-2 uppercase tracking-[0.12em]">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className={inputBase}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-[10px] font-semibold mb-2 uppercase tracking-[0.12em]">Message</label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project you have in mind..."
                  className={`${inputBase} resize-none`}
                  style={inputStyle}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg, #818cf8, #22d3ee)' }}
              >
                {status === 'idle' && <><Send size={15} /> Send Message</>}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && <><CheckCircle2 size={15} /> Message Sent!</>}
                {status === 'error' && <><AlertCircle size={15} /> Try Again</>}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 text-sm font-medium"
                >
                  🎉 Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
