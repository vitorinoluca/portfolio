import { motion, MotionConfig } from 'motion/react';
import ContactTerminal from './components/ContactTerminal';
import StudiesLog from './components/ExperienceLog';
import FileExplorer from './components/FileExplorer';
import Footer from './components/Footer';
import HeroDesktop from './components/HeroDesktop';
import MacNavbar from './components/MacNavbar';
import SectionHeading from './components/SectionHeading';

const profile = [
  { label: 'Rol', value: 'Fullstack Developer' },
  { label: 'Situacion', value: 'Estudiante de sistemas, 21 años' },
  { label: 'Ubicacion', value: 'La Plata, Argentina' },
  { label: 'Foco', value: 'Frontend claro, backend ordenado y productos mantenibles' },
  { label: 'Buscando', value: 'Primeras oportunidades IT y proyectos freelance' },
  { label: 'Disponibilidad', value: 'Disponible ahora' },
];

const workflow = [
  'Entender el problema',
  'Diseñar una interfaz usable',
  'Modelar datos y endpoints',
  'Iterar con feedback',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <main className='relative min-h-screen overflow-x-hidden bg-background text-foreground'>
        <MacNavbar />

        <HeroDesktop />

        <section id='projects' className='relative z-10 px-6 py-24 md:px-10 md:py-32'>
          <div className='mx-auto max-w-6xl'>
            <FileExplorer />
          </div>
        </section>

        <section id='about' className='relative z-10 px-6 py-24 md:px-10 md:py-32'>
          <div className='mx-auto max-w-6xl'>
            <SectionHeading
              kicker='Perfil'
              title='Sobre mi'
              description='Perfil tecnico, forma de trabajo y objetivos profesionales.'
            />
            <div className='grid gap-12 md:grid-cols-2'>
              <motion.dl
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
                className='divide-y divide-border border-y border-border'
              >
                {profile.map((entry) => (
                  <motion.div
                    key={entry.label}
                    variants={item}
                    className='flex flex-col gap-1 py-4 sm:flex-row sm:gap-6'
                  >
                    <dt className='edge-label w-40 shrink-0'>{entry.label}</dt>
                    <dd className='text-base text-foreground/85'>{entry.value}</dd>
                  </motion.div>
                ))}
              </motion.dl>

              <div>
                <p className='edge-label mb-5'>Como trabajo</p>
                <motion.ol
                  variants={container}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 0.3 }}
                  className='space-y-6'
                >
                  {workflow.map((step, i) => (
                    <motion.li key={step} variants={item} className='flex items-start gap-4'>
                      <span className='font-display text-2xl font-bold text-accent'>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className='pt-1 text-base text-foreground/85'>{step}</span>
                    </motion.li>
                  ))}
                </motion.ol>
              </div>
            </div>
          </div>
        </section>

        <section id='studies' className='relative z-10 px-6 py-24 md:px-10 md:py-28'>
          <div className='mx-auto max-w-6xl'>
            <StudiesLog />
          </div>
        </section>

        <section id='contact' className='relative z-10 px-6 py-24 md:px-10 md:py-32'>
          <div className='mx-auto max-w-3xl'>
            <ContactTerminal />
          </div>
        </section>

        <Footer />
      </main>
    </MotionConfig>
  );
}
