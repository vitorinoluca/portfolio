import CodeWindow from './components/CodeWindow';
import FileExplorer from './components/FileExplorer';
import HeroDesktop from './components/HeroDesktop';
import MacNavbar from './components/MacNavbar';

export default function App() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-background text-foreground'>
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
      >
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem]' />
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background' />
      </div>

      <MacNavbar />

      <HeroDesktop />

      <section id='about' className='relative z-10 px-6 pb-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid gap-8 pt-32 md:grid-cols-2'>
            <CodeWindow title='developer.js'>
              <span className='text-white/30'>1 </span>
              <span className='text-purple-400'>const</span>
              <span> </span>
              <span className='text-blue-300'>developer</span>
              <span> = {'{'}</span>
              {'\n'}
              <span className='text-white/30'>2 </span>
              <span> </span>
              <span className='text-green-300'>nombre</span>
              <span>: </span>
              <span className='text-yellow-300'>"Tu Nombre"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>3 </span>
              <span> </span>
              <span className='text-green-300'>rol</span>
              <span>: </span>
              <span className='text-yellow-300'>"Full Stack Developer"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>4 </span>
              <span> </span>
              <span className='text-green-300'>años</span>
              <span>: </span>
              <span className='text-orange-300'>3</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>5 </span>
              <span> </span>
              <span className='text-green-300'>pasión</span>
              <span>: </span>
              <span className='text-yellow-300'>"Código limpio y UX"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>6 </span>
              <span> </span>
              <span className='text-green-300'>café</span>
              <span>: </span>
              <span className='text-orange-300'>true</span>
              {'\n'}
              <span className='text-white/30'>7 </span>
              <span>{'}'};</span>
            </CodeWindow>

            <CodeWindow title='projects.js'>
              <span className='text-white/30'>1 </span>
              <span className='text-purple-400'>async function</span>
              <span> </span>
              <span className='text-blue-300'>fetchProjects</span>
              <span>() {'{'}</span>
              {'\n'}
              <span className='text-white/30'>2 </span>
              <span> </span>
              <span className='text-purple-400'>return</span>
              <span> [</span>
              {'\n'}
              <span className='text-white/30'>3 </span>
              <span> {'{'}</span>
              {'\n'}
              <span className='text-white/30'>4 </span>
              <span> </span>
              <span className='text-green-300'>name</span>
              <span>: </span>
              <span className='text-yellow-300'>"E-Commerce"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>5 </span>
              <span> </span>
              <span className='text-green-300'>stack</span>
              <span>: [</span>
              <span className='text-yellow-300'>"React"</span>
              <span>, </span>
              <span className='text-yellow-300'>"Node"</span>
              <span>, </span>
              <span className='text-yellow-300'>"MongoDB"</span>
              <span>]</span>
              {'\n'}
              <span className='text-white/30'>6 </span>
              <span> {'}'},</span>
              {'\n'}
              <span className='text-white/30'>7 </span>
              <span> {'{'}</span>
              {'\n'}
              <span className='text-white/30'>8 </span>
              <span> </span>
              <span className='text-green-300'>name</span>
              <span>: </span>
              <span className='text-yellow-300'>"Task Manager"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>9 </span>
              <span> </span>
              <span className='text-green-300'>stack</span>
              <span>: [</span>
              <span className='text-yellow-300'>"Next.js"</span>
              <span>, </span>
              <span className='text-yellow-300'>"PostgreSQL"</span>
              <span>]</span>
              {'\n'}
              <span className='text-white/30'>10 </span>
              <span> {'}'}</span>
              {'\n'}
              <span className='text-white/30'>11 </span>
              <span> ];</span>
              {'\n'}
              <span className='text-white/30'>12 </span>
              <span>{'}'}</span>
            </CodeWindow>
          </div>
          <FileExplorer />
        </div>
      </section>
    </main>
  );
}
