import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileActions } from "./MobileActions";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main id="main" style={{ minHeight: "70vh" }}>
        {children}
      </main>
      <Footer />
      <MobileActions />
    </>
  );
}
