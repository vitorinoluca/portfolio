import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Sobre mi', href: '#about' },
  { label: 'Estudios', href: '#studies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

function formatDateTime(date: Date) {
  const weekday = new Intl.DateTimeFormat('es-AR', { weekday: 'short' })
    .format(date)
    .replace('.', '');
  const day = new Intl.DateTimeFormat('es-AR', { day: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('es-AR', { month: 'short' })
    .format(date)
    .replace('.', '');
  const time = new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  return `${weekday} ${day} ${month} ${time}`;
}

export default function MacNavbar() {
  const [dateTime, setDateTime] = useState(() => formatDateTime(new Date()));
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(
    () => ['hero', ...navItems.map((item) => item.href.replace('#', ''))],
    [],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 1000 * 30);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];

      for (const section of sections) {
        const node = document.getElementById(section);
        if (!node) continue;

        const top = node.offsetTop;
        const bottom = top + node.offsetHeight;

        if (marker >= top && marker < bottom) {
          current = section;
          break;
        }

        if (marker >= top) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sections]);

  const navigateTo = (href: string) => {
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
      return;
    }
    window.location.hash = href;
    setMenuOpen(false);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/70 text-white shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl'>
      <nav className='mx-auto flex h-12 max-w-7xl items-center justify-between px-4 text-[13px] sm:px-6'>
        <div className='flex min-w-0 items-center gap-5'>
          <button
            type='button'
            onClick={() => navigateTo('#hero')}
            className='font-mono font-semibold tracking-tight text-white transition-colors hover:text-cyan-200'
            aria-label='Ir al inicio'
          >
            &lt;dev/&gt;
          </button>

          <div className='hidden items-center gap-1 text-white/68 md:flex'>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  type='button'
                  onClick={() => navigateTo(item.href)}
                  className={`rounded-md px-2.5 py-1 transition-colors ${
                    isActive
                      ? 'bg-white/[0.09] text-white'
                      : 'hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className='flex items-center gap-3 text-white/78'>
          <button
            type='button'
            onClick={() => navigateTo('#contact')}
            className='hidden rounded-md border border-emerald-300/25 bg-emerald-400/[0.08] px-2.5 py-1 font-mono text-[11px] text-emerald-200 transition-colors hover:bg-emerald-400/[0.12] md:inline-flex'
          >
            Disponible
          </button>
          <time className='tabular-nums text-white/85' dateTime={new Date().toISOString()}>
            {dateTime}
          </time>
          <button
            type='button'
            onClick={() => setMenuOpen((prev) => !prev)}
            className='inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-white md:hidden'
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
          >
            {menuOpen ? (
              <X className='h-4 w-4' aria-hidden='true' />
            ) : (
              <Menu className='h-4 w-4' aria-hidden='true' />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id='mobile-menu' className='border-t border-white/10 bg-[#08090b]/90 px-4 py-3 backdrop-blur-xl md:hidden'>
          <div className='mx-auto flex max-w-7xl flex-col gap-2'>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  type='button'
                  onClick={() => navigateTo(item.href)}
                  className={`rounded-md px-3 py-2 text-left font-mono ${
                    isActive
                      ? 'bg-white/[0.09] text-white'
                      : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
