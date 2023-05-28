import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>T4SG Starter Project</h1>
      {children}
    </>
  );
}
