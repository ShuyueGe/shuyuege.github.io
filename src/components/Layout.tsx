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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
