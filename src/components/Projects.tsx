import SectionHeading from './SectionHeading';

type Project = {
  year: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    year: '2026',
    name: 'facturador-arca',
    description:
      'Facturación electrónica (ARCA/WSFEv1) para monotributistas. Los usuarios delegan la facturación en el CUIT de la app y emiten facturas C reales sin gestionar certificados propios.',
    stack: ['NestJS', 'PostgreSQL', 'Next.js', 'AFIP SDK'],
    repoUrl: 'https://github.com/vitorinoluca/facturador-arca',
    demoUrl: 'https://app.fluxify.site',
  },
  {
    year: '2025',
    name: 'payments-platform',
    description:
      'Plataforma de pagos P2P con ledger de doble entrada, locking pesimista para transferencias simultáneas, idempotencia y motor de detección de fraude por reglas.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Socket.io'],
    repoUrl: 'https://github.com/vitorinoluca/payments-platform',
    demoUrl: 'https://payments-platform-hrcm.onrender.com/api',
  },
  {
    year: '2025',
    name: 'localhost:forum',
    description:
      'Foro web con hilos, comentarios anidados y reacciones. Autenticación propia con verificación por email, JWT en cookies httpOnly y hashing Argon2.',
    stack: ['React', 'Express', 'PostgreSQL', 'Supabase Storage'],
    repoUrl: 'https://github.com/vitorinoluca/localhost-forum',
    demoUrl: 'https://localhost-forum.onrender.com',
  },
];

function StackBadge({ tech }: { tech: string }) {
  return (
    <span className='inline-flex items-center rounded-md border border-ink/15 bg-ink/10 px-2.5 py-1 text-xs text-ink-muted'>
      {tech}
    </span>
  );
}

export default function Projects() {
  return (
    <article className='min-w-0'>
      <SectionHeading
        title='Proyectos'
        description='Proyectos técnicos propios, con foco en lógica de negocio real.'
      />

      <div className='flex flex-col gap-6'>
        {projects.map((project) => (
          <div key={project.name} className='rounded-lg border border-line p-6 md:p-8'>
            <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
              <h3 className='font-display text-2xl font-bold text-ink sm:text-3xl'>{project.name}</h3>
              <span className='text-sm text-ink-muted'>{project.year}</span>
            </div>

            <p className='mt-5 max-w-2xl text-sm leading-6 text-ink-muted'>{project.description}</p>

            <div className='mt-6 flex flex-wrap gap-2'>
              {project.stack.map((tech) => (
                <StackBadge key={tech} tech={tech} />
              ))}
            </div>

            <div className='mt-7 flex justify-end gap-3'>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pressable inline-flex items-center rounded-md bg-linear-to-b from-stamp to-stamp/80 px-4 py-2 text-sm font-medium text-paper transition-colors hover:to-stamp/90'
                >
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='pressable inline-flex items-center rounded-md border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink-muted'
                >
                  Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
