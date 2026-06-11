import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { Layout } from "../components/Layout";
import { ProjectShowcase } from "../components/ProjectShowcase";

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
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.search]);

  return (
    <Layout className="home-page">
      <AboutSection />
      <ProjectShowcase />
    </Layout>
  );
}
