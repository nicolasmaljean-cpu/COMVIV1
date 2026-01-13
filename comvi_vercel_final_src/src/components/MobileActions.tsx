import { Link } from "react-router-dom";
import { SITE } from "../app/site";

export function MobileActions() {
  return (
    <div className="mobileBar" aria-label="Actions rapides mobile">
      <div className="mobileBarInner">
        <a className="btn" style={{ padding: "12px 10px", fontWeight: 900 }} href={`tel:${SITE.phoneE164}`}>
          Appeler
        </a>
        <a
          className="btn btnPrimary"
          style={{ padding: "12px 10px", fontWeight: 900 }}
          href={`https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent("Bonjour COMVI, je souhaite un devis. Mon activité : ...")}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <Link className="btn" style={{ padding: "12px 10px", fontWeight: 900 }} to="/devis">
          Devis
        </Link>
      </div>
    </div>
  );
}
