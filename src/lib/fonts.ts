import { Red_Hat_Text, Onest } from "next/font/google";

export const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-red-hat-text",
  display: "swap",
});

export const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
  display: "swap",
});
