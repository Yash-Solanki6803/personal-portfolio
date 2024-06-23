import { Rubik } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Portfolio | Yash Solanki",
  description: "Made by Yash Solanki",
};
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717] overflow-x-hidden px-4 py-16 lg:py-0 h-screen">
        {children}
      </body>
    </html>
  );
}
