"use client";

import { Prefectures, PrefectureWithPopulationComposition } from "@/app/types";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

import styles from "@/app/styles/styles.module.css";

interface Props {
  prefectures: Prefectures[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

export function PopuTrackPane({
  prefectures,
  prefecturesPopulationCompositionData,
}: Props) {
  return (
    <>
      <div className={styles.checkbox}>
        <CheckBoxPane prefectures={prefectures} />
      </div>
      <div className={styles.chartPane}>
        <ChartPane
          prefecturesPopulationCompositionData={
            prefecturesPopulationCompositionData
          }
        />
      </div>
    </>
  );
}
