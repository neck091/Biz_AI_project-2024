import { Inter } from "next/font/google";
import "@/css/globals.css";
import css from "@/css/page.module.css";
import Link from "next/link";

import AuthProvider from "./comps/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <header className={css.header}>
            <h1>AI UML Generated</h1>
            <Link href="/login">로그인</Link>
          </header>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
