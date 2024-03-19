import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import ParticleComponent from "@/components/Particles";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "@ping",
  description: "we will do what no CR could",
};

/* Font Setup */
const nexaExtraLight = localFont({
  src: "../public/fonts/Nexa-ExtraLight.ttf",
  variable: "--font-nexa-extralight"
})

const nexaHeavy = localFont({
  src: "../public/fonts/Nexa-Heavy.ttf",
  variable: "--font-nexa-heavy",
})

const ztChintzyRegular = localFont({
  src: "../public/fonts/ZTChintzy-Regular.ttf",
  variable: "--font-chintzy-regular"
})

const ztChintzySemiBold = localFont({
  src: "../public/fonts/ZTChintzy-SemiBold.ttf",
  variable: "--font-chintzy-semibold"
})

const interRegular = localFont({
  src: "../public/fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular"
})

const interBold = localFont({
  src: "../public/fonts/Inter-Bold.ttf",
  variable: "--font-inter-bold"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interRegular.variable} ${interBold.variable} ${nexaExtraLight.variable} ${nexaHeavy.variable} ${ztChintzyRegular.variable} ${ztChintzySemiBold.variable}`}
    >
      <body className={`${interRegular.className} bg-ping-blacker`}>
        <ParticleComponent />
        {children}
      </body>
    </html>
  );
}
