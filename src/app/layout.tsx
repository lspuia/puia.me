import type { Metadata } from "next";
import { Archivo, Sedgwick_Ave } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
});

const sedgwickAve = Sedgwick_Ave({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sedgwick",
});

export const metadata: Metadata = {
  title: "Liansangpuia Chhakchhuak — Interface Designer & Front-End Developer",
  description:
    "Personal site of Liansangpuia Chhakchhuak. Designer of interfaces, builder of front ends.",
  metadataBase: new URL("https://puia.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Liansangpuia Chhakchhuak",
    description:
      "Human-Centred Design - Engineered with AI.",
    url: "https://puia.me",
    siteName: "puia.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Liansangpuia Chhakchhuak",
    description:
      "Human-Centred Design - Engineered with AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${sedgwickAve.variable}`}>
      <body>{children}</body>
    </html>
  );
}
