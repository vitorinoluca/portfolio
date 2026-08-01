import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Mail } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroDesktop() {
  return (
    <section id='hero' className='relative z-10 flex min-h-dvh flex-col justify-center px-6 pt-24 pb-16 md:px-10'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='mx-auto w-full max-w-6xl min-w-0'
      >
        <motion.h1
          variants={item}
          className='font-display text-[15vw] font-bold uppercase leading-[0.86] tracking-tight text-foreground sm:text-[10vw] lg:text-[7.5rem]'
        >
          Luca
          <br />
          Vitorino
        </motion.h1>

        <motion.div
          variants={item}
          className='mt-8 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between'
        >
          <div className='max-w-xl'>
            <p className='font-display text-xl font-semibold text-accent'>Fullstack Developer</p>
            <p className='mt-3 text-lg leading-8 text-muted-foreground'>
              Desarrollo aplicaciones web con foco en interfaces limpias, logica clara y bases
              solidas para llevar ideas a produccion.
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <motion.a
              href='#projects'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className='inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-transparent hover:text-accent'
            >
              Ver proyectos
              <ArrowDown className='h-4 w-4' />
            </motion.a>
            <motion.a
              href='#contact'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className='inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent'
            >
              Contactarme
              <Mail className='h-4 w-4' />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className='mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground'
        >
          <span>La Plata, Argentina</span>
          <span className='inline-flex items-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-accent' />
            Disponible para nuevos proyectos
          </span>
          <a
            href='https://github.com/vitorinoluca'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 transition-colors hover:text-accent'
          >
            <Code2 className='h-4 w-4' />
            GitHub
            <ArrowUpRight className='h-3 w-3' />
          </a>
          <a
            href='https://www.linkedin.com/in/luca-vitorino/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 transition-colors hover:text-accent'
          >
            <BriefcaseBusiness className='h-4 w-4' />
            LinkedIn
            <ArrowUpRight className='h-3 w-3' />
          </a>
          <a
            href='mailto:valentinvitorimo28@gmail.com'
            className='inline-flex items-center gap-1.5 transition-colors hover:text-accent'
          >
            <Mail className='h-4 w-4' />
            valentinvitorimo28@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
