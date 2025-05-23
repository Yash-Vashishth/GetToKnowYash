import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components

import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairEffect";
import Header from "../components/Header";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Yash Vashishth",
  description: "Get to know more about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
