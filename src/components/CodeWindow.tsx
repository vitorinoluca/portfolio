import type { ReactNode } from 'react';

type CodeWindowProps = {
  title: string;
  children: ReactNode;
};

export default function CodeWindow({ title, children }: CodeWindowProps) {
  return (
    <article>
      <h3 className="mb-4 font-mono text-2xl text-white">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#1e1e1e] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 bg-[#2d2d2d] px-4 py-2">
          <span className="font-mono text-xs text-white/50">javascript</span>
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-sm leading-6 text-[#e5e5e5]">
          <code>{children}</code>
        </pre>
      </div>
    </article>
  );
}
