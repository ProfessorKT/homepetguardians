"use client";

import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Head from "next/head";
import { metadata } from "./metadata.jsx";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body className={opensans.className}>
          <Navbar />
          <main>
            <div>{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
