import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
// TranslationWidget bileşenini buraya import ediyoruz
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const modernFont = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-modern", 
});

export const metadata: Metadata = {
  title: "English with Şevval",
  description: "Modern İngilizce eğitim portalı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${modernFont.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col font-sans ${modernFont.className}`}>
        
        {/* Çeviri butonunu buraya ekledik */}
        
        
        {children}
      </body>
    </html>
  );
}