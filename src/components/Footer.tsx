interface FooterLink {
  label: string;
  icon: string;
  href: string;
  external?: boolean;
}

const footerLinks: FooterLink[] = [
  {
    label: "Email",
    icon: "@",
    href: "mailto:abc@gmail.com",
  },
  {
    label: "Resume",
    icon: "CV",
    href: `${import.meta.env.BASE_URL}resume.pdf`,
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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__identity">
          <h2 className="site-footer__title">Let&apos;s Connect</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
            😀
          </p>
          <a className="site-footer__email" href="mailto:abc@gmail.com">
            abc@gmail.com
          </a>
        </div>
        <nav aria-label="Footer links">
          {footerLinks.map((link) => (
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
          ))}
        </nav>
      </div>
    </footer>
  );
}
