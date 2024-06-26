import { Rubik } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Yash Solanki",
  description: "Made by Yash Solanki",
};
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
