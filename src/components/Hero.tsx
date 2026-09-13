import { Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id='hero' className='relative px-6 pt-32 pb-10 md:px-8 md:pt-40 md:pb-12'>
      <div className='mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-10 md:flex-row md:items-end md:justify-between'>
        <div>
          {/* Único momento animado de toda la página: el título asienta al cargar. */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className='font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-ink sm:text-7xl lg:text-8xl'
          >
            Luca Vitorino
          </motion.h1>

          <p className='font-display mt-8 max-w-md text-3xl font-bold leading-tight text-ink sm:text-4xl'>
            Fullstack developer.
          </p>
          <p className='mt-2 text-sm text-ink-muted'>Next.js &amp; NestJS | Estudiante de Lic. en Sistemas</p>

          <a
            href='/cv-vitorino.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='pressable mt-6 inline-flex items-center rounded-md bg-linear-to-b from-stamp to-stamp/80 px-4 py-2 text-sm font-medium text-paper transition-colors hover:to-stamp/90'
          >
            Ver CV
          </a>
        </div>

        <div className='flex items-center gap-6 md:pb-2'>
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
      </div>
    </section>
  );
}
