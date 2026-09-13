import { InstagramIcon, WhatsappIcon } from './icons';

const services = [
  'Landing pages para campañas',
  'Sitios con cobro online',
  'Paneles internos de gestión',
  'Automatizaciones (WhatsApp, facturación)',
];

export default function Fluxify() {
  return (
    <article className='min-w-0'>
      <div className='flex items-center gap-2'>
        <h2 className='font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'>
          Fluxify
        </h2>
        <span
          className='h-4 w-4 shrink-0 rounded-full bg-linear-to-br from-blue-500 to-pink-500 shadow-[0_1px_4px_-1px_rgba(37,99,235,0.45)] ring-2 ring-paper'
          aria-hidden='true'
        />
      </div>
      <p className='mt-2 font-display text-xl font-bold text-ink'>Mi agencia de desarrollo web.</p>

      <div className='mt-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-4'>
        <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted'>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
          <a
            href='https://www.fluxify.site'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-stamp'
          >
            Visitar sitio
          </a>
          <a
            href='https://www.instagram.com/fluxify.dev/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram de Fluxify'
            title='Instagram de Fluxify'
            className='text-ink-muted transition-colors hover:text-stamp'
          >
            <InstagramIcon className='h-5 w-5' aria-hidden='true' />
            <span className='sr-only'>Instagram</span>
          </a>
          <a
            href='https://wa.me/542216417032'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp de Fluxify'
            title='WhatsApp de Fluxify'
            className='text-ink-muted transition-colors hover:text-stamp'
          >
            <WhatsappIcon className='h-5 w-5' aria-hidden='true' />
            <span className='sr-only'>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
