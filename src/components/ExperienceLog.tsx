import { motion } from 'motion/react';

const entries = [
  {
    year: '2026',
    title: 'Universidad Nacional de La Plata (UNLP)',
    detail: 'Analista Programador Universitario',
    metric: 'Marzo 2025 - Actualmente',
    focus: 'Fundamentos de programacion, estructuras de datos y sistemas.',
  },
  {
    year: '2023',
    title: 'Universidad Tecnologica Nacional (UTN)',
    detail: 'Programador Web Avanzado - Full Stack Developer',
    metric: 'Septiembre 2023 - Diciembre 2023',
    focus: 'Frontend, backend, bases de datos y arquitectura de aplicaciones web.',
  },
  {
    year: '2023',
    title: 'CoderHouse',
    detail: 'Curso de React Js',
    metric: 'Marzo 2023 - Junio 2023',
    focus: 'Componentes, estado, routing y consumo de APIs.',
  },
];

export default function ExperienceLog() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className='min-w-0'
    >
      <div className='mb-7 max-w-3xl'>
        <p className='section-kicker mb-3'>~/education</p>
        <h3 className='text-3xl font-semibold tracking-normal text-white md:text-4xl'>studies.log</h3>
        <p className='mt-3 text-sm leading-7 text-white/55 md:text-base'>
          Formacion academica, practica tecnica y aprendizaje continuo.
        </p>
      </div>

      <div className='mac-window'>
        <div className='mac-titlebar terminal-line px-4 py-3 font-mono text-xs text-white/60'>
          terminal -- cat studies.log
        </div>

        <div className='space-y-3 p-5 font-mono text-sm'>
          {entries.map((entry) => (
            <div
              key={entry.year + entry.title}
              className='rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-cyan-300/25 hover:bg-white/[0.065]'
            >
              <p className='terminal-line text-white/80'>
                <span className='text-purple-300'>{entry.year}</span> -{' '}
                <span className='text-green-300'>{entry.title}</span>
              </p>
              <p className='terminal-line mt-1 text-white/60'>{entry.detail}</p>
              <p className='terminal-line mt-2 text-white/45'>{entry.focus}</p>
              <p className='terminal-line mt-2 text-yellow-300'>{entry.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
