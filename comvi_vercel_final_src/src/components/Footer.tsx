import { Link } from "react-router-dom";
import { SITE } from "../app/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerGrid">
          <div className="stack">
            <div className="row">
              <div style={{ width: 44, height: 44 }}>
                <Logo />
              </div>
              <div>
                <div style={{ fontWeight: 900 }}>{SITE.name}</div>
                <div className="small">{SITE.baseline}</div>
              </div>
            </div>
            <p className="small" style={{ margin: 0 }}>
              Vidéo et visibilité locale pour commerces, indépendants et PME à {SITE.city}.
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <a className="btn" href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>

          <div className="stack">
            <div style={{ fontWeight: 900 }}>Pages</div>
            <Link to="/services" className="small">Services</Link>
            <Link to="/realisations" className="small">Réalisations</Link>
            <Link to="/tarifs" className="small">Tarifs</Link>
            <Link to="/a-propos" className="small">À propos</Link>
            <Link to="/devis" className="small">Devis</Link>
          </div>

          <div className="stack">
            <div style={{ fontWeight: 900 }}>Coordonnées</div>
            <a className="small" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a className="small" href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
            <a
              className="small"
              href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent("Bonjour COMVI, je souhaite un devis. Mon activité : ...")}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <div className="small">{SITE.area}</div>
          </div>

          <div className="stack">
            <div style={{ fontWeight: 900 }}>Légal</div>
            <Link to="/mentions-legales" className="small">Mentions légales</Link>
            <Link to="/confidentialite" className="small">Politique de confidentialité</Link>
            <Link to="/cgv" className="small">CGV</Link>
          </div>
        </div>

        <div className="divider" style={{ margin: "20px 0" }} />

        <div className="small" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} COMVI — Tous droits réservés</span>
          <span>Fait à {SITE.city}</span>
        </div>
      </div>
    </footer>
  );
}
