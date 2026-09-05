import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Strames Mobility LLP | Professional Mobility Solutions",
    template: "%s | Strames Mobility LLP",
  },

  description:
    "Strames Mobility LLP provides professional mobility and transportation solutions including corporate travel, employee transportation, fleet management, car rentals, airport transfers and tours.",

  keywords: [
    "Strames Mobility LLP",
    "mobility solutions",
    "transportation services",
    "corporate travel",
    "employee transportation",
    "fleet management",
    "car rentals",
    "airport transfers",
    "tours and transfers",
  ],

  authors: [
    {
      name: "Strames Mobility LLP",
    },
  ],

  creator: "Strames Mobility LLP",

  metadataBase: new URL("https://stramesmobility.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Strames Mobility LLP | Professional Mobility Solutions",
    description:
      "Professional mobility and transportation solutions for corporate travel, employee transportation, fleet management, car rentals, airport transfers and tours.",
    url: "https://stramesmobility.com",
    siteName: "Strames Mobility LLP",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strames Mobility LLP | Professional Mobility Solutions",
    description:
      "Professional mobility and transportation solutions for businesses, employees and travellers.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/images/logo/strames-logo-tr.png",
    shortcut: "/images/logo/strames-logo-tr.png",
    apple: "/images/logo/strames-logo-tr.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#071b3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}