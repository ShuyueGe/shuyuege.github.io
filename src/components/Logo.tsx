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
          d="M11.5 30.5C11.8 24.4 15.2 21.7 21.6 19.7C29 17.5 35.7 15.8 40.8 11.8C46.2 7.6 51 7.2 54.6 10.5C61.2 16.7 62 27.2 59.7 36.2C57.4 45.9 52.4 54.5 43.5 58.4C34.4 62.4 24.5 59.5 18.1 53.5C12.4 48.1 9.4 38.7 11.5 30.5Z"
        />
      </svg>
      <span className="logo__name">Shuyue Ge</span>
    </Link>
  );
}
