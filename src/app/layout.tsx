import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Puia Chhakchhuak — Interface Designer & Front-End Developer",
  description:
    "Personal site of Puia Chhakchhuak. Designer of interfaces, builder of front ends.",
  metadataBase: new URL("https://puia.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Puia Chhakchhuak",
    description:
      "Designer of interfaces, builder of front ends. Yes, that email was really from me.",
    url: "https://puia.me",
    siteName: "puia.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Puia Chhakchhuak",
    description:
      "Designer of interfaces, builder of front ends. Yes, that email was really from me.",
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
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
