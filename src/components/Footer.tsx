import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Footer() {
  return <footer className="site-footer">
    <div className="page-shell site-footer__inner">
      <div className="site-footer__identity">
        <h2 className="site-footer__title">Let&apos;s Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 😀</p>
        {profile.email && <a className="site-footer__email" href={`mailto:${profile.email}`}>{profile.email}</a>}
      </div>
      <nav aria-label="Footer links">
        <Link to="/about">About Me <span aria-hidden="true">↗</span></Link>
        {profile.email && <a href={`mailto:${profile.email}`}>Email</a>}
        {profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>}
        {profile.linkedIn && <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </footer>;
}
