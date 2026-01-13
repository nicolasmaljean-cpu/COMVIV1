import { Link } from "react-router-dom";
import { SITE, SERVICES, PRICING, WORKS } from "../app/site";
import { BeffroiBackdrop } from "../components/BeffroiBackdrop";
import { Dot } from "../components/Icons";
import { ImageWithFallback } from "../components/ImageWithFallback";

export default function Home() {
  const proof = SITE.proof;

  return (
    <>
      <section className="hero">
        <div className="heroBg">
          <BeffroiBackdrop />
        </div>
        <div className="heroOverlay" />

        <div className="container heroInner">
          <div style={{ textAlign: "center" }}>
            <span className="badge">
              <Dot /> {SITE.area}
            </span>

            <h1 className="h1" style={{ marginTop: 16 }}>
              Votre entreprise mérite d’être vue à {SITE.city}
            </h1>

            <p className="lead" style={{ marginTop: 14, maxWidth: 760, marginInline: "auto" }}>
              Vidéos professionnelles + visibilité locale pour commerces, indépendants et PME.
              Vous expliquez. On exécute. Vous validez.
            </p>

            <div className="heroCtas">
              <Link to="/devis" className="btn btnPrimary">
                Devis gratuit en 24h
              </Link>
              <Link to="/realisations" className="btn btnGhost">
                Voir nos réalisations
              </Link>
            </div>

            {(proof.companiesLocal || proof.videosProduced || proof.years || proof.rating) && (
              <div style={{ marginTop: 16 }} className="small">
                {proof.companiesLocal && <span>Déjà {proof.companiesLocal} entreprises locales accompagnées</span>}
                {proof.videosProduced && <span> • {proof.videosProduced} vidéos produites</span>}
                {proof.years && <span> • {proof.years} ans d’expérience</span>}
                {proof.rating && <span> • {proof.rating} note moyenne</span>}
              </div>
            )}
          </div>

          <div style={{ marginTop: 26 }} className="cols2">
            <div className="card">
              <div style={{ fontWeight: 900, fontSize: 18 }}>Ce que vous obtenez</div>
              <div className="divider" style={{ margin: "14px 0" }} />
              <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 10 }}>
                <div className="row">
                  <Dot /> <span className="muted">Vidéos prêtes à publier (formats réseaux)</span>
                </div>
                <div className="row">
                  <Dot /> <span className="muted">Sous-titres et habillage simple inclus</span>
                </div>
                <div className="row">
                  <Dot /> <span className="muted">Une présence plus claire et plus crédible</span>
                </div>
                <div className="row">
                  <Dot /> <span className="muted">Un process court : brief → tournage → livraison</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ fontWeight: 900, fontSize: 18 }}>Actions rapides</div>
              <div className="divider" style={{ margin: "14px 0" }} />
              <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 10 }}>
                <a className="btn btnPrimary" href={`tel:${SITE.phoneE164}`}>
                  Appeler : {SITE.phoneDisplay}
                </a>
                <a
                  className="btn"
                  href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent("Bonjour COMVI, je souhaite un devis. Mon activité : ...")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp (réponse rapide)
                </a>
                <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Demande de devis - COMVI")}`}>
                  Envoyer un email
                </a>
              </div>
              <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
                Conseil : sur mobile, WhatsApp est souvent le plus simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Pourquoi COMVI ?</h2>
          <p className="lead" style={{ marginTop: 10 }}>
            Du concret, du local, et un process simple. Pas de blabla.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: 18 }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
              <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                <div className="card">
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div style={{ fontWeight: 900 }}>📍 Experts locaux</div>
                    <span className="badge">{SITE.city}</span>
                  </div>
                  <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
                    Basés ici, on connaît le terrain et vos clients. On adapte le message à votre réalité.
                  </p>
                </div>

                <div className="card">
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div style={{ fontWeight: 900 }}>⚡ Réactifs</div>
                    <span className="badge">devis 24h</span>
                  </div>
                  <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
                    Vous avez un timing ? On s’aligne. Tournage planifié rapidement, livraison claire.
                  </p>
                </div>

                <div className="card">
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div style={{ fontWeight: 900 }}>💰 Packs lisibles</div>
                    <span className="badge">transparence</span>
                  </div>
                  <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
                    Des offres simples “à partir de”, adaptées PME. On vise l’efficacité, pas la complexité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider" style={{ margin: "34px 0" }} />

          <h2 className="h2">Services</h2>
          <p className="lead" style={{ marginTop: 10 }}>
            Ce qu’on fait pour vous, en version claire.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: 18 }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
              {SERVICES.slice(0, 4).map((s) => (
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
          </div>

          <div style={{ marginTop: 14 }}>
            <Link to="/services" className="btn">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <h2 className="h2">Réalisations</h2>
              <p className="lead" style={{ marginTop: 10 }}>
                Des exemples concrets de contenus. Cliquez pour voir l’extrait sur Instagram.
              </p>
            </div>
            <Link to="/realisations" className="btn btnGhost">
              Tout voir
            </Link>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: 18 }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
              {WORKS.map((w) => (
                <div key={w.id} className="card">
                  <div className="cols2">
                    <div style={{ width: "100%", height: 180 }}>
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
                      <div style={{ fontWeight: 900, fontSize: 18 }}>{w.title}</div>
                      <div className="small">{w.type}</div>
                      <a className="btn btnPrimary" href={w.instagramUrl} target="_blank" rel="noreferrer">
                        Voir sur Instagram
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Tarifs</h2>
          <p className="lead" style={{ marginTop: 10 }}>
            Des packs “à partir de” pour cadrer. Un devis ajuste selon votre besoin.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "1fr", marginTop: 18 }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
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
                  <div style={{ fontSize: 24, fontWeight: 900, marginTop: 8 }}>{p.price}</div>
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
          </div>

          <div style={{ marginTop: 14 }}>
            <Link to="/tarifs" className="btn btnGhost">Voir les détails</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Comment ça se passe</h2>
          <p className="lead" style={{ marginTop: 10 }}>
            Simple. Rapide. Sans friction.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 16, marginTop: 18 }}>
            <div className="card">
              <div style={{ fontWeight: 900 }}>1) Brief (10–15 min)</div>
              <p className="small" style={{ marginTop: 8, marginBottom: 0 }}>
                Objectif, style, contraintes. On cadre tout.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 900 }}>2) Tournage</div>
              <p className="small" style={{ marginTop: 8, marginBottom: 0 }}>
                On filme votre activité sur place, en restant efficace.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 900 }}>3) Montage + sous-titres</div>
              <p className="small" style={{ marginTop: 8, marginBottom: 0 }}>
                Livraison prête à publier (formats adaptés).
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 900 }}>4) Publication (si pack)</div>
              <p className="small" style={{ marginTop: 8, marginBottom: 0 }}>
                Vous validez. On publie selon le planning.
              </p>
            </div>
          </div>

          <div className="divider" style={{ margin: "34px 0" }} />

          <div className="card">
            <div className="cols2">
              <div>
                <h2 className="h2">Prêt à booster votre visibilité ?</h2>
                <p className="lead" style={{ marginTop: 10 }}>
                  Devis gratuit en 24h. Vous gagnez du temps, nous on s’occupe du reste.
                </p>
              </div>
              <div className="stack" style={{ justifyContent: "center" }}>
                <Link className="btn btnPrimary" to="/devis">Demander un devis</Link>
                <a className="btn" href={`tel:${SITE.phoneE164}`}>Appeler</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
