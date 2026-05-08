import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const commands = [
    { command: 'whoami', output: 'Desarrollador Web Full Stack' },
    {
      command: 'ls skills/',
      output: 'React.js  TypeScript  Node.js  TailwindCSS  Next.js  MongoDB',
    },
    {
      command: 'cat experience.txt',
      output: '3+ años construyendo aplicaciones web modernas y escalables',
    },
    {
      command: 'echo $PASSION',
      output: 'Crear experiencias digitales excepcionales 🚀',
    },
  ];

  useEffect(() => {
    if (currentLine >= commands.length) {
      setTimeout(() => {
        setCurrentLine(0);
        setDisplayedText('');
      }, 3000);
      return;
    }

    const command = commands[currentLine];
    const fullText = `$ ${command.command}\n${command.output}`;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setDisplayedText('');
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div className='bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-white/10'>
        {/* Terminal Header */}
        <div className='bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-white/5'>
          <div className='flex gap-2'>
            <div className='w-3 h-3 rounded-full bg-[#ff5f56]' />
            <div className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
            <div className='w-3 h-3 rounded-full bg-[#27c93f]' />
          </div>
          <div className='flex-1 text-center text-sm text-white/60'>
            bash -- 80x24
          </div>
        </div>

        {/* Terminal Body */}
        <div className='p-6 font-mono text-sm h-[300px] overflow-hidden'>
          <div className='text-green-400'>
            {commands.slice(0, currentLine).map((cmd, i) => (
              <div key={i} className='mb-4'>
                <div className='text-white/80'>$ {cmd.command}</div>
                <div className='text-green-400 mt-1'>{cmd.output}</div>
              </div>
            ))}
            <div className='whitespace-pre-wrap'>
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className='inline-block w-2 h-4 bg-green-400 ml-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
