import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";
import { AppleMusicProvider } from "@/providers/AppleMusicProvider";
import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import "./globals.css";

const jost = Albert_Sans({
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          async
          data-web-components
          src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"
        />
      </Head>
      <body
        className={`${jost.className} bg-neutral-50 py-4 text-black antialiased transition max-md:pb-40 dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <TanstackQueryProvider>
          <ThemeProvider attribute="data-mode" enableSystem>
            <ToastProvider>
              <AppleMusicProvider>
                <div className="flex min-h-screen flex-col justify-between">
                  <div>
                    <Navbar />
                    {children}
                  </div>
                  <Footer />
                </div>
              </AppleMusicProvider>
            </ToastProvider>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
