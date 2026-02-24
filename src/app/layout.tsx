import type { Metadata } from "next";
import {Open_Sans, Montserrat, Oleo_Script_Swash_Caps} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

const swash = Oleo_Script_Swash_Caps({
    variable: "--font-swash",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Michael Labastida",
  description: "A portfolio website showcasing the work and skills of Michael Labastida, a mobile developer specializing in Flutter with experience in web development using Laravel and PHP, and a strong background in web and mobile UI design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${mont.variable} ${swash.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
