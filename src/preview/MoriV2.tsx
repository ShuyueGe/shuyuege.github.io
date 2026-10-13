import { useEffect, useRef } from "react";
import { assetUrl, EvidenceImage, PreviewMeta, PreviewShell, SectionHeading } from "./PreviewShared";
import { moriV2 as copy, moriV2Assets as assets } from "./content/moriV2";
import "./MoriV2.css";

function DuskVideo({ navigation = false }: { navigation?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.at(-1)?.isIntersecting) video.pause();
    });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);
  return <figure className={"mori-v2-dusk" + (navigation ? " mori-v2-return-video" : "")}>
    <video ref={videoRef} controls playsInline muted preload="metadata" width={1180} height={2556}
      aria-label={navigation ? copy.navigation.videoLabel : copy.heroAlt}
      onPlay={event => { event.currentTarget.closest(".preview-v2")?.querySelectorAll("video").forEach(video => { if (video !== event.currentTarget) video.pause(); }); }}>
      <source src={assetUrl(assets.heroVideo)} type="video/mp4" />
    </video>
    <figcaption>{navigation ? copy.navigation.videoCaption : copy.heroCaption}</figcaption>
  </figure>;
}
export function MoriV2() {
  return <PreviewShell project="mori" title="MORI" sections={copy.sections}>
    <header className="v2-hero mori-v2-hero">
      <div><p className="v2-label">{copy.eyebrow}</p><h1>{copy.title}</h1>
        <p className="v2-lead">{copy.intro}</p><PreviewMeta items={copy.meta} />
        <p className="v2-prose mori-v2-overview">{copy.overview}</p></div>
      <DuskVideo />
    </header>
    <section className="v2-section mori-v2-navigation" aria-labelledby={copy.sections[0].id}>
      <SectionHeading id={copy.sections[0].id} kicker={copy.navigation.kicker} title={copy.navigation.title} />
      <div className="mori-v2-navigation-grid">
        <div>{copy.navigation.paragraphs.map(text => <p className="v2-prose" key={text}>{text}</p>)}
          <div className="mori-v2-rules">{copy.navigation.rules.map(rule => <div key={rule.label}>
            <span className="v2-label">{rule.label}</span><h3>{rule.action}</h3><p>{rule.explanation}</p>
          </div>)}</div>
        </div>
        <div className="mori-v2-return-evidence">
          <h3>{copy.navigation.videoLabel}</h3>
          <DuskVideo navigation />
        </div>
      </div>
      <p className="v2-note">{copy.navigation.tradeoff}</p>
    </section>
    <section className="v2-section mori-v2-health" aria-labelledby={copy.sections[1].id}>
      <SectionHeading id={copy.sections[1].id} kicker={copy.health.kicker} title={copy.health.title}>
        <p className="v2-prose mori-v2-finding">{copy.health.finding}</p>
        <p className="v2-prose">{copy.health.decision}</p>
      </SectionHeading>
      <div className="mori-v2-health-pair">
        <div><h3>{copy.health.beforeLabel}</h3>
          <EvidenceImage {...assets.healthBefore} alt={copy.health.beforeAlt}
            caption={copy.health.beforeCaption} />
          <p className="mori-v2-task-path">{copy.health.oldFlow}</p></div>
        <div><h3>{copy.health.afterLabel}</h3>
          <EvidenceImage {...assets.healthAfter} alt={copy.health.afterAlt}
            caption={copy.health.afterCaption} />
          <p className="mori-v2-task-path mori-v2-task-path--new">{copy.health.newFlow}</p>
          <p className="v2-note">{copy.health.flowNote}</p>
        </div>
      </div>
    </section>
    <section className="v2-section v2-section--support mori-v2-modes" aria-labelledby={copy.sections[2].id}>
      <SectionHeading id={copy.sections[2].id} kicker={copy.modes.kicker} title={copy.modes.title} />
      <div className="v2-two-col mori-v2-mode-prose"><p className="v2-prose">{copy.modes.body}</p><p className="v2-prose">{copy.modes.decision}</p></div>
      <div className="mori-v2-mode-pair">
        <div><h3>{copy.modes.companion.heading}</h3><EvidenceImage {...assets.companion}
          alt={copy.modes.companion.alt} caption={copy.modes.companion.caption}
          crop={{ ratio: "3 / 4", position: "bottom" }} /></div>
        <div><h3>{copy.modes.guardian.heading}</h3><EvidenceImage {...assets.guardian}
          alt={copy.modes.guardian.alt} caption={copy.modes.guardian.caption}
          crop={{ ratio: "3 / 4", position: "bottom" }} /></div>
      </div>
    </section>
    <section className="v2-ending" aria-labelledby={copy.sections[3].id}>
      <SectionHeading id={copy.sections[3].id} title={copy.ending.title} />
      <div className="v2-two-col"><p className="v2-prose">{copy.ending.body}</p><p className="v2-prose">{copy.ending.reflection}</p></div>
    </section>
  </PreviewShell>;
}
