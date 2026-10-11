import "./globals.css";

export const metadata = {
  title: "Preetham Anirudh Annadanam — AI/ML & Backend Engineer",
  description:
    "Portfolio of Preetham Anirudh Annadanam — AI/ML and backend engineer building production-grade systems: RAG pipelines, agents, and scalable APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink font-serif antialiased selection:bg-accent/15">
        {children}
      </body>
    </html>
  );
}
