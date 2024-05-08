import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Yash | Terminal",
  description: "yash's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
