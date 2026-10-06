import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Nanum_Pen_Script, Give_You_Glory, Handlee, Gochi_Hand } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

// Professional pair: hero + contact. Handwritten set: everything in between.
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const pen = Nanum_Pen_Script({ variable: "--font-pen", subsets: ["latin"], weight: "400" });
const glory = Give_You_Glory({ variable: "--font-glory", subsets: ["latin"], weight: "400" });
const handlee = Handlee({ variable: "--font-handlee", subsets: ["latin"], weight: "400" });
const gochi = Gochi_Hand({ variable: "--font-gochi", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: `${portfolio.name} — Portfolio`,
  description: "Data science and machine learning researcher.",
};

const fonts = [sans, display, pen, glory, handlee, gochi].map((f) => f.variable).join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fonts}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
