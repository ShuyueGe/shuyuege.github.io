import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

const sectionLinks = [
  { label: "About Me", id: "about" },
  { label: "Projects", id: "projects" },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    navigate(`/?section=${sectionId}`, { replace: true });
  };

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Logo />
        <nav className="site-nav" aria-label="Primary navigation">
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              className="site-nav__link"
              to={`/?section=${link.id}`}
              onClick={(event) => handleSectionClick(event, link.id)}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="site-nav__link"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

