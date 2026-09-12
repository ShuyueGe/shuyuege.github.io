import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { Layout } from "../components/Layout";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { SelectedVisuals } from "../components/SelectedVisuals";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Shuyue Ge | UI/UX and Web Designer";
    const sectionId = new URLSearchParams(location.search).get("section");

    if (!sectionId) {
      return;
    }

    window.requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    });
  }, [location.search]);

  return (
    <Layout className="home-page">
      <AboutSection />
      <ProjectShowcase />
      <SelectedVisuals />
    </Layout>
  );
}
