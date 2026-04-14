import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string
  level: number
  icon: string   // SVG inline or emoji fallback
}

interface SkillGroup {
  category: string
  description: string
  color: string
  bg: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    description: 'Building pixel-perfect, performant UIs',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.08)',
    skills: [
      { name: 'React', level: 88, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'TypeScript', level: 72, icon: '🔷' },
      { name: 'HTML & CSS', level: 92, icon: '🎨' },
      { name: 'Tailwind CSS', level: 87, icon: '💨' },
      { name: 'Chart.js', level: 72, icon: '📊' },
    ],
  },
  {
    category: 'Backend',
    description: 'Crafting robust APIs and server logic',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    skills: [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚂' },
      { name: 'REST APIs', level: 83, icon: '🔗' },
      { name: 'JWT Auth', level: 78, icon: '🔐' },
    ],
  },
  {
    category: 'Database',
    description: 'Designing schemas and managing data',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
    skills: [
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Mongoose', level: 77, icon: '📦' },
    ],
  },
  {
    category: 'Tools & DevOps',
    description: 'Deploying & shipping with modern tooling',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.08)',
    skills: [
      { name: 'Git', level: 85, icon: '🐙' },
      { name: 'GitHub', level: 87, icon: '⚡' },
      { name: 'Vercel', level: 83, icon: '▲' },
      { name: 'Render', level: 75, icon: '🚀' },
      { name: 'Postman', level: 78, icon: '📮' },
    ],
  },
]

function SkillBar({ skill, color, delay }: { skill: Skill; color: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.015, y: -2 }}
      className="group cursor-default p-4 rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.055)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-[18px] leading-none select-none">{skill.icon}</span>
          <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
        </div>
        <span className="text-[11px] font-bold tabular-nums" style={{ color }}>{skill.level}%</span>
      </div>

      {/* Progress track */}
      <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}70, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </motion.div>
  )
}

function GroupHeader({ group, inView, index }: { group: SkillGroup; inView: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="flex items-center gap-4 mb-5"
    >
      <div
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ background: group.color, boxShadow: `0 0 12px ${group.color}70` }}
      />
      <div className="flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="text-white/80 text-sm font-bold tracking-wide">{group.category}</h3>
          <span className="text-white/25 text-xs">{group.description}</span>
        </div>
      </div>
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="orb w-72 h-72 -left-24 top-1/2 -translate-y-1/2" style={{ background: '#818cf8', animationDelay: '-4s', opacity: 0.07 }} />
      <div className="orb w-56 h-56 right-10 bottom-20" style={{ background: '#22d3ee', animationDelay: '-6s', opacity: 0.06 }} />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-heading-line" />
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.15em] uppercase">Tech Stack</span>
            <div className="section-heading-line" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/38 text-[15px] mt-4 max-w-sm mx-auto leading-relaxed">
            Tools I use to design, build, and ship full-stack products
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <GroupHeader group={group} inView={inView} index={gi} />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={group.color}
                    delay={gi * 0.06 + si * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
