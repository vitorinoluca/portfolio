import SectionHeading from './SectionHeading';

type Item = { label: string; milestone?: boolean };

const years: { year: string; items: Item[] }[] = [
  {
    year: '2022',
    items: [
      { label: 'HTML' },
      { label: 'CSS' },
      { label: 'JavaScript' },
      { label: 'Sass' },
      { label: 'Bootstrap' },
      { label: 'SEO' },
      { label: 'Git' },
      { label: 'GitHub' },
    ],
  },
  {
    year: '2023',
    items: [
      { label: 'Javascript' },
      { label: 'React.js' },
      { label: 'Node.js' },
    ],
  },
  {
    year: '2024',
    items: [
      { label: 'Express.js' },
      { label: 'Mongodb' },
      { label: 'Typescript' },
      { label: 'WebSockets' },
      { label: 'Next.js' },
    ],
  },
  {
    year: '2025',
    items: [
      { label: 'PostgreSQL' },
      { label: 'Redis' },
      { label: 'NestJS' },
      { label: 'Docker' },
      { label: 'localhost:forum ', milestone: true },
    ],
  },
  {
    year: '2026',
    items: [
      { label: 'Agentes' },
      { label: 'n8n' },
      { label: 'Automatizaciones' },
      { label: 'Fundación de Fluxify', milestone: true },
      { label: 'Integración con ARCA', milestone: true },
    ],
  },
];

function Chip({ item }: { item: Item }) {
  return (
    <span
      className={
        item.milestone
          ? 'inline-flex items-center rounded-md border border-stamp/60 bg-stamp/20 px-2.5 py-1 text-xs font-medium text-stamp'
          : 'inline-flex items-center rounded-md border border-ink/15 bg-ink/10 px-2.5 py-1 text-xs text-ink-muted'
      }
    >
      {item.label}
    </span>
  );
}

export default function Timeline() {
  return (
    <article className='min-w-0'>
      <SectionHeading
        title='Recorrido'
        description='Mi evolución como developer.'
      />

      <div className='relative mx-auto max-w-2xl'>
        {/* Tronco fijo: conecta los años. Todo el contenido va del mismo
            lado, para que se lea igual en mobile y desktop. */}
        <div className='absolute left-4 top-2 bottom-2 z-0 w-1 -translate-x-1/2 bg-line' />

        {years.map((entry, i) => {
          return (
            <div key={entry.year} className='relative py-7'>
              <span
                className='absolute left-4 top-2.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-stamp ring-4 ring-paper shadow-[0_0_10px_2px_rgba(227,165,66,0.55)]'
                aria-hidden='true'
              />
              <span
                className='absolute left-4 top-[15px] z-0 h-px w-6 bg-line'
                aria-hidden='true'
              />

              <div className='pl-10'>
                <div className='flex items-baseline gap-3'>
                  <p className='font-display font-bold text-stamp text-3xl'>
                    {entry.year}
                  </p>
                </div>

                <div className='mt-3 flex flex-wrap gap-2'>
                  {entry.items.map((item) => (
                    <Chip key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
