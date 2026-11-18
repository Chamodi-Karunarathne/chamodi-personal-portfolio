import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import GrainOverlay from "./components/GrainOverlay";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Chamodi Karunarathne — Software Engineer",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  description:"I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences",
  openGraph: {
    title:
      "Chamodi Karunarathne — Software Engineer",
    description:
      "I'm a Software Engineering Intern specializing in full-stack engineering and digital experiences",    images: [
      {
        url: "/my-pic.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="edition">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
