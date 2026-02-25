import {Inter} from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Bike Hub"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Image src={"/logo.png"} width={140} height={140} className="logo" alt="Logo"/>
        {children}
      </body>
    </html>
  );
}
