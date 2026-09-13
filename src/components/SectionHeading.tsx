type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className='mb-8 max-w-2xl'>
      <h2 className='font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-3 max-w-xl text-base leading-7 text-ink-muted'>{description}</p>
      )}
    </header>
  );
}
