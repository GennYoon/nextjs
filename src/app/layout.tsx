import "./globals.css";
import HeaderWidget from "@/components/widgets/header";
import SidebarWidget from "@/components/widgets/sidebar";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Study NextJS",
  description: "NextJS의 여러기능을 공부합니다.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <HeaderWidget />
        <main className="flex">
          <SidebarWidget />
          <section className="flex-1">{children}</section>
          {modal}
        </main>
      </body>
    </html>
  );
}
