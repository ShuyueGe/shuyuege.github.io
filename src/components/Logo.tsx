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
          d="M11.5 31.8C10.2 20.3 17.6 12.8 28.8 11.1C38.5 9.6 42.6 4.8 50.1 10.8C58.2 17.2 60.4 29.7 57.2 39.4C53.8 49.8 45.2 57 34.6 57.7C23.5 58.5 14.2 51.8 11.2 42.1C10.2 38.8 10.2 35.2 11.5 31.8Z"
        />
      </svg>
      <span className="logo__name">Shuyue Ge</span>
    </Link>
  );
}
