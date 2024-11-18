import "./globals.css";

export const metadata = {
  title: "Mairie d'Arcins",
  description: "Le site officiel de la Mairie d'Arcins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
