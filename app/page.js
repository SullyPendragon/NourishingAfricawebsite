"use client";
export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      textAlign: "center"
    }}>
      
      <h1 style={{ fontSize: "40px" }}>Nourishing Africa</h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Feeding Lives. Sharing Hope.
      </p>

      <section style={{ marginTop: "50px" }}>
        <h2>Our Mission</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          We are committed to providing food and spreading the Word of God
          to underserved communities across Africa. Our goal is to nourish
          both body and soul.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>What We Do</h2>
        <p>• Food distribution to families in need</p>
        <p>• Bible outreach and support</p>
        <p>• Community impact programs</p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Get Involved</h2>
        <p>You can support us through donations, volunteering, or partnerships.</p>
        <button
          onClick={() => alert("Donation feature coming soon")}
          style={{
            marginTop: "15px",
            padding: "12px 24px",
            background: "#22c55e",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Donate
        </button>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Contact</h2>
        <p>nourishingafrica@gmail.com</p>
      </section>

      <footer style={{ marginTop: "60px", opacity: 0.6 }}>
        <p>© 2026 Nourishing Africa</p>
      </footer>

    </main>
  );
}