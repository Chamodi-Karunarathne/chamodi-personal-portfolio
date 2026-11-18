import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import GrainOverlay from "./components/GrainOverlay";
import ThemeProvider from "./components/ThemeProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.chamodi.dev");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chamodi Karunarathne — Software Engineer",
  description:
    "I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences",
  openGraph: {
    title: "Chamodi Karunarathne — Software Engineer",
    description:
      "I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences",
    url: siteUrl,
    siteName: "Chamodi Karunarathne",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/my-pic.jpg",
        width: 960,
        height: 1280,
        alt: "Chamodi Karunarathne",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamodi Karunarathne — Software Engineer",
    description:
      "I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences",
    images: ["/my-pic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="edition">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Jost:wght@300;400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip label" href="#main">Skip to content</a>
        <GrainOverlay />
        <Header />
        {children}
        <ThemeProvider />
      </body>
    </html>
  );
}
