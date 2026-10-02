import type { Metadata, Viewport } from "next";
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

const title = "Liansangpuia Chhakchhuak — UI/UX Design & Web Development";
const description =
  "Liansangpuia (Puia) Chhakchhuak — AI-powered UI/UX design and web development. Human-centred design, engineered with AI.";

// The share images come from opengraph-image.jpg and twitter-image.jpg
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://puia.me"),
  applicationName: "puia.me",
  authors: [{ name: "Liansangpuia Chhakchhuak", url: "https://puia.me" }],
  creator: "Liansangpuia Chhakchhuak",
  keywords: [
    "Liansangpuia Chhakchhuak",
    "Puia Chhakchhuak",
    "UI/UX design",
    "web development",
    "human-centred design",
    "AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://puia.me",
    siteName: "puia.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
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
