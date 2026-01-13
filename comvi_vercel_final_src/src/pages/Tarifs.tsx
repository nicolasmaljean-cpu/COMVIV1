import { Link } from "react-router-dom";
import { PRICING } from "../app/site";

export default function Tarifs() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Tarifs</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          Des packs simples “à partir de”. On ajuste selon votre activité, vos contenus et vos délais.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16, marginTop: 18 }}>
          {PRICING.map((p) => (
            <div
              key={p.id}
              className="card"
              style={{
                borderColor: p.highlight ? "rgba(245,158,11,0.45)" : "rgba(255,255,255,0.12)"
              }}
            >
              <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{p.name}</div>
                {p.highlight && <span className="badge">le plus choisi</span>}
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, marginTop: 8 }}>{p.price}</div>
              <p className="small" style={{ marginTop: 8 }}>{p.subtitle}</p>
              <ul className="small" style={{ margin: "10px 0 0 18px" }}>
                {p.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
              <div style={{ marginTop: 12 }}>
                <Link to="/devis" className="btn btnPrimary">
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: "30px 0" }} />

        <div className="card">
          <div style={{ fontWeight: 900 }}>Note</div>
          <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
            Les prix sont indicatifs. Le devis précise : livrables, délais, nombre d’allers-retours et options.
          </p>
        </div>
      </div>
    </section>
  );
}
