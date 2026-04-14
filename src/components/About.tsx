import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Zap, Code2, ArrowRight } from 'lucide-react'

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="section-heading-line" />
      <span className="text-indigo-400 text-xs font-semibold tracking-[0.15em] uppercase">{text}</span>
    </div>
  )
}

const stats = [
  { label: 'Projects\nShipped', value: '3+' },
  { label: 'Technologies\nMastered', value: '12+' },
  { label: 'Years\nCoding', value: '2+' },
  { label: 'Internship\nReady', value: '✓' },
]

const facts = [
  { icon: GraduationCap, text: '2nd Year B.Tech CSE @ SRM University AP', color: '#818cf8' },
  { icon: MapPin, text: 'Andhra Pradesh, India', color: '#22d3ee' },
  { icon: Zap, text: 'Focused on clean UI & full-stack architecture', color: '#a78bfa' },
  { icon: Code2, text: 'React · Node.js · MongoDB · TypeScript', color: '#34d399' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Orb */}
      <div className="orb w-96 h-96 bottom-0 right-0" style={{ background: '#22d3ee', animationDelay: '-2s', opacity: 0.07 }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px]">
              {/* Animated rotating gradient border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #22d3ee, #a78bfa)',
                  padding: '2px',
                  borderRadius: '28px',
                  animation: 'orb-float 6s ease-in-out infinite',
                }}
              >
                <div className="w-full h-full rounded-[26px]" style={{ background: '#080810' }} />
              </div>

              {/* Content */}
              <div
                className="absolute inset-[2px] rounded-[26px] overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(160deg, rgba(129,140,248,0.1) 0%, rgba(34,211,238,0.05) 100%)' }}
              >
                <div className="text-center px-6 select-none">
                  <div className="text-6xl mb-5 filter drop-shadow-lg">🧑‍💻</div>
                  <div className="text-[11px] font-mono leading-relaxed text-left inline-block">
                    <p><span className="text-cyan-400/80">const</span> <span className="text-white/90">dev</span> <span className="text-white/50">=</span> {'{'}</p>
                    <p className="ml-4"><span className="text-indigo-300">name</span><span className="text-white/50">:</span> <span className="text-emerald-400">"Raunak Rai"</span><span className="text-white/50">,</span></p>
                    <p className="ml-4"><span className="text-indigo-300">stack</span><span className="text-white/50">:</span> <span className="text-emerald-400">"MERN"</span><span className="text-white/50">,</span></p>
                    <p className="ml-4"><span className="text-indigo-300">passion</span><span className="text-white/50">:</span> <span className="text-emerald-400">"shipping"</span><span className="text-white/50">,</span></p>
                    <p className="ml-4"><span className="text-indigo-300">open</span><span className="text-white/50">:</span> <span className="text-cyan-400">true</span></p>
                    <p><span className="text-white/60">{'}'}</span></p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-emerald-500/20 shadow-lg shadow-emerald-500/5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-400 text-xs font-semibold whitespace-nowrap">Open to Internships</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -left-5 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
              >
                <span className="text-indigo-400 text-xs font-semibold">MERN Stack</span>
                <span className="text-base">⚡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <SectionLabel text="About Me" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Building things for the{' '}
              <span className="gradient-text">web</span>
            </h2>

            <p className="text-white/55 text-[15px] leading-[1.85] mb-4">
              I'm Raunak Rai — a 2nd year CSE student at SRM University AP obsessed with building full-stack web applications that are fast, functional, and beautifully designed.
            </p>
            <p className="text-white/55 text-[15px] leading-[1.85] mb-4">
              From crafting smooth React frontends to engineering robust Node.js & Express APIs backed by MongoDB — I care about the details that make products feel premium and real-world ready.
            </p>
            <p className="text-white/55 text-[15px] leading-[1.85] mb-8">
              I ship real products, not just clones. Whether it's a finance dashboard or an AI-powered GitHub analyzer — I love solving problems that matter.
            </p>

            {/* Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {facts.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-white/50 text-sm p-2.5 rounded-xl transition-all duration-200 hover:bg-white/3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-[13px]">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {stats.map(s => (
                <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)' }}>
                  <div className="gradient-text text-2xl font-bold">{s.value}</div>
                  <div className="text-white/30 text-[10px] mt-1 leading-snug whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold hover:text-white transition-colors group"
            >
              Let's work together
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
