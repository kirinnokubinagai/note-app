import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note App",
  description: "Note App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`bg-slate-200 ${NotoSansJP.className}`}>
        <main className="pt-4 px-10 h-screen">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-medium text-2xl">
              Notes App
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-blue-600 duration-150">
                Home
              </Link>
              <Link href="/notes" className="hover:text-blue-600 duration-150">
                Notes List
              </Link>
            </nav>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
