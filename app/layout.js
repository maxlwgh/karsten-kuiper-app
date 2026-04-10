import "./globals.css";

export const metadata = {
  title: "Karsten & Kuiper — Den Haag",
  description:
    "Winkel, catering en events in het Zeeheldenkwartier, Den Haag. Sinds 2014.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
