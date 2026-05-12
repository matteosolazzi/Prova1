import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/useLanguage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matteosolazzi.com"),
  title: "Matteo Solazzi — Marketing operator",
  description:
    "Marketing & BD lead at Daze, an Italian EV-charging scale-up. Building things at the intersection of strategy and execution.",
  openGraph: {
    title: "Matteo Solazzi",
    description: "Marketing operator. Currently at Daze.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Solazzi",
    description: "Marketing operator. Currently at Daze.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
