import { Battery, Search, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Sobre mí', href: '#about' },
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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 1000 * 30);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 text-white shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[13px] sm:px-6">
        <div className="flex min-w-0 items-center gap-5">
          <a
            href="#about"
            className="font-mono font-semibold tracking-tight text-white"
            aria-label="Ir al inicio"
          >
            &lt;dev/&gt;
          </a>

          <div className="hidden items-center gap-4 text-white/75 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-white/80">
          <Search className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
          <Wifi className="h-3.5 w-3.5" aria-hidden="true" />
          <Battery className="h-4 w-4" aria-hidden="true" />
          <time className="tabular-nums text-white/85" dateTime={new Date().toISOString()}>
            {dateTime}
          </time>
        </div>
      </nav>
    </header>
  );
}
