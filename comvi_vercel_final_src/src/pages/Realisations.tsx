import { WORKS } from "../app/site";
import { ImageWithFallback } from "../components/ImageWithFallback";

export default function Realisations() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Réalisations</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          Exemples de contenus. Chaque projet renvoie vers un extrait Instagram.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16, marginTop: 18 }}>
          {WORKS.map((w) => (
            <div key={w.id} className="card">
              <div className="cols2">
                <div style={{ width: "100%", height: 220 }}>
                  <ImageWithFallback
                    src={w.thumb}
                    alt={w.title}
                    className="imgCover"
                    fallback={
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 14,
                          border: "1px solid rgba(255,255,255,0.12)",
                          background:
                            "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(255,255,255,0.04))"
                        }}
                      />
                    }
                  />
                </div>

                <div className="stack" style={{ gap: 10 }}>
                  <div style={{ fontWeight: 900, fontSize: 20 }}>{w.title}</div>
                  <div className="small">{w.type}</div>
                  <div className="small">
                    Lien :{" "}
                    <a href={w.instagramUrl} target="_blank" rel="noreferrer" style={{ color: "var(--sand)", fontWeight: 800 }}>
                      Instagram
                    </a>
                  </div>
                  <a className="btn btnPrimary" href={w.instagramUrl} target="_blank" rel="noreferrer">
                    Voir la vidéo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: "30px 0" }} />

        <div className="card">
          <div style={{ fontWeight: 900 }}>Vous voulez voir un exemple similaire au vôtre ?</div>
          <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
            Dites-nous votre secteur (commerce, artisan, services, restauration…) et votre objectif. On vous propose le format vidéo le plus efficace.
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn btnPrimary" href="/devis">Demander un devis</a>
          </div>
        </div>
      </div>
    </section>
  );
}
