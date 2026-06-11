import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") {
      return;
    }

    event.preventDefault();
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    navigate("/?section=projects", { replace: true });
  };

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <Logo />
        <nav className="site-nav" aria-label="Primary navigation">
          <Link className="site-nav__link" to="/about">
            About Me
          </Link>
          <Link
            className="site-nav__link"
            to="/?section=projects"
            onClick={handleProjectsClick}
          >
            Projects
          </Link>
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
