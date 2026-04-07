
import type { ReactNode } from "react";

interface WorldLayoutProps {
  worldName: string;
  children: ReactNode;
}

const WorldLayout = ({ worldName, children }: WorldLayoutProps) => {


  return (
    <div className="min-h-screen grid-bg">
      <header className="border-b border-border px-6 py-4 flex items-center gap-6">

        <div className="w-px h-5 bg-border" />
        <span className="text-foreground font-heading font-semibold text-sm tracking-wide">{worldName}</span>

      </header>
      <main className="max-w-2xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
};

export default WorldLayout;
