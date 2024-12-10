import "./globals.css";

export const metadata = {
  title: "Mairie d'Arcins",
  description: "Le site officiel de la Mairie d'Arcins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" href="/mairie.webp" as="image" />
        <link rel="preload" href="/port1.webp" as="image" />
        <link rel="preload" href="/eglise.webp" as="image" />
        <link rel="preload" href="/port4.webp" as="image" />
        <link rel="preload" href="/port5.webp" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
