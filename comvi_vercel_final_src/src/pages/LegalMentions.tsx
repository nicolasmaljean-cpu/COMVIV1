export default function LegalMentions() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Mentions légales</h1>
        <p className="small" style={{ marginTop: 12 }}>
          À compléter : forme juridique, BCE/TVA, adresse, responsable de publication, hébergeur (Vercel).
        </p>
        <div className="card" style={{ marginTop: 18 }}>
          <div style={{ fontWeight: 900 }}>Hébergeur</div>
          <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
            Vercel Inc. (à compléter selon votre configuration).
          </p>
        </div>
      </div>
    </section>
  );
}
