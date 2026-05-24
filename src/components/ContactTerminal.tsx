import { motion } from 'motion/react';
type Command = {
  command: string;
  output: string;
  href?: string;
};

const commands: Command[] = [
  {
    command: 'open --email',
    output: 'valentinvitorimo28@gmail.com',
    href: 'mailto:valentinvitorimo28@gmail.com',
  },
  {
    command: 'open --github',
    output: 'github.com/vitorinoluca',
    href: 'https://github.com/vitorinoluca',
  },
  {
    command: 'open --linkedin',
    output: 'linkedin.com/in/luca-vitorino',
    href: 'https://www.linkedin.com/in/luca-vitorino/',
  },
  {
    command: 'book --call',
    output: 'escribime y coordinamos una reunion de 20 min',
    href: 'mailto:valentinvitorimo28@gmail.com?subject=Consulta%20desde%20portfolio',
  },
  {
    command: 'response-time',
    output: '< 24h',
  },
];

export default function ContactTerminal() {
  return (
    <div className='min-w-0'>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className='mb-8'
      >
        <p className='section-kicker mb-3'>~/contact</p>
        <h2 className='mb-3 text-4xl font-semibold tracking-normal md:text-5xl'>
          <span className='font-mono text-white/40'>$</span> contact
        </h2>
        <p className='max-w-2xl text-sm leading-7 text-white/58 md:text-base'>
          Enviame una consulta, oportunidad laboral o propuesta freelance.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className='mac-window'
      >
        <div className='mac-titlebar px-3 py-2'>
          <div className='flex gap-1.5' aria-hidden='true'>
            <span className='traffic-dot bg-[#ff5f57]' />
            <span className='traffic-dot bg-[#febc2e]' />
            <span className='traffic-dot bg-[#28c840]' />
          </div>
          <span className='min-w-0 flex-1 truncate px-2 text-center font-mono text-xs text-white/55'>
            contact - luca@portfolio
          </span>
          <span className='w-[42px]' aria-hidden='true' />
        </div>

        <div className='space-y-2 p-4 font-mono text-xs leading-6 text-[#e8edf5] sm:p-5 sm:text-[15px] sm:leading-7'>
          <p className='text-white/65'>comandos disponibles:</p>
          {commands.map((item) => (
            <p key={item.command} className='terminal-line pl-2'>
              <span className='text-green-400'>luca@portfolio</span>
              <span className='text-white/55'>:</span>
              <span className='text-blue-300'>~</span>
              <span className='text-white/55'>$</span>{' '}
              <span className='text-yellow-300'>{item.command}</span>
              <span className='text-white/45'>{' -> '}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className='underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-300'
                >
                  {item.output}
                </a>
              ) : (
                <span className='text-cyan-300'>{item.output}</span>
              )}
            </p>
          ))}

          <p className='terminal-line flex flex-wrap items-center pt-3'>
            <span className='text-green-400'>luca@portfolio</span>
            <span className='text-white/55'>:</span>
            <span className='text-blue-300'>~</span>
            <span className='text-white/55'>$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className='ml-2 inline-block h-4 w-2 translate-y-0.5 bg-green-400'
            />
          </p>
        </div>
      </motion.article>
    </div>
  );
}
