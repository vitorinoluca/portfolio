import CodeWindow from './components/CodeWindow';
import ContactTerminal from './components/ContactTerminal';
import StudiesLog from './components/ExperienceLog';
import FileExplorer from './components/FileExplorer';
import Footer from './components/Footer';
import HeroDesktop from './components/HeroDesktop';
import MacNavbar from './components/MacNavbar';

export default function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden bg-transparent text-foreground'>
      <MacNavbar />

      <HeroDesktop />

      <section id='about' className='relative z-10 px-6 py-24 md:py-32'>
        <div className='max-w-7xl mx-auto'>
          <header className='mb-8 max-w-3xl'>
            <p className='section-kicker mb-3'>~/profile</p>
            <h2 className='text-3xl font-semibold tracking-normal text-white md:text-4xl'>Sobre mi</h2>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-white/56 md:text-base'>
              Perfil tecnico, forma de trabajo y objetivos profesionales.
            </p>
          </header>
          <div className='grid gap-8 md:grid-cols-2'>
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
              <span className='text-yellow-300'>"Luca Vitorino"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>3 </span>
              <span> </span>
              <span className='text-green-300'>rol</span>
              <span>: </span>
              <span className='text-yellow-300'>"Fullstack Developer"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>4 </span>
              <span> </span>
              <span className='text-green-300'>situacion</span>
              <span>: </span>
              <span className='text-yellow-300'>"Estudiante de sistemas, 21 años"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>5 </span>
              <span> </span>
              <span className='text-green-300'>ubicacion</span>
              <span>: </span>
              <span className='text-yellow-300'>"La Plata, Argentina"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>6 </span>
              <span> </span>
              <span className='text-green-300'>foco</span>
              <span>: </span>
              <span className='text-yellow-300'>
                "frontend claro, backend ordenado y productos mantenibles"
              </span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>7 </span>
              <span> </span>
              <span className='text-green-300'>buscando</span>
              <span>: </span>
              <span className='text-yellow-300'>
                "primeras oportunidades IT y proyectos freelance"
              </span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>8 </span>
              <span> </span>
              <span className='text-green-300'>disponible</span>
              <span>: </span>
              <span className='text-orange-300'>true</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>9 </span>
              <span>{'}'};</span>
            </CodeWindow>

            <CodeWindow title='workflow.js'>
              <span className='text-white/30'>1 </span>
              <span className='text-purple-400'>const</span>
              <span> </span>
              <span className='text-blue-300'>workflow</span>
              <span> = [</span>
              {'\n'}
              <span className='text-white/30'>2 </span>
              <span> </span>
              <span className='text-yellow-300'>"entender el problema"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>3 </span>
              <span> </span>
              <span className='text-yellow-300'>"diseñar una interfaz usable"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>4 </span>
              <span> </span>
              <span className='text-yellow-300'>"modelar datos y endpoints"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>5 </span>
              <span> </span>
              <span className='text-yellow-300'>"iterar con feedback"</span>
              <span>,</span>
              {'\n'}
              <span className='text-white/30'>6 </span>
              <span> ];</span>
              {'\n\n'}
              <span className='text-white/30'>8 </span>
              <span className='text-purple-400'>export</span>
              <span> </span>
              <span className='text-purple-400'>default</span>
              <span> workflow;</span>
            </CodeWindow>
          </div>
        </div>
      </section>

      <section id='studies' className='relative z-10 px-6 py-24 md:py-28'>
        <div className='max-w-7xl mx-auto'>
          <StudiesLog />
        </div>
      </section>

      <section id='projects' className='relative z-10 px-6 py-24 md:py-32'>
        <div className='max-w-7xl mx-auto'>
          <FileExplorer />
        </div>
      </section>

      <section id='contact' className='relative z-10 px-6 py-24 md:py-32'>
        <div className='mx-auto max-w-3xl'>
          <ContactTerminal />
        </div>
      </section>

      <Footer />
    </main>
  );
}
