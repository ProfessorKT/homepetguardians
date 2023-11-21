"use client";

import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar.jsx";
import Head from "next/head";
import { metadata } from "./metadata.jsx";
import { ClerkProvider } from "@clerk/nextjs";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={opensans.className}>
        <Navbar />
        {children}
      </div>
    </ClerkProvider>
  );
}
