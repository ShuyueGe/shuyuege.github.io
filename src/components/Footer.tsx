interface FooterProps {
  variant?: "default" | "home";
}

interface FooterLink {
  label: string;
  icon: string;
  href: string;
  external?: boolean;
}

const homeLinks: FooterLink[] = [
  {
    label: "Email",
    icon: "@",
    href: "mailto:abc@gmail.com",
  },
  {
    label: "Resume",
    icon: "CV",
    href: "/resume.pdf",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: "https://www.linkedin.com/",
    external: true,
  },
  {
    label: "GitHub",
    icon: "GH",
    href: "https://github.com/ShuyueGe",
    external: true,
  },
];

export function Footer({ variant = "default" }: FooterProps) {
  const isHome = variant === "home";

  return (
    <footer
      className={`site-footer ${isHome ? "site-footer--home" : ""}`.trim()}
    >
      <div className="page-shell site-footer__inner">
        <div className="site-footer__identity">
          <strong className="site-footer__name">Shuyue Ge</strong>
          <p>Designed and built with care.</p>
        </div>
        <nav aria-label="Social links">
          {isHome ? (
            homeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <span className="site-footer__icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))
          ) : (
            <>
              <a href="mailto:hello@example.com">Email</a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ShuyueGe"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </nav>
      </div>
    </footer>
  );
}
