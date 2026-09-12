import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectShowcase() {
  const otherProjects = projects.filter(project => !["ngo-website-redesign", "restaurant-website-redesign"].includes(project.slug));
  return <section className="selected-work page-shell" id="projects" aria-labelledby="work-title">
    <div className="selected-work__heading"><h2 id="work-title">Recent Work</h2></div>
    <div className="selected-work__features">
      <article className="work-feature work-feature--bookthing">
        <Link className="work-feature__link" to="/projects/ngo-website-redesign">
          <div className="work-feature__copy">
            <p className="work-feature__category">information architecture · UI &amp; UX · visual design · solo work</p>
            <h3>NGO Website redesign <span aria-hidden="true">↗</span></h3>
          </div>
          <div className="work-feature__media work-feature__calendar">
            <div className="work-feature__screen"><img src="/images/projects/bookthing/bookthing-final-calendar-page.png" alt="BookThing Calendar concept pairing a monthly schedule with opening and event details" width="3840" height="2496" fetchPriority="high" /></div>
          </div>
          <p className="work-feature__description">The BookThing of Baltimore</p>
        </Link>
      </article>
      <article className="work-feature work-feature--patsy">
        <Link className="work-feature__link" to="/projects/restaurant-website-redesign">
          <div className="work-feature__copy">
            <p className="work-feature__category">Figma · Miro · Google Forms</p>
            <h3>Restaurant Website Redesign <span aria-hidden="true">↗</span></h3>
          </div>
          <div className="work-feature__media work-feature__phones">
            <div><img src="/images/projects/patsy/after-Menu%202.png" alt="Patsy’s revised team menu with ordering cues" width="804" height="1758" /></div>
            <div><img src="/images/projects/patsy/after-Landing%20Page.png" alt="Patsy’s team mobile concept with reservation, menu, and pickup entry points" width="804" height="1758" /></div>
          </div>
          <p className="work-feature__description"></p>
        </Link>
      </article>
    </div>
    <div className="work-index">
      <h2>More projects</h2>
      {otherProjects.map(project => <Link className="work-index__entry" key={project.slug} to={`/projects/${project.slug}`}>
        <h3>{project.title}</h3><span>{project.tools.join(" · ")}</span><span aria-hidden="true">↗</span>
      </Link>)}
    </div>
  </section>;
}
