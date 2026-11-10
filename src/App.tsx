import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { siteVisibility } from "./data/siteVisibility";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

const MoriV2 = lazy(() => import("./preview/MoriV2").then(module => ({ default: module.MoriV2 })));
const PatsyV2 = lazy(() => import("./preview/PatsyV2").then(module => ({ default: module.PatsyV2 })));
const BookThingV2 = lazy(() => import("./preview/BookThingV2").then(module => ({ default: module.BookThingV2 })));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={siteVisibility.aboutPage ? <AboutPage /> : <Navigate to="/" replace />} />
        <Route path="/projects/ai-health-web-app-upgrade" element={<Suspense fallback={null}><MoriV2 /></Suspense>} />
        <Route path="/projects/restaurant-website-redesign" element={<Suspense fallback={null}><PatsyV2 /></Suspense>} />
        <Route path="/projects/ngo-website-redesign" element={<Suspense fallback={null}><BookThingV2 /></Suspense>} />
        <Route path="/projects/mori-v2" element={<LegacyCaseStudyRedirect to="/projects/ai-health-web-app-upgrade" />} />
        <Route path="/projects/patsy-v2" element={<LegacyCaseStudyRedirect to="/projects/restaurant-website-redesign" />} />
        <Route path="/projects/bookthing-v2" element={<LegacyCaseStudyRedirect to="/projects/ngo-website-redesign" />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function LegacyCaseStudyRedirect({ to }: { to: string }) {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: to, search, hash: hash.replace(/-v2-/g, "-") }} replace />;
}
