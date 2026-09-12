import type { CSSProperties, ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Layout({
  children,
  className = "",
  style,
}: LayoutProps) {
  return (
    <div className={`site-layout ${className}`.trim()} style={style}>
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById("main-content")?.focus(); }}>Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
