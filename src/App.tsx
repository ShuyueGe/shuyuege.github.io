import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
