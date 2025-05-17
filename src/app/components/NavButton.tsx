'use client';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export default function NavButton({ href, children, className }: NavButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      const headerOffset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
} 