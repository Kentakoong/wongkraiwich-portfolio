import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { ThreeBackground } from "@/components/background/ThreeBackground";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";
import { AppleMusicProvider } from "@/providers/AppleMusicProvider";
import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wongkraiwich.dev"),
  openGraph: {
    siteName: "Wongkraiwich Chuenchomphu",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  applicationName: "Wongkraiwich Chuenchomphu",
  appleWebApp: {
    title: "Wongkraiwich Chuenchomphu",
    statusBarStyle: "default",
    capable: true,
  },
  title: "Wongkraiwich Chuenchomphu",
  description: "Wongkraiwich's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={figtree.variable} lang="en">
      <Head>
        <script
          async
          data-web-components
          src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"
        />
      </Head>
      <body className="antialiased">
        <TanstackQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThreeBackground />
            <AppleMusicProvider>
              <div className="relative z-10 flex min-h-screen flex-col justify-between">
                <div>
                  <Navbar />
                  {children}
                </div>
                <Footer />
              </div>
            </AppleMusicProvider>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
