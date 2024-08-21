import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flylux ",
  description:
    "Our service provides access to aircraft with luxurious interiors, cutting-edge technology, and a commitment to excellence, designed to meet the highest standards of comfort and sophistication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
