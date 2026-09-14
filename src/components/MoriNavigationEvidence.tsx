/** Portfolio-level retrospective diagrams, not historical UI or hitbox maps. */
function TapMark() {
  return <span className="mori-tap-mark" aria-hidden="true"><span /></span>;
}

function RuleGlyph({ kind }: { kind: "tap" | "triangle" | "empty" | "swipe" }) {
  return <div className={`mori-rule-glyph mori-rule-glyph--${kind}`} aria-hidden="true">
    {kind === "swipe" ? <span className="mori-gesture-line" /> : kind === "triangle" ? <span className="mori-triangle-mark" /> : <TapMark />}
  </div>;
}

export function MoriOriginalRules() {
  return <figure className="mori-original-rules" data-schematic="original-rules">
    <p className="mori-version">Original interface · Retrospective schematic</p>
    <div className="mori-original-rules__items">
      {[
        { label: "Mori cloud", kind: "tap" as const },
        { label: "Downward triangle", kind: "triangle" as const },
        { label: "Empty space", kind: "empty" as const },
        { label: "Gestures", kind: "swipe" as const },
      ].map(({ label, kind }) => <div key={label}><RuleGlyph kind={kind} /><p>{label}</p></div>)}
    </div>
  </figure>;
}

export function MoriProposalEvidence() {
  return <figure className="mori-proposal__evidence">
    <p className="mori-version">Initial direction — not shipped</p>
    <p className="mori-schematic-note" data-diagram-label>Retrospective schematic</p>
    <div className="mori-proposal__paths" data-schematic="initial-proposal">
      <div><p className="mori-figure-label">Tap the Mori cloud</p><RuleGlyph kind="tap" /></div>
      <div className="mori-proposal__swipe"><p className="mori-figure-label">Swipe right</p><RuleGlyph kind="swipe" /></div>
    </div>
    <figcaption>The initial model paired a shared anchor with a gesture alternative.</figcaption>
  </figure>;
}

export function MoriShippedModel() {
  return <figure className="mori-return">
    <div className="mori-return__stage mori-stage">
      <div className="mori-return__heading">
        <p className="mori-version">Shipped implementation.</p>
        <p className="mori-schematic-note" data-diagram-label>Retrospective schematic</p>
      </div>
      <div className="mori-return__model" data-schematic="shipped-return-model">
        <div className="mori-return__paths">
          <div className="mori-return__path">
            <p className="mori-return__action"><strong>Primary</strong> — tap the Mori cloud</p>
            <TapMark />
          </div>
          <div className="mori-return__path">
            <p className="mori-return__action"><strong>Secondary</strong> — tap empty space</p>
            <TapMark />
          </div>
        </div>
        <div className="mori-return__convergence" aria-hidden="true" />
        <p className="mori-return__destination">Previous layer</p>
      </div>
    </div>
    <figcaption>Both shipped actions return to the previous layer.</figcaption>
  </figure>;
}
