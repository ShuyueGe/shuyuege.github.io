import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Shuyue Ge, home">
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__name">Shuyue Ge</span>
    </Link>
  );
}
