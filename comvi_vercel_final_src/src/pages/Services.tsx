import { Link } from "react-router-dom";
import { SERVICES } from "../app/site";

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Services</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          Une offre claire, orientée résultats locaux.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16, marginTop: 18 }}>
          {SERVICES.map((s) => (
            <div key={s.id} className="card">
              <div style={{ fontWeight: 900, fontSize: 18 }}>{s.title}</div>
              <p className="small" style={{ marginTop: 8 }}>{s.description}</p>
              <ul className="small" style={{ margin: "10px 0 0 18px" }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: "30px 0" }} />

        <div className="card">
          <div className="cols2">
            <div>
              <div style={{ fontWeight: 900, fontSize: 20 }}>Vous avez un besoin précis ?</div>
              <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
                Décrivez votre activité et votre objectif. On vous répond avec une proposition claire.
              </p>
            </div>
            <div className="stack" style={{ justifyContent: "center" }}>
              <Link className="btn btnPrimary" to="/devis">Demander un devis</Link>
              <Link className="btn btnGhost" to="/realisations">Voir des exemples</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
