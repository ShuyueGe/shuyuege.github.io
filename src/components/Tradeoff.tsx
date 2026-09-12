import { useId } from "react";
import "./Tradeoff.css";

// Supply approved copy when placing this annotation within a decision section.
export function Tradeoff({ text }: { text: string }) {
  const headingId = useId();
  return <aside className="case-tradeoff" aria-labelledby={headingId}>
    <h3 className="case-tradeoff__title" id={headingId}>Tradeoff</h3>
    <p className="case-tradeoff__copy">{text}</p>
  </aside>;
}
