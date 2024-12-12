import { Navbar } from "@portfolio/layouts/Navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Albert_Sans } from "next/font/google";

import { CurrentMusic } from "@portfolio/layouts/CurrentMusic";
import { AppleMusicProvider } from "@portfolio/providers/AppleMusicProvider";
import Head from "next/head";
import "./globals.css";

const jost = Albert_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
          src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"
          data-web-components
          async
        />
      </Head>
      <body
        className={`${jost.className} bg-neutral-50 py-4 text-black antialiased dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <ThemeProvider attribute="data-mode" enableSystem>
          <AppleMusicProvider>
            <Navbar />
            {children}
            <CurrentMusic />
          </AppleMusicProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
