import { motion } from 'motion/react';

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className='mb-10 max-w-3xl'
    >
      <div className='accent-rule mb-5' />
      <p className='edge-label mb-3'>{kicker}</p>
      <h2 className='font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-4 max-w-2xl text-base leading-7 text-muted-foreground'>{description}</p>
      )}
    </motion.header>
  );
}
