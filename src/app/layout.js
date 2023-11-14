import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import MainPage from "@/components/MainPage";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HomePetGuardians",
  description: "Leave your pets in good hands",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png?v=4"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={opensans.className}>
        <MainPage className="bg-[#fffbff]" />
      </body>
    </html>
  );
}
