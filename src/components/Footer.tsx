export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='relative z-10 border-t border-border px-6 py-6 md:px-10'>
      <p className='mx-auto max-w-6xl text-center text-xs leading-6 text-muted-foreground'>
        © <span className='tabular-nums'>{year}</span> Luca Valentin Vitorino — React + TypeScript
        + Tailwind
      </p>
    </footer>
  );
}
