import styles from "./styles.module.css";

import { PopuTrackLogo } from "@/app/ui/popu-track-logo";
import { PopuTrackPane } from "./components/organisms/PopuTrackPane";

const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

export default async function Page() {
  const data = await fetch(RESAS_PREFECTURES_API_URL, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    },
  }).then((res) => res.json());

  const prefectures = data.result as Prefectures[];

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <PopuTrackLogo />
      </div>
      <PopuTrackPane prefectures={prefectures} />
    </main>
  );
}
