import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Indonesia League Baseball | Official Website",
  description: "The official platform for Indonesia League Baseball. Get latest scores, standings, schedules, and news from the premier baseball league in Indonesia.",
  keywords: ["Indonesia League Baseball", "Baseball Indonesia", "INA Baseball", "Baseball Scores", "Indonesian Sports"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Indonesia League Baseball",
    description: "The official website of the Indonesia Baseball League. Power. Precision. Pride.",
    url: "https://inabaseball.vercel.app",
    siteName: "Indonesia League Baseball",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_ID",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Indonesia League Baseball",
    "url": "https://inabaseball.vercel.app",
    "logo": "https://inabaseball.vercel.app/icon.png",
    "description": "The premier professional baseball league in Indonesia.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
