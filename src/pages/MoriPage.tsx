import { Fragment, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { moriCopy as copy } from "../data/moriCopy";
import "./MoriPage.css";

function moriMediaUrl(file: string) {
  return `${import.meta.env.BASE_URL}images/projects/mori/${encodeURIComponent(file)}`;
}

function MoriScreen({ file, alt, width = 1179, height = 2556 }: {
  file: string; alt: string; width?: number; height?: number;
}) {
  const src = moriMediaUrl(file);
  return <a className="mori-screen" href={src} target="_blank" rel="noopener noreferrer"
    aria-label={`View full-size image: ${alt} (new tab)`}>
    <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
  </a>;
}

function MoriDuskVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const restartTimer = useRef<number | null>(null);

  const clearRestart = () => {
    if (restartTimer.current !== null) window.clearTimeout(restartTimer.current);
    restartTimer.current = null;
  };
  const replay = () => {
    clearRestart();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  };
  const holdLastFrame = () => {
    clearRestart();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      restartTimer.current = window.setTimeout(replay, 5000);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      clearRestart();
      video.autoplay = !preference.matches;
      if (preference.matches) video.pause();
      else void video.play().catch(() => {});
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => {
      clearRestart();
      preference.removeEventListener("change", updatePlayback);
    };
  }, []);

  return <div className="mori-video">
    <video ref={videoRef} width={1180} height={2556} controls muted playsInline preload="metadata"
      onEnded={holdLastFrame} onPlay={clearRestart} onSeeking={clearRestart}
      aria-label="MORI interface and atmosphere at dusk">
      <source src={moriMediaUrl("黄昏-hero-web.mp4")} type="video/mp4" />
    </video>
    <button className="mori-video__replay" type="button" onClick={replay}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M3 10a9 9 0 1 1 .9 6" /><path d="M3 4v6h6" />
      </svg>
      Replay
    </button>
  </div>;
}

function LabeledLine({ text }: { text: string }) {
  const separator = text.indexOf(" — ");
  return <><strong>{text.slice(0, separator)}</strong>{" — "}{text.slice(separator + 3)}</>;
}

function ReturnPatterns({ patterns, resolved = false }: { patterns: readonly string[]; resolved?: boolean }) {
  return <div className={"mori-patterns" + (resolved ? " mori-patterns--resolved" : "")}>
    {patterns.map(text => {
      const separator = text.indexOf(" — ");
      return <p data-copy key={text}><strong>{text.slice(0, separator)}{" — "}</strong><span>{text.slice(separator + 3)}</span></p>;
    })}
  </div>;
}

function TaskFlow({ text, resolved = false }: { text: string; resolved?: boolean }) {
  const steps = text.split(" → ");
  const style = { "--mori-flow-joins": steps.length - 1 } as CSSProperties;
  return <p data-copy className={"mori-flow" + (resolved ? " mori-flow--resolved" : "")} style={style}>
    {steps.map((step, index) => <Fragment key={index + "-" + step}>
      <span className="mori-flow__step" style={{ "--mori-flow-row": index + 1 } as CSSProperties}>{step}</span>
      {index < steps.length - 1 && <span className="mori-flow__arrow" style={{ "--mori-flow-row": index + 1 } as CSSProperties}>{" → "}</span>}
    </Fragment>)}
  </p>;
}

// Public copy follows the user's locked replacement in mori-final.md.
// Native diagrams express the supplied rules; they are not product screenshots.
export function MoriPage() {
  useEffect(() => { document.title = "MORI | Shuyue Ge"; }, []);

  const observation = copy.health.body[1];
  const highlighted = "3 of 5 participants tried clicking a data heading to record information";
  const observationParts = observation.split(highlighted);

  return <Layout className="mori-page">
    <article className="mori-case page-shell" aria-labelledby="mori-title">
      <div className="mori-back">
        <Link className="back-link" to="/?section=projects"><span aria-hidden="true">←</span> Back to projects</Link>
      </div>

      <section className="mori-hero" aria-labelledby="mori-title" data-copy-section="S01">
        <p data-copy className="mori-eyebrow">{copy.hero.eyebrow}</p>
        <h1 data-copy id="mori-title">{copy.hero.title}</h1>
        <div className="mori-hero__body">
          <div className="mori-hero__intro">
            <p data-copy className="mori-deck">{copy.hero.body[0]}</p>
            <p data-copy className="mori-prose">{copy.hero.body[1]}</p>
          </div>
          <dl className="mori-metadata">
            {copy.hero.metadata.map(item => <div key={item.label}>
              <dt data-copy>{item.label}</dt><dd data-copy>{item.value}</dd>
            </div>)}
          </dl>
        </div>
      </section>

      <section className="mori-diagnosis mori-section" aria-labelledby="mori-diagnosis" data-copy-section="S02">
        <div className="mori-diagnosis__copy">
          <div className="mori-diagnosis__intro">
            <h2 data-copy id="mori-diagnosis">{copy.diagnosis.title}</h2>
            <p data-copy className="mori-prose">{copy.diagnosis.body}</p>
            <p data-copy className="mori-prose">{copy.diagnosis.prompt}</p>
          </div>
          <div className="mori-questions">
            {copy.diagnosis.questions.map(text => <p data-copy key={text}><LabeledLine text={text} /></p>)}
          </div>
        </div>
        <MoriDuskVideo />
      </section>

      <section className="mori-navigation mori-section" aria-labelledby="mori-navigation" data-copy-section="S03">
        <header className="mori-heading">
          <p data-copy className="mori-eyebrow">{copy.navigation.eyebrow}</p>
          <h2 data-copy id="mori-navigation">{copy.navigation.title}</h2>
          <p data-copy className="mori-prose">{copy.navigation.body}</p>
        </header>
        <div className="mori-proposal">
          <div className="mori-proposal__direction">
            <h3 data-copy>{copy.navigation.initial.heading}</h3>
            <p data-copy>{copy.navigation.initial.intro}</p>
            <ReturnPatterns patterns={copy.navigation.initial.patterns} />
            <p data-copy className="mori-prose">{copy.navigation.initial.body}</p>
          </div>
          <aside className="mori-constraint">
            <h3 data-copy>{copy.navigation.constraint.heading}</h3>
            <p data-copy className="mori-prose">{copy.navigation.constraint.body}</p>
          </aside>
        </div>
        <div className="mori-tradeoff">
          <h3 data-copy>{copy.navigation.tradeoff.heading}</h3>
          <p data-copy className="mori-prose">{copy.navigation.tradeoff.intro}</p>
          <ReturnPatterns patterns={copy.navigation.tradeoff.patterns} resolved />
          <div className="mori-tradeoff__reasoning">
            {copy.navigation.tradeoff.body.map(text => <p data-copy className="mori-prose" key={text}>{text}</p>)}
          </div>
        </div>
      </section>

      <section className="mori-modes mori-section" aria-labelledby="mori-modes" data-copy-section="S04">
        <header className="mori-heading">
          <p data-copy className="mori-eyebrow">{copy.modes.eyebrow}</p>
          <h2 data-copy id="mori-modes">{copy.modes.title}</h2>
          <p data-copy className="mori-prose">{copy.modes.body}</p>
        </header>
        <div className="mori-mode-roles">
          {copy.modes.roles.map(role => <div key={role.heading}>
            <h3 data-copy>{role.heading}</h3>
            <p data-copy className="mori-prose">{role.body}</p>
          </div>)}
        </div>
        <p data-copy className="mori-prose mori-modes__observation">{copy.modes.observation}</p>
        <p data-copy className="mori-modes__key"><strong>{copy.modes.key}</strong></p>
        <p data-copy>{copy.modes.exploration}</p>
        <div className="mori-options">
          {copy.modes.options.map((option, index) => <div className={index === 2 ? "mori-options__chosen" : undefined} key={option.heading}>
            <h3 data-copy>{option.heading}</h3>
            <p data-copy>{index === 2 ? <strong>{option.body}</strong> : option.body}</p>
          </div>)}
        </div>
        <div className="mori-modes__resolution">
          <p data-copy className="mori-prose">{copy.modes.solution}</p>
          <p data-copy className="mori-key"><strong>{copy.modes.conclusion}</strong></p>
        </div>
        <div className="mori-media-pair" aria-label="Final conversational mode interfaces">
          <MoriScreen file="新-聊天-黄昏.png" alt="Revised Heart Companion conversation at dusk, with an open-ended chat and Tell Mori input." />
          <MoriScreen file="新-记录-黄昏.png" alt="Revised Health Guardian interface at dusk, with a structured supplement record, confirmation, and Start today's log input." />
        </div>
      </section>

      <section className="mori-health mori-section" aria-labelledby="mori-health" data-copy-section="S05">
        <header className="mori-heading">
          <p data-copy className="mori-eyebrow">{copy.health.eyebrow}</p>
          <h2 data-copy id="mori-health">{copy.health.title}</h2>
        </header>
        <div className="mori-health__observations">
          <p data-copy className="mori-prose">{copy.health.body[0]}</p>
          <p data-copy className="mori-prose mori-health__finding">{observationParts[0]}<strong>{highlighted}</strong>{observationParts[1]}</p>
        </div>
        <div className="mori-health__original">
          <h3 data-copy>{copy.health.originalHeading}</h3>
          <TaskFlow text={copy.health.originalFlow} />
        </div>
        <div className="mori-health__solution">
          <h3 data-copy>{copy.health.solutionHeading}</h3>
          <p data-copy className="mori-prose">{copy.health.solution}</p>
          <p data-copy className="mori-flow-label"><strong>{copy.health.newHeading}</strong></p>
          <TaskFlow text={copy.health.newFlow} resolved />
          <p data-copy className="mori-prose">{copy.health.result}</p>
        </div>
        <div className="mori-media-pair" aria-label="Original and revised health-recording interfaces">
          <figure className="mori-comparison">
            <figcaption>Before</figcaption>
            <MoriScreen file="旧-身心节律.png" width={724} height={1854} alt="Original Rhythm page, with health data cards above a separate set of recording controls." />
          </figure>
          <figure className="mori-comparison">
            <figcaption>After</figcaption>
            <MoriScreen file="新-身心节律.png" alt="Revised Rhythm page, with Record actions inside the health data cards and Today's Focus below." />
          </figure>
        </div>
      </section>

      <section className="mori-closing mori-section" aria-labelledby="mori-closing" data-copy-section="S06">
        <h2 data-copy id="mori-closing">{copy.outcome.heading}</h2>
        <div className="mori-closing__body">
          {copy.outcome.body.map(text => <p data-copy className="mori-prose" key={text}>{text}</p>)}
        </div>
        <p data-copy className="mori-closing__reflection"><strong>{copy.outcome.reflection}</strong></p>
      </section>
    </article>
  </Layout>;
}
