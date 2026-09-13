export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='border-t border-line px-6 py-6 md:px-8'>
      <p className='mx-auto max-w-5xl text-center text-xs leading-6 text-ink-muted'>
        © <span className='tabular-nums'>{year}</span> Luca Valentin Vitorino
      </p>
    </footer>
  );
}
