import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SITE } from "../app/site";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/a-propos", label: "À propos" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="headerInner">
          <Link to="/" className="row" aria-label="Aller à l'accueil">
            <div style={{ width: 44, height: 44 }}>
              <Logo className="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <div style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>{SITE.name}</div>
              <div className="small">{SITE.baseline}</div>
            </div>
          </Link>

          <nav className="nav" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "rgba(255,255,255,0.82)"
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/devis" className="btn btnPrimary" aria-label="Demander un devis">
              Devis gratuit
            </Link>
          </nav>

          <button
            className="btn btnGhost menuBtn"
            style={{ padding: "10px 12px" }}
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="card" style={{ marginBottom: 12 }}>
            <div className="stack">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  style={({ isActive }) => ({
                    fontWeight: 800,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.82)"
                  })}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/devis" className="btn btnPrimary">
                Devis gratuit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
