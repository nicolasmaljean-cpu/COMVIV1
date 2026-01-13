import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
import Devis from "./pages/Devis";
import Realisations from "./pages/Realisations";
import LegalMentions from "./pages/LegalMentions";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalCGV from "./pages/LegalCGV";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/confidentialite" element={<LegalPrivacy />} />
          <Route path="/cgv" element={<LegalCGV />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}
