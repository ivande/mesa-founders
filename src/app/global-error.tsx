"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a1714", color: "#faf6f1" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Error</h1>
            <p style={{ opacity: 0.6, marginBottom: "2rem" }}>Something went wrong</p>
            <a href="/" style={{ color: "#b87333" }}>Back to Sobremesa</a>
          </div>
        </div>
      </body>
    </html>
  );
}
