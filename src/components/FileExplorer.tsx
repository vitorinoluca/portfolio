import { motion } from 'motion/react';
import {
  Braces,
  Code2,
  Database,
  ExternalLink,
  FileCode,
  Folder,
  GitBranch,
  Rocket,
  Server,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type TechItem = {
  name: string;
  Icon: typeof Braces;
  color: string;
};

type TechGroup = {
  folder: string;
  items: TechItem[];
};

type Project = {
  name: string;
  status: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl: string;
};

const techGroups: TechGroup[] = [
  {
    folder: 'frontend',
    items: [
      { name: 'React', Icon: Braces, color: 'text-cyan-300' },
      { name: 'Tailwind CSS', Icon: Braces, color: 'text-sky-300' },
      { name: 'JavaScript', Icon: FileCode, color: 'text-yellow-300' },
      { name: 'TypeScript', Icon: FileCode, color: 'text-blue-300' },
      { name: 'Astro', Icon: Braces, color: 'text-orange-300' },
    ],
  },
  {
    folder: 'backend',
    items: [
      { name: 'Express', Icon: Server, color: 'text-emerald-300' },
      { name: 'MongoDB', Icon: Database, color: 'text-green-300' },
      { name: 'PostgreSQL', Icon: Database, color: 'text-indigo-300' },
    ],
  },
  {
    folder: 'tools',
    items: [
      { name: 'Git', Icon: GitBranch, color: 'text-orange-300' },
      { name: 'Figma', Icon: Wrench, color: 'text-pink-300' },
      { name: 'Docker', Icon: Wrench, color: 'text-cyan-300' },
    ],
  },
];

const projects: Project[] = [
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
    <motion.article
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className='min-w-0'
    >
      <div className='mb-7 max-w-3xl'>
        <p className='section-kicker mb-3'>~/workspace</p>
        <h3 className='text-3xl font-semibold tracking-normal text-white md:text-4xl'>
          projects.workspace
        </h3>
        <p className='mt-3 text-sm leading-7 text-white/55 md:text-base'>
          Proyectos, stack tecnico y criterios de entrega.
        </p>
      </div>

      <div className='mac-window'>
        <div className='mac-titlebar flex-col items-start justify-between px-4 py-3 sm:flex-row sm:items-center'>
          <p className='font-mono text-xs uppercase tracking-wide text-white/65'>
            Explorer / Luca Vitorino
          </p>
          <div className='flex flex-wrap gap-2 font-mono text-[11px] text-white/55'>
            <span className='rounded border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-emerald-200'>
              available
            </span>
            <span className='rounded border border-white/10 bg-white/5 px-2 py-1'>
              fullstack
            </span>
          </div>
        </div>

        <div className='grid min-w-0 gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]'>
          <aside className='border-b border-white/10 bg-black/[0.16] p-4 lg:border-b-0 lg:border-r'>
            <Accordion
              type='multiple'
              defaultValue={['frontend', 'backend']}
              className='font-mono text-sm'
            >
              {techGroups.map((group) => (
                <AccordionItem key={group.folder} value={group.folder}>
                  <AccordionTrigger className='hover:no-underline'>
                    <Folder className='h-4 w-4 shrink-0 text-blue-400' />
                    <span className='text-white/85'>{group.folder}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-wrap gap-2 pl-6 pt-1'>
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className='inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 transition-colors hover:bg-white/[0.08]'
                        >
                          <item.Icon
                            className={`h-4 w-4 shrink-0 ${item.color}`}
                          />
                          <span className='text-white/85'>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className='mt-5 rounded-lg border border-white/10 bg-black/25 p-4 font-mono text-xs leading-6 text-white/60'>
              <p className='mb-2 flex items-center gap-2 text-white/80'>
                <ShieldCheck className='h-4 w-4 text-emerald-300' />
                production checklist
              </p>
              <p>responsive layout</p>
              <p>semantic sections</p>
              <p>SEO metadata</p>
              <p>build validated</p>
            </div>
          </aside>

          <div className='min-w-0 space-y-3 p-4 md:p-5'>
            {projects.map((project) => (
              <article
                key={project.name}
                className='rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.065]'
              >
                <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                  <div className='min-w-0'>
                    <h4 className='terminal-line flex items-center gap-2 font-mono text-base text-white'>
                      <FileCode className='h-4 w-4 text-cyan-300' />
                      {project.name}
                    </h4>
                    <p className='terminal-line mt-2 text-sm leading-6 text-white/62'>
                      {project.description}
                    </p>
                  </div>
                  <span className='inline-flex w-fit items-center gap-1 rounded-md border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 font-mono text-[11px] text-emerald-200'>
                    <Rocket className='h-3.5 w-3.5' />
                    {project.status}
                  </span>
                </div>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className='rounded border border-white/10 bg-black/25 px-2 py-1 font-mono text-[11px] text-white/60'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-400/[0.08] px-3 py-2 font-mono text-xs text-cyan-100 transition-colors hover:border-cyan-300/45 hover:bg-cyan-400/[0.14]'
                  >
                    <ExternalLink className='h-3.5 w-3.5' />
                    open demo
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-white/72 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white'
                    >
                      <Code2 className='h-3.5 w-3.5' />
                      view repo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
