import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bloomora Agency - Digital Excellence",
  description: "Transform your digital presence with beautiful websites, powerful SaaS tools, and intuitive dashboards that drive growth for modern businesses.",
  keywords: ["web development", "SaaS", "dashboard", "digital agency", "web design"],
  authors: [{ name: "Bloomora Agency" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" }
  },
  openGraph: {
    title: "Bloomora Agency - Digital Excellence",
    description: "Transform your digital presence with beautiful websites, powerful SaaS tools, and intuitive dashboards that drive growth for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
