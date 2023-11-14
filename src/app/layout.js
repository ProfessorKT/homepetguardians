import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Home from "@/components/Home";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HomePetGuardians",
  description: "Leave your pets in good hands",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png?v=4"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <Home />
      </body>
    </html>
  );
}
