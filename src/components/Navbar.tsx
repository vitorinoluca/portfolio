import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Fluxify', href: '#fluxify' },
  { label: 'Formacion', href: '#studies' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Recorrido', href: '#timeline' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(
    () => ['hero', ...navItems.map((item) => item.href.replace('#', ''))],
    [],
  );

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
    <header className='fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 text-ink backdrop-blur-md'>
      <nav className='mx-auto flex h-14 max-w-5xl items-center justify-between px-6 text-sm md:px-8'>
        <button
          type='button'
          onClick={() => navigateTo('#hero')}
          className='font-display text-base font-bold tracking-tight text-ink transition-colors hover:text-stamp'
          aria-label='Ir al inicio'
        >
          LV
        </button>

        <div className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <button
                key={item.href}
                type='button'
                onClick={() => navigateTo(item.href)}
                className={`pressable transition-colors ${
                  isActive ? 'font-semibold text-ink' : 'font-medium text-ink/60 hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          type='button'
          onClick={() => setMenuOpen((prev) => !prev)}
          className='pressable inline-flex h-9 w-9 items-center justify-center border border-line text-ink md:hidden'
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
      </nav>

      {menuOpen && (
        <div id='mobile-menu' className='border-t border-line bg-paper px-6 py-3 md:hidden'>
          <div className='flex flex-col gap-1'>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  type='button'
                  onClick={() => navigateTo(item.href)}
                  className={`py-2 text-left font-medium ${isActive ? 'text-stamp' : 'text-ink/75'}`}
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
