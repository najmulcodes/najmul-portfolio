import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Najmul Hasan | Frontend Developer",
  description: "Portfolio of Najmul Hasan - Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f172a] text-gray-300`}>
        {children}
      </body>
    </html>
  );
}
