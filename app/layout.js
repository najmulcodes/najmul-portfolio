import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://najmulcodes.vercel.app"),

  title: {
    default: "Najmul Hasan | Freelance Full-Stack Developer for Hire",
    template: "%s | Najmul Hasan",
  },

  description:
    "Najmul Hasan — Freelance Full-Stack Developer for hire. Builds web apps, dashboards, REST APIs, and marketplaces with React, Next.js, Node.js and MongoDB. Fast delivery, clean code.",

  keywords: [
    "Najmul Hasan",
    "najmulcodes",
    "Hire Full Stack Developer",
    "Freelance Web Developer",
    "MERN Stack Developer",
    "React Developer for hire",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Freelance MERN Developer",
    "Web Developer Bangladesh",
    "Remote Full Stack Developer",
  ],

  authors: [{ name: "Najmul Hasan", url: "https://najmulcodes.vercel.app" }],
  creator: "Najmul Hasan",

  openGraph: {
    title: "Najmul Hasan | Freelance Full-Stack Developer for Hire",
    description:
      "Freelance Full-Stack Developer — React, Next.js, Node.js, MongoDB. Available for web apps, APIs, and dashboards.",
    url: "https://najmulcodes.vercel.app",
    siteName: "Najmul Hasan Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Najmul Hasan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Najmul Hasan | Freelance Full-Stack Developer for Hire",
    description:
      "Freelance Full-Stack Developer — React, Next.js, Node.js, MongoDB. Available for web apps, APIs, and dashboards.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

// Person + WebSite structured data — this is what lets Google merge
// your GitHub, LinkedIn, and this site into one confirmed entity
// instead of treating them as unrelated pages.
const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Najmul Hasan",
      alternateName: "najmulcodes",
      url: "https://najmulcodes.vercel.app",
      image: "https://najmulcodes.vercel.app/profile.png",
      jobTitle: "Full-Stack Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Independent / Freelance",
      },
      sameAs: [
        "https://github.com/najmulcodes",
        "https://www.linkedin.com/in/najmulcodes",
        "https://www.upwork.com/freelancers/~najmulhasan",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      "@type": "WebSite",
      name: "Najmul Hasan Portfolio",
      url: "https://najmulcodes.vercel.app",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
