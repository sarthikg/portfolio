import "./globals.css";
import { NavBar } from "@component/nav-bar";
import { homeData } from "@data/layout/home";
import localFont from "@next/font/local";

const biotifFont = localFont({
  src: "../public/fonts/Biotif-Regular.ttf",
  variable: "--font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${biotifFont.variable} font-sans`}>
        <NavBar data={homeData.header}></NavBar>
        {children}
      </body>
    </html>
  );
}
