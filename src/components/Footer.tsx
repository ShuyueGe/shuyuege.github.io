import { profile } from "../data/profile";

export function Footer() {
  return <footer className="site-footer">
    <div className="page-shell site-footer__inner">
      <div className="site-footer__identity">
        <h2 className="site-footer__title">Let&apos;s Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 😀</p>
      </div>
      <nav aria-label="Footer links">
        {profile.email && <a href={`mailto:${profile.email}`}>
          <svg className="site-footer__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>Contact</span>
        </a>}
        {profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>}
        {profile.linkedIn && <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
          <svg className="site-footer__link-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.394V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.52 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169H6.25c.03.678 0 7.225 0 7.225h2.401z" />
          </svg>
          <span>LinkedIn</span>
        </a>}
      </nav>
    </div>
  </footer>;
}
