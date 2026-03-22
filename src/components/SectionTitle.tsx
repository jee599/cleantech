type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`w-12 h-0.5 bg-[#4A9BD9] mb-4 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
