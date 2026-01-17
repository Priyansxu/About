import "./globals.css";
import Image from "next/image";
import Head from "next/head";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

import localFont from "next/font/local";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Priyanshu",
  applicationName: "Gupta's info",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Artist",
    "Developer",
    "Biography",
  ],
  authors: [{ name: "Priyanshu", url: "https://instagram.com/priyansxu_gupta" }],
  creator: "Priyanshu",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://priyanshu.is-a.dev"),
  openGraph: {
    title: "Priyanshu",
    description: "Ordinary guy from parallel world.",
    url: "https://priyanshu.is-a.dev",
    siteName: "Priyanshu",
    images: [
      {
        url: "../public/priyanshu.png",
        width: 800,
        height: 600,
      },
      {
        url: "../public/priyanshu.png",
        width: 1800,
        height: 1600,
        alt: "Developer// Designer//",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="df857c47-4d1f-414d-a713-6d7f9e0feec6"
        ></script>
      </Head>
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}