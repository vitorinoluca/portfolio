import { motion } from 'motion/react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

type Project = {
  name: string;
  status: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    name: 'payments-platform',
    status: 'en desarrollo',
    description:
      'Plataforma de pagos P2P con motor de liquidacion en tiempo real. Locking pesimista en DB para transferencias simultaneas, idempotencia y ledger de doble entrada, aplicando conceptos de concurrencia de la facultad a un caso real de fintech.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Socket.io'],
    repoUrl: 'https://github.com/vitorinoluca/payments-platform',
  },
  {
    name: 'Fluxify',
    status: 'produccion',
    description:
      'Emprendimiento digital de desarrollo web, diseño y soluciones tecnicas a medida para potenciar marcas con sitios modernos, rapidos y optimizados.',
    stack: ['React', 'Typescript', 'Tailwind'],
    demoUrl: 'https://fluxify.site',
  },
  {
    name: 'localhost:forum',
    status: 'finalizado',
    description:
      'Foro web con autenticacion, publicacion de contenido y persistencia. Enfocado en flujo de usuario, rutas protegidas y estructura backend.',
    stack: ['React', 'Typescript', 'Express', 'Database'],
    repoUrl: 'https://github.com/vitorinoluca/localhost-forum',
    demoUrl: 'https://localhost-forum.onrender.com/',
  },
];

export default function FileExplorer() {
  return (
    <article className='min-w-0'>
      <SectionHeading
        kicker='Trabajo'
        title='Proyectos'
        description='Proyectos propios y freelance, con foco en logica de negocio real.'
      />

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='border-t border-border'
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            variants={row}
            className='group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[3rem_1fr_auto] md:items-start md:gap-8'
          >
            <span className='font-display text-sm text-muted-foreground'>
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className='min-w-0'>
              <div className='flex flex-wrap items-center gap-3'>
                <h3 className='font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-3xl'>
                  {project.name}
                </h3>
                <span
                  className={`border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${
                    project.status === 'en desarrollo'
                      ? 'border-accent/40 text-accent'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className='mt-3 max-w-2xl text-sm leading-6 text-muted-foreground'>
                {project.description}
              </p>
              <p className='mt-3 text-xs uppercase tracking-wide text-muted-foreground/70'>
                {project.stack.join(' · ')}
              </p>
            </div>

            <div className='flex items-center gap-4 text-sm font-medium text-foreground/80 md:justify-end'>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 transition-colors hover:text-accent'
                >
                  Demo
                  <ArrowUpRight className='h-4 w-4' />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1 transition-colors hover:text-accent'
                >
                  <Code2 className='h-4 w-4' />
                  Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
}
