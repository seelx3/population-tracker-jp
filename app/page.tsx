import styles from "@/app/styles/styles.module.css";

import { PopuTrackLogo } from "./components/organisms/PopuTrackLogo";
import { PopuTrackPane } from "./components/organisms/PopuTrackPane";

import { Prefectures, PrefectureWithPopulationComposition } from "@/app/types";

const RESAS_PREFECTURES_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";

const RESAS_POPULATION_COMPOSITION_API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

type RESASPrefectures = {
  message: string;
  result: Prefectures[];
};

type RESASPopulationComposition = {
  message: string;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
      }[];
    }[];
  };
};

export default async function Page() {
  const prefecturesData: RESASPrefectures = await fetch(
    RESAS_PREFECTURES_API_URL,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.RESAS_API_KEY || "",
      },
    },
  ).then((res) => res.json());

  const prefectures = prefecturesData.result as Prefectures[];

  const prefecturesPopulationCompositionData: RESASPopulationComposition[] =
    await Promise.all(
      prefectures.map((prefecture) => {
        return fetch(
          `${RESAS_POPULATION_COMPOSITION_API_URL}?cityCode=-&prefCode=${prefecture.prefCode}`,
          {
            method: "GET",
            headers: {
              "X-API-KEY": process.env.RESAS_API_KEY || "",
            },
          },
        ).then((res) => res.json());
      }),
    );

  const prefecturesWithPopulationComposition: PrefectureWithPopulationComposition[] =
    prefectures.map((prefecture, index) => {
      return {
        prefCode: prefecture.prefCode,
        prefName: prefecture.prefName,
        boundaryYear:
          prefecturesPopulationCompositionData[index].result.boundaryYear,
        data: prefecturesPopulationCompositionData[index].result.data,
      };
    });

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <PopuTrackLogo />
      </div>
      <PopuTrackPane
        prefectures={prefectures}
        prefecturesPopulationCompositionData={
          prefecturesWithPopulationComposition
        }
      />
    </main>
  );
}
