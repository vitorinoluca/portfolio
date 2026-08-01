import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

type Contact = {
  label: string;
  value: string;
  href: string;
};

const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'valentinvitorimo28@gmail.com',
    href: 'mailto:valentinvitorimo28@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/vitorinoluca',
    href: 'https://github.com/vitorinoluca',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/luca-vitorino',
    href: 'https://www.linkedin.com/in/luca-vitorino/',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ContactTerminal() {
  return (
    <div className='min-w-0'>
      <SectionHeading
        kicker='Contacto'
        title='Hablemos'
        description='Enviame una consulta, oportunidad laboral o propuesta freelance. Respondo en menos de 24h.'
      />

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='border-t border-border'
      >
        {contacts.map((item) => (
          <motion.a
            key={item.label}
            variants={row}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className='group flex flex-wrap items-center justify-between gap-3 border-b border-border py-6 transition-colors hover:bg-white/[0.02]'
          >
            <div className='flex items-baseline gap-4'>
              <span className='edge-label w-20 shrink-0'>{item.label}</span>
              <span className='font-display text-xl font-semibold text-foreground transition-colors group-hover:text-accent sm:text-2xl'>
                {item.value}
              </span>
            </div>
            <ArrowUpRight className='h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent' />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
