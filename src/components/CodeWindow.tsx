import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type CodeWindowProps = {
  title: string;
  children: ReactNode;
};

export default function CodeWindow({ title, children }: CodeWindowProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className='min-w-0'
    >
      <h3 className='mb-4 font-mono text-lg text-white/90'>{title}</h3>
      <div className='mac-window'>
        <div className='mac-titlebar justify-between px-4 py-2'>
          <div className='flex gap-2' aria-hidden='true'>
            <span className='traffic-dot bg-[#ff5f57]' />
            <span className='traffic-dot bg-[#febc2e]' />
            <span className='traffic-dot bg-[#28c840]' />
          </div>
          <span className='truncate px-2 font-mono text-xs text-white/45'>javascript</span>
          <span className='w-14' aria-hidden='true' />
        </div>
        <pre className='whitespace-pre-wrap break-words p-4 font-mono text-xs leading-6 text-[#e8edf5] sm:overflow-x-auto sm:whitespace-pre sm:p-5 sm:text-sm sm:leading-7'>
          <code>{children}</code>
        </pre>
      </div>
    </motion.article>
  );
}
