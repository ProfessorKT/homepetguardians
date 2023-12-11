"use client";

import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Head from "next/head";
import { metadata } from "./metadata.jsx";
const opensans = Open_Sans({ subsets: ["latin"] });
import { NavigationEvents } from "./components/navigation-events";
import { Suspense } from "react";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body className={opensans.className}>
          <Navbar />
          <main>
            <div>{children}</div>
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
