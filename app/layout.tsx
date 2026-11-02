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
  title: "Abinanth K S | Full-Stack Developer",
  description:
    "Portfolio of Abinanth K S - Full-Stack Developer skilled in .NET, ASP.NET Core, SQL Server, Angular, React, and TypeScript. Engineering graduate from Anna University.",
  keywords: [
    "Abinanth K S",
    "Full-Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "React Developer",
    "ASP.NET Core",
    "SQL Server",
    "TypeScript",
  ],
  authors: [{ name: "Abinanth K S", url: "https://github.com/Abinanth258" }],
  creator: "Abinanth K S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abinanth-portfoliio.vercel.app",
    title: "Abinanth K S | Full-Stack Developer Portfolio",
    description:
      "Crafting robust backends with .NET & SQL and dynamic user experiences with React & Angular.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#f8fafc] text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white antialiased`}
      >
        {/* Subtle background texture */}
        <div className="fixed inset-0 bg-dot-pattern pointer-events-none opacity-60 z-0" />
        <div className="fixed top-0 left-1/3 w-[500px] h-[350px] bg-gradient-to-br from-blue-100/70 to-indigo-100/50 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-1/4 right-1/4 w-[450px] h-[350px] bg-gradient-to-tr from-sky-100/60 to-emerald-100/40 rounded-full blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
