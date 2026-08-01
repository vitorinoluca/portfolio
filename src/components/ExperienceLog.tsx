import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ExperienceLog() {
  return (
    <article className='min-w-0'>
      <SectionHeading
        kicker='Trayectoria'
        title='Formacion'
        description='Formacion academica, practica tecnica y aprendizaje continuo.'
      />

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='border-t border-border'
      >
        {entries.map((entry) => (
          <motion.div
            key={entry.year + entry.title}
            variants={row}
            className='grid grid-cols-1 gap-2 border-b border-border py-7 md:grid-cols-[6rem_1fr_auto] md:items-baseline md:gap-8'
          >
            <span className='font-display text-sm text-accent'>{entry.year}</span>
            <div className='min-w-0'>
              <h3 className='font-display text-xl font-bold text-foreground'>{entry.title}</h3>
              <p className='mt-1 text-sm text-muted-foreground'>{entry.detail}</p>
              <p className='mt-2 text-sm leading-6 text-foreground/70'>{entry.focus}</p>
            </div>
            <p className='text-xs uppercase tracking-wide text-muted-foreground'>{entry.metric}</p>
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
}
