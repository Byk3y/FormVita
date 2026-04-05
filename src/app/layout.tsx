import type { Metadata } from "next";
import { redHatText, onest } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormVita | FDA-Approved Oral GLP-1 Weight Loss Pills",
  description:
    "Lose weight with FDA-approved oral GLP-1 pills. Doctor-prescribed, delivered monthly. No needles. No hidden fees. Starting at $199/mo.",
  openGraph: {
    title: "FormVita | FDA-Approved Oral GLP-1 Weight Loss Pills",
    description:
      "Lose weight with FDA-approved oral GLP-1 pills. Doctor-prescribed, delivered monthly. No needles. No hidden fees.",
    type: "website",
    url: "https://formvita.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHatText.variable} ${onest.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
