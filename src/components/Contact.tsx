import { Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Contact() {
  return (
    <div className='min-w-0'>
      <SectionHeading
        title='Contacto'
        description='Escribime por consultas, oportunidades laborales o propuestas freelance. Respondo en menos de 24h.'
      />

      <div className='grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16'>
        <div className='flex items-center gap-6'>
          <a
            href='https://github.com/vitorinoluca'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            title='GitHub'
            className='text-ink-muted transition-colors hover:text-stamp'
          >
            <GithubIcon className='h-6 w-6' aria-hidden='true' />
            <span className='sr-only'>GitHub</span>
          </a>
          <a
            href='https://www.linkedin.com/in/luca-vitorino/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            title='LinkedIn'
            className='text-ink-muted transition-colors hover:text-stamp'
          >
            <LinkedinIcon className='h-6 w-6' aria-hidden='true' />
            <span className='sr-only'>LinkedIn</span>
          </a>
          <a
            href='mailto:valentinvitorino28@gmail.com'
            aria-label='Escribime un email'
            title='Escribime un email'
            className='pressable inline-flex items-center gap-2 text-base font-medium text-stamp transition-colors hover:text-stamp/80'
          >
            <Mail className='h-5 w-5' aria-hidden='true' />
            Escribime
          </a>
        </div>

        <div className='flex items-center justify-end text-sm text-ink-muted'>
          Disponible para nuevos proyectos
        </div>
      </div>
    </div>
  );
}
