import { Link } from "react-router-dom";
import { SITE } from "../app/site";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">À propos</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          COMVI, c’est une approche terrain : montrer votre activité, simplement, et vous rendre visible localement.
        </p>

        <div className="cols2" style={{ marginTop: 18 }}>
          <div className="card">
            <div style={{ fontWeight: 900, fontSize: 18 }}>Pourquoi {SITE.city} ?</div>
            <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
              Parce que les clients sont là. Le but : que votre entreprise soit vue, comprise et choisie par des gens proches de vous.
            </p>
          </div>

          <div className="card">
            <div style={{ fontWeight: 900, fontSize: 18 }}>Notre manière de bosser</div>
            <ul className="small" style={{ margin: "10px 0 0 18px" }}>
              <li style={{ marginBottom: 6 }}>On simplifie (pas de jargon)</li>
              <li style={{ marginBottom: 6 }}>On montre le concret (réalisations)</li>
              <li style={{ marginBottom: 6 }}>On respecte votre temps (process court)</li>
              <li style={{ marginBottom: 6 }}>On vise la crédibilité (qualité + régularité)</li>
            </ul>
          </div>
        </div>

        <div className="divider" style={{ margin: "30px 0" }} />

        <div className="card">
          <div className="cols2">
            <div>
              <div style={{ fontWeight: 900, fontSize: 20 }}>Envie d’en parler ?</div>
              <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
                Dites-nous ce que vous faites et ce que vous voulez obtenir. On revient avec une proposition claire.
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
