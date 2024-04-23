import { Inter, Lusitana, Noto_Sans_JP } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});
