import Contact from './components/Contact';
import Education from './components/Education';
import Fluxify from './components/Fluxify';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden text-ink'>
      <Navbar />

      <Hero />

      <section id='projects' className='px-6 pt-8 pb-14 md:px-8 md:pt-10 md:pb-16'>
        <div className='mx-auto max-w-5xl'>
          <Projects />
        </div>
      </section>

      <section id='fluxify' className='border-t border-ink/10 px-6 py-14 md:px-8 md:py-16'>
        <div className='mx-auto max-w-5xl'>
          <Fluxify />
        </div>
      </section>

      <section id='studies' className='border-t border-ink/10 px-6 py-14 md:px-8 md:py-16'>
        <div className='mx-auto max-w-5xl'>
          <Education />
        </div>
      </section>

      <section id='contact' className='border-t border-ink/10 px-6 py-14 md:px-8 md:py-16'>
        <div className='mx-auto max-w-5xl'>
          <Contact />
        </div>
      </section>

      <section id='timeline' className='border-t border-ink/10 px-6 pt-20 pb-14 md:px-8 md:pt-24 md:pb-16'>
        <div className='mx-auto max-w-5xl'>
          <Timeline />
        </div>
      </section>

      <Footer />
    </main>
  );
}
