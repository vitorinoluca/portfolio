import { motion } from 'motion/react';
import {
  ArrowDown,
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  MapPin,
  Server,
  TerminalSquare,
} from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const stackItems = [
  { label: 'Frontend', value: 'React, TypeScript, Tailwind', Icon: Code2 },
  { label: 'Backend', value: 'Node, Express, APIs REST', Icon: Server },
  { label: 'Datos', value: 'MongoDB, PostgreSQL, persistencia', Icon: Database },
];

const terminalLines = [
  { prompt: '$', text: 'profile --summary' },
  { prompt: '>', text: 'Fullstack developer en formacion constante.' },
  { prompt: '>', text: 'Construyo interfaces claras y productos web mantenibles.' },
  { prompt: '$', text: 'availability --status' },
  { prompt: '>', text: 'Disponible para oportunidades IT y proyectos freelance.' },
];

export default function HeroDesktop() {
  return (
    <section
      id='hero'
      className='relative z-10 min-h-dvh overflow-hidden px-6 pt-24 pb-10 md:px-8 lg:px-10'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
        }}
      >
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        />
        <div className='absolute inset-0 bg-black/78' />
        <div className='absolute inset-0 bg-[linear-gradient(120deg,rgba(94,234,212,0.13),rgba(8,9,11,0.78)_45%,rgba(255,255,255,0.04))]' />
        <div className='absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]' />
      </div>

      <div className='relative mx-auto grid min-h-[calc(100dvh-8.5rem)] w-full max-w-7xl min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='min-w-0 max-w-4xl'
        >
          <div className='mb-7 flex flex-wrap items-center gap-2 font-mono text-xs text-white/70'>
            <span className='inline-flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-400/[0.08] px-3 py-1.5 text-emerald-200'>
              <span className='h-2 w-2 rounded-full bg-emerald-300' />
              Disponible
            </span>
            <span className='inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5'>
              <MapPin className='h-3.5 w-3.5 text-cyan-300' />
              La Plata, Argentina
            </span>
          </div>

          <p className='mb-4 font-mono text-sm uppercase tracking-[0.18em] text-cyan-200/78'>
            Fullstack Developer
          </p>
          <h1 className='max-w-5xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl'>
            Luca Valentin Vitorino
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl'>
            Desarrollo aplicaciones web con foco en interfaces limpias, logica clara y bases solidas para llevar ideas a produccion.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#projects'
              className='inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-cyan-100'
            >
              Ver proyectos
              <ArrowDown className='h-4 w-4' />
            </a>
            <a
              href='#contact'
              className='inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold text-white/[0.86] transition-colors hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-cyan-100'
            >
              Contactarme
              <Mail className='h-4 w-4' />
            </a>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <a
              href='https://github.com/vitorinoluca'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/72 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white'
              aria-label='Abrir GitHub'
            >
              <Code2 className='h-4 w-4' />
            </a>
            <a
              href='https://www.linkedin.com/in/luca-vitorino/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/72 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white'
              aria-label='Abrir LinkedIn'
            >
              <BriefcaseBusiness className='h-4 w-4' />
            </a>
            <a
              href='mailto:valentinvitorimo28@gmail.com'
              className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/72 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white'
              aria-label='Enviar email'
            >
              <Mail className='h-4 w-4' />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className='min-w-0 w-full'
        >
          <div className='mac-window'>
            <div className='mac-titlebar justify-between px-4 py-3'>
              <div className='min-w-0 flex items-center gap-2'>
                <TerminalSquare className='h-4 w-4 text-emerald-300' />
                <span className='truncate font-mono text-xs text-white/65'>luca.profile</span>
              </div>
              <span className='hidden shrink-0 font-mono text-[11px] text-white/35 sm:inline'>production-ready</span>
            </div>

            <div className='space-y-3 p-4 font-mono text-xs leading-6 sm:text-sm sm:leading-7 md:p-6'>
              {terminalLines.map((line) => (
                <p key={`${line.prompt}-${line.text}`} className='terminal-line'>
                  <span className={line.prompt === '$' ? 'text-cyan-300' : 'text-emerald-300'}>
                    {line.prompt}
                  </span>{' '}
                  <span className={line.prompt === '$' ? 'text-yellow-200' : 'text-white/68'}>
                    {line.text}
                  </span>
                </p>
              ))}
            </div>

            <div className='grid border-t border-white/10 bg-black/14 sm:grid-cols-3'>
              {stackItems.map((item) => (
                <div
                  key={item.label}
                  className='border-t border-white/10 p-4 sm:border-t-0 sm:border-l sm:first:border-l-0'
                >
                  <item.Icon className='mb-3 h-5 w-5 text-cyan-300' />
                  <p className='font-mono text-xs uppercase tracking-wide text-white/40'>
                    {item.label}
                  </p>
                  <p className='mt-2 text-sm leading-6 text-white/72'>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
