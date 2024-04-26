import { inter, notoSansJP } from "@/app/ui/fonts";
import type { Metadata } from "next";

import "sanitize.css";

export const metadata: Metadata = {
  title: "都道府県別人口推移",
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
