import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abinanth K S | Full-Stack Developer & Software Engineer",
  description:
    "Portfolio of Abinanth K S - Full-Stack Developer skilled in .NET, ASP.NET Core, SQL Server, Angular, React, and TypeScript. Engineering graduate from Anna University.",
  keywords: [
    "Abinanth K S",
    "Full-Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "React Developer",
    "ASP.NET Core",
    "Software Engineer Portfolio",
    "SQL Server",
    "TypeScript",
  ],
  authors: [{ name: "Abinanth K S", url: "https://github.com/Abinanth258" }],
  creator: "Abinanth K S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abinanth-portfolio.vercel.app",
    title: "Abinanth K S | Full-Stack Developer Portfolio",
    description:
      "Crafting robust backends with .NET & SQL and intuitive user experiences with React & Angular.",
    siteName: "Abinanth K S Portfolio",
    images: [
      {
        url: "/abinanth.jpg",
        width: 800,
        height: 1000,
        alt: "Abinanth K S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinanth K S | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in .NET, SQL Server, React, and Angular.",
    images: ["/abinanth.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#090d16] text-slate-100 min-h-screen selection:bg-blue-500/30 selection:text-blue-200 antialiased`}
      >
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
