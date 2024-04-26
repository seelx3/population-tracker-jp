import styles from "@/app/styles/styles.module.css";

import { PopuTrackLogo } from "./components/organisms/PopuTrackLogo";
import { PopuTrackPane } from "./components/organisms/PopuTrackPane";

import { Prefectures } from "@/app/types";

const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

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
