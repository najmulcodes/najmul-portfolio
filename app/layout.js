import "./globals.css";

export const metadata = {
  title: "Najmul Hasan | Full Stack Developer",
  description:
    "Portfolio of Najmul Hasan — Full Stack Web Developer specialising in React, Node.js and MongoDB. Building structured, scalable web applications.",

  keywords: [
    "Najmul Hasan",
    "Full Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "MERN Stack Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Najmul Hasan" }],

  openGraph: {
    title: "Najmul Hasan | Full Stack Developer",
    description:
      "Full Stack Web Developer specialising in React, Node.js and MongoDB.",
    type: "website",
    url: "https://najmul-portfolio-six.vercel.app/",
    siteName: "Najmul Hasan Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Najmul Hasan | Full Stack Developer",
    description:
      "Full Stack Web Developer specialising in React, Node.js and MongoDB.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
