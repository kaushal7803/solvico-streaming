import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],

});
export const metadata: Metadata = {
  title: "Streaming",
  description: "Devloped by SOLVICO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
