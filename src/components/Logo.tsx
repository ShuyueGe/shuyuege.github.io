import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Shuyue Ge, home">
      <svg
        className="logo__mark"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="logo__mark-shape"
          d="M10 31C10 24 13 20 20 18C28 15.5 35 14 40 9.5C44.5 5.5 49.5 5 53.2 8.1C59.5 13.3 61.5 23.5 60 33C58.5 43.5 53.5 52.5 45 57C36 61.8 25.5 60.5 18.5 54.5C12 48.8 9.2 39.1 10 31Z"
        />
      </svg>
      <span className="logo__name">Shuyue Ge</span>
    </Link>
  );
}
