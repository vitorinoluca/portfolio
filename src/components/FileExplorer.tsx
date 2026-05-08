import { FileCode, Folder } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type ExplorerItem = {
  file: string;
  detail: string;
};

type ExplorerGroup = {
  folder: string;
  items: ExplorerItem[];
};

const explorerGroups: ExplorerGroup[] = [
  {
    folder: 'proyectos',
    items: [
      { file: 'ecommerce-platform.tsx', detail: 'React + Node.js + MongoDB' },
      { file: 'task-manager.tsx', detail: 'Next.js + TypeScript + PostgreSQL' },
      {
        file: 'portfolio-generator.tsx',
        detail: 'React + TailwindCSS + Firebase',
      },
    ],
  },
  {
    folder: 'habilidades',
    items: [
      { file: 'frontend.json', detail: 'React, Next.js, TypeScript, Tailwind' },
      { file: 'backend.json', detail: 'Node.js, Express, PostgreSQL, MongoDB' },
      { file: 'tools.json', detail: 'Git, Docker, AWS, Vercel' },
    ],
  },
  {
    folder: 'contacto',
    items: [
      { file: 'email.txt', detail: 'tu@email.com' },
      { file: 'github.url', detail: 'github.com/tuusuario' },
      { file: 'linkedin.url', detail: 'linkedin.com/in/tuusuario' },
    ],
  },
];

export default function FileExplorer() {
  return (
    <article className='mt-20'>
      <div className='mb-6'>
        <h3 className='font-mono text-2xl text-white'>File Explorer</h3>
        <p className='mt-2 font-mono text-sm text-white/45'>
          // Haz clic para explorar
        </p>
      </div>

      <div className='overflow-hidden rounded-lg border border-white/10 bg-[#1e1e1e] shadow-2xl'>
        <div className='border-b border-white/5 bg-[#2d2d2d] px-4 py-3'>
          <p className='font-mono text-xs uppercase tracking-wide text-white/65'>
            Explorador
          </p>
        </div>

        <Accordion type='multiple' className='px-4 font-mono text-sm py-2'>
          {explorerGroups.map((group) => (
            <AccordionItem key={group.folder} value={group.folder}>
              <AccordionTrigger className='hover:no-underline'>
                <Folder className='h-4 w-4 shrink-0 text-blue-400' />
                <span className='text-white/85'>{group.folder}</span>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type='multiple' className='pl-6'>
                  {group.items.map((item) => (
                    <AccordionItem
                      key={item.file}
                      value={`${group.folder}/${item.file}`}
                    >
                      <AccordionTrigger className='[&>svg[data-slot=accordion-chevron]]:hidden hover:no-underline'>
                        <FileCode className='h-4 w-4 shrink-0 text-green-400' />
                        <span className='text-white/75'>{item.file}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className='pl-6'>
                          <div className='rounded bg-white/5 px-3 py-2 text-green-400'>
                            {item.detail}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  );
}
