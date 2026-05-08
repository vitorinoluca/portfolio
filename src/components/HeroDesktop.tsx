import { motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

type DesktopWindowProps = {
  title: string;
  className?: string;
  isDraggable: boolean;
  children: ReactNode;
};

function DesktopWindow({
  title,
  className = '',
  isDraggable,
  children,
}: DesktopWindowProps) {
  return (
    <motion.article
      drag={isDraggable}
      dragMomentum={false}
      whileDrag={{ scale: 1.02, zIndex: 30 }}
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e]/95 shadow-2xl backdrop-blur-sm md:absolute md:cursor-grab md:active:cursor-grabbing ${className}`}
    >
      <div className='flex items-center justify-between border-b border-white/5 bg-[#2d2d2d] px-4 py-2'>
        <span className='font-mono text-xs text-white/55'>{title}</span>
        <div className='flex gap-2' aria-hidden='true'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f56]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#ffbd2e]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#27c93f]' />
        </div>
      </div>
      {children}
    </motion.article>
  );
}

export default function HeroDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const updateIsDesktop = () => setIsDesktop(media.matches);

    updateIsDesktop();
    media.addEventListener('change', updateIsDesktop);

    return () => media.removeEventListener('change', updateIsDesktop);
  }, []);

  return (
    <section className='relative z-10 flex min-h-dvh px-6 pt-16 md:h-dvh md:min-h-0 md:items-center'>
      <div className='relative mx-auto flex w-full max-w-7xl flex-col gap-5 py-10 md:h-[calc(100dvh-4rem)] md:py-0'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='md:absolute md:left-0 md:top-[12%] md:w-[360px]'
        >
          <p className='mb-3 font-mono text-sm text-white/45'>~/desktop</p>
          <h1 className='max-w-xl text-5xl font-bold tracking-tight text-white md:text-7xl'>
            Portfolio.exe
          </h1>
          <p className='mt-4 max-w-md font-mono text-sm leading-6 text-white/55'>
            Un escritorio interactivo para descubrir como pienso, diseno y
            construyo interfaces.
          </p>
        </motion.div>

        <DesktopWindow
          title='terminal'
          isDraggable={isDesktop}
          className='md:left-1/2 md:top-1/2 md:w-[560px] md:-translate-x-1/2 md:-translate-y-1/2'
        >
          <div className='min-h-[300px] p-5 font-mono text-sm leading-6 text-[#e5e5e5]'>
            <p>
              <span className='text-green-400'>$</span> boot portfolio.desktop
            </p>
            <p className='text-white/45'>iniciando experiencia...</p>
            <p className='mt-4'>
              <span className='text-green-400'>$</span> whoami
            </p>
            <p className='text-yellow-300'>frontend developer con obsesion por el detalle</p>
            <p className='mt-4'>
              <span className='text-green-400'>$</span> open curiosity.txt
            </p>
            <p className='text-white/65'>
              si algo se siente simple, probablemente hubo mucho trabajo detras.
            </p>
            <p className='mt-4'>
              <span className='text-green-400'>$</span> scroll --continue
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className='ml-1 inline-block h-4 w-2 translate-y-0.5 bg-green-400'
              />
            </p>
          </div>
        </DesktopWindow>

        <DesktopWindow
          title='note.md'
          isDraggable={isDesktop}
          className='md:right-8 md:top-[16%] md:w-[280px]'
        >
          <div className='p-4 font-mono text-sm leading-6 text-white/70'>
            <p className='text-purple-300'># reminder</p>
            <p className='mt-2'>menos ruido, mas intencion.</p>
            <p className='mt-3 text-white/45'>pixel-perfect mode: on</p>
          </div>
        </DesktopWindow>

        <DesktopWindow
          title='focus.json'
          isDraggable={isDesktop}
          className='md:bottom-[14%] md:left-[10%] md:w-[300px]'
        >
          <div className='p-4 font-mono text-sm leading-6 text-[#e5e5e5]'>
            <p>
              <span className='text-green-300'>"status"</span>: {' '}
              <span className='text-yellow-300'>"building"</span>,
            </p>
            <p>
              <span className='text-green-300'>"mood"</span>: {' '}
              <span className='text-yellow-300'>"curious"</span>,
            </p>
            <p>
              <span className='text-green-300'>"details"</span>: {' '}
              <span className='text-orange-300'>true</span>
            </p>
          </div>
        </DesktopWindow>

        <DesktopWindow
          title='system'
          isDraggable={isDesktop}
          className='md:bottom-[18%] md:right-[12%] md:w-[260px]'
        >
          <div className='space-y-3 p-4 font-mono text-xs text-white/60'>
            <div>
              <div className='mb-1 flex justify-between'>
                <span>creativity</span>
                <span>92%</span>
              </div>
              <div className='h-1.5 rounded-full bg-white/10'>
                <div className='h-full w-[92%] rounded-full bg-purple-400/70' />
              </div>
            </div>
            <div>
              <div className='mb-1 flex justify-between'>
                <span>patience</span>
                <span>100%</span>
              </div>
              <div className='h-1.5 rounded-full bg-white/10'>
                <div className='h-full w-full rounded-full bg-blue-400/70' />
              </div>
            </div>
          </div>
        </DesktopWindow>
      </div>
    </section>
  );
}
