import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found | Shuyue Ge";
  }, []);

  return (
    <>
      <Navbar />
      <main className="not-found page-shell">
        <p className="section-label">Page not found</p>
        <h1>This page has wandered outside the project map.</h1>
        <p>The portfolio is still here, and the selected work is one step away.</p>
        <Link className="primary-link" to="/?section=projects">
          Return to projects
        </Link>
      </main>
    </>
  );
}
