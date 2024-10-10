import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google"; // Import both fonts from Google
import "./globals.css";

// Google Font - Plus Jakarta Sans with specific subsets and weights
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "800"], // Ensure weights match available options
  variable: "--font-plus-sans", // CSS variable for Plus Jakarta Sans
});

// Google Font - Poppins with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Poppins Regular (400) and Bold (700)
  variable: "--font-poppins", // CSS variable for Poppins
});

export const metadata: Metadata = {
  title: "DigiGrowth",
  description:
    "Unlock your business's full potential with tailored digital strategies that drive growth, enhance visibility, and deliver measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
