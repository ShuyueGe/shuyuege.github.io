import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Shuyue Ge, home">
      <svg
        className="logo__mark"
        viewBox="0 0 72 64"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="logo__mark-shape"
          d="M6.5 31.5C6.5 23 11.5 17.5 22.5 14.5C34 11.5 40.5 5.5 50 7C61.5 8.5 67.5 20 67 32C66.5 45 59 54.5 47 58C34 61.5 20.5 57.5 13 49.5C8.5 44.5 5.5 37.5 6.5 31.5Z"
        />
      </svg>
      <span className="logo__name">Shuyue Ge</span>
    </Link>
  );
}
