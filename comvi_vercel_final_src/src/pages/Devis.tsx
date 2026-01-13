import { FormEvent, useMemo, useState } from "react";
import { SITE } from "../app/site";

export default function Devis() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Demande de devis - ${SITE.name}`;
    const body = [
      `Nom / entreprise : ${name}`,
      `Téléphone : ${phone}`,
      ``,
      `Message :`,
      message
    ].join("\n");
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, phone, message]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;
    window.location.href = mailtoHref;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Demander un devis</h1>
        <p className="lead" style={{ marginTop: 10 }}>
          Décrivez votre besoin. On vous répond avec une proposition claire.
        </p>

        <div className="cols2" style={{ marginTop: 18 }}>
          <div className="card">
            <form onSubmit={onSubmit}>
              <div className="stack">
                <div>
                  <label htmlFor="name">Nom + entreprise</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Sophie — Boulangerie du Centre" required />
                </div>

                <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ex: 0470 00 00 00" required />
                </div>

                <div>
                  <label htmlFor="msg">Votre demande</label>
                  <textarea id="msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ex: vidéo vitrine + 6 reels / besoin avant fin du mois / secteur..." required />
                </div>

                <label className="small" style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                  J’accepte d’être recontacté par COMVI au sujet de cette demande.
                </label>

                <button className="btn btnPrimary" type="submit" disabled={!consent}>
                  Envoyer la demande (email)
                </button>

                <div className="small">
                  Alternative :{" "}
                  <a href={`tel:${SITE.phoneE164}`} style={{ color: "var(--sand)", fontWeight: 800 }}>
                    appeler
                  </a>{" "}
                  ou{" "}
                  <a
                    href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent("Bonjour COMVI, je souhaite un devis. Mon activité : ...")}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--sand)", fontWeight: 800 }}
                  >
                    WhatsApp
                  </a>
                  .
                </div>
              </div>
            </form>
          </div>

          <div className="stack">
            <div className="card">
              <div style={{ fontWeight: 900 }}>Informations</div>
              <div className="divider" style={{ margin: "14px 0" }} />
              <div className="stack" style={{ gap: 10 }}>
                <div className="small"><b>Email</b> : {SITE.email}</div>
                <div className="small"><b>Téléphone</b> : {SITE.phoneDisplay}</div>
                <div className="small"><b>Zone</b> : {SITE.area}</div>
              </div>
            </div>

            <div className="card">
              <div style={{ fontWeight: 900 }}>Ce qu’on vous renvoie</div>
              <div className="divider" style={{ margin: "14px 0" }} />
              <ul className="small" style={{ margin: "0 0 0 18px" }}>
                <li style={{ marginBottom: 6 }}>Une proposition claire (livrables + délais)</li>
                <li style={{ marginBottom: 6 }}>Un prix “à partir de” + options</li>
                <li style={{ marginBottom: 6 }}>Une prochaine étape simple (tournage / planning)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: "30px 0" }} />

        <p className="small" style={{ margin: 0 }}>
          Conseil : pour une réponse plus rapide, WhatsApp peut être le plus efficace sur mobile.
        </p>
      </div>
    </section>
  );
}
