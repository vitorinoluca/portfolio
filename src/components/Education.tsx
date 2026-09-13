import SectionHeading from './SectionHeading';

const entries = [
  {
    year: '2025 - actualidad',
    title: 'Universidad Nacional de La Plata (UNLP)',
    detail: 'Licenciatura en Sistemas, Facultad de Informática',
    focus: 'Fundamentos de programacion, estructuras de datos y sistemas.',
  },
  {
    year: 'Sep - Dic 2023',
    title: 'Universidad Tecnologica Nacional (UTN)',
    detail: 'Programador Web Avanzado, Full Stack Developer',
    focus: 'Frontend, backend, bases de datos y arquitectura de aplicaciones web.',
  },
  {
    year: 'Feb - Abr 2023',
    title: 'CoderHouse',
    detail: 'Curso de React Js',
    focus: 'Componentes, estado, routing y consumo de APIs.',
  },
];

export default function Education() {
  return (
    <article className='min-w-0'>
      <SectionHeading
        title='Formación'
        description='Formación académica y práctica técnica.'
      />

      <div className='grid gap-x-16 gap-y-10 md:grid-cols-2'>
        {entries.map((entry) => (
          <div key={entry.year + entry.title}>
            <p className='text-sm text-ink-muted'>{entry.year}</p>
            <h3 className='mt-1 font-display text-xl font-bold text-ink'>{entry.title}</h3>
            <p className='mt-1 text-sm text-ink-muted'>{entry.detail}</p>
            <p className='mt-2 text-sm leading-6 text-ink-muted'>{entry.focus}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
