import "./globals.css";

export const metadata = {
  title: "Najmul Hasan | Full Stack Developer",
  description:
    "Portfolio of Najmul Hasan — Full Stack Web Developer specialising in React, Node.js and MongoDB. Building structured, scalable web applications.",
  keywords: "Najmul Hasan, Full Stack Developer, React, Node.js, MongoDB, Portfolio",
  authors: [{ name: "Najmul Hasan" }],
  openGraph: {
    title: "Najmul Hasan | Full Stack Developer",
    description: "Full Stack Web Developer — React, Node.js, MongoDB",
    type: "website",
    url: "https://najmul-portfolio-six.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najmul Hasan | Full Stack Developer",
    description: "Full Stack Web Developer — React, Node.js, MongoDB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
