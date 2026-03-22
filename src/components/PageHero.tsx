import Image from 'next/image';
import Container from './Container';

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
};

export default function PageHero({ title, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-[#0F1B2D] text-white py-20 md:py-28">
      {backgroundImage && (
        <>
          <Image src={backgroundImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/80" />
        </>
      )}
      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-[#4A9BD9] transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
