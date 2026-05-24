export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='relative z-10 border-t border-white/[0.08] bg-[#030405] px-6 py-6 shadow-[0_-24px_80px_rgba(0,0,0,0.42)]'>
      <p className='mx-auto max-w-7xl text-center font-mono text-xs leading-6 text-white/[0.42]'>
        Copyright <span className='tabular-nums'>{year}</span> - disenado y desarrollado por{' '}
        <span className='text-white/70'>Luca Valentin Vitorino</span> - React + TypeScript + Tailwind
      </p>
    </footer>
  );
}
