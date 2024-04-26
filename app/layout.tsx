import type { Metadata } from "next";
import { inter, notoSansJP } from "@/app/ui/fonts";

import "sanitize.css";

export const metadata: Metadata = {
  title: "PopuTrack",
  description: "Population tracker for Japan",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        {children}
      </body>
    </html>
  );
}
