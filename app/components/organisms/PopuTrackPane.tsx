"use client";

import { Prefectures, PrefectureWithPopulationComposition } from "@/app/types";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

import styles from "@/app/styles/popuTrackPane.module.css";
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
      <h3>都道府県</h3>
      <div className={styles.checkboxContainer}>
        <CheckBoxPane
          prefectures={prefectures}
          checkboxHandler={checkboxHandler}
        />
      </div>
      <h3>人口推移</h3>
      <div className={styles.chartPaneContainer}>
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
