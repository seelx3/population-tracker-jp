"use client";

import { Prefectures, PrefectureWithPopulationComposition } from "@/app/types";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

import styles from "@/app/styles/styles.module.css";
import { useState } from "react";

interface Props {
  prefectures: Prefectures[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

export function PopuTrackPane({
  prefectures,
  prefecturesPopulationCompositionData,
}: Props) {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([]);
  const checkboxHandler = (prefIdx: number) => {
    if (checkedPrefectures.includes(prefIdx)) {
      setCheckedPrefectures(
        checkedPrefectures.filter((idx) => idx !== prefIdx),
      );
    } else {
      setCheckedPrefectures([...checkedPrefectures, prefIdx]);
    }
  };

  return (
    <>
      <div className={styles.checkbox}>
        <CheckBoxPane
          prefectures={prefectures}
          checkboxHandler={checkboxHandler}
        />
      </div>
      <div className={styles.chartPane}>
        <ChartPane
          checkedPrefectures={checkedPrefectures}
          prefecturesPopulationCompositionData={
            prefecturesPopulationCompositionData
          }
        />
      </div>
    </>
  );
}
