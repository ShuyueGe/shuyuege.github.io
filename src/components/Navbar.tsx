import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { profile } from "../data/profile";

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
      ?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
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
          {profile.resume ? <a
            className="site-nav__link"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a> : <span className="site-nav__link site-nav__link--unavailable" aria-disabled="true" title="Résumé not yet available">Resume</span>}
        </nav>
      </div>
    </header>
  );
}
