"use client";

import { Prefecture, PrefectureWithPopulationComposition } from "@/app/types";

import {
  getPrefecturePopulationCompositionData,
  getPrefectures,
} from "@/app/lib/api";
import styles from "@/app/styles/popuTrackPane.module.css";
import React, { useEffect, useState } from "react";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([]);
  const [
    prefecturesPopulationCompositionData,
    setPrefecturesPopulationCompositionData,
  ] = useState<PrefectureWithPopulationComposition[]>([]);

  const checkboxHandler = async (prefIdx: number) => {
    if (checkedPrefectures.includes(prefIdx)) {
      setCheckedPrefectures(
        checkedPrefectures.filter((idx) => idx !== prefIdx),
      );
      setPrefecturesPopulationCompositionData(
        prefecturesPopulationCompositionData.filter(
          (data) => data.prefCode !== prefIdx + 1,
        ),
      );
    } else {
      setCheckedPrefectures([...checkedPrefectures, prefIdx]);
      try {
        const newPrefectureCompositionData =
          await getPrefecturePopulationCompositionData(prefectures[prefIdx]);

        setPrefecturesPopulationCompositionData([
          ...prefecturesPopulationCompositionData,
          newPrefectureCompositionData,
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const prefectures = await getPrefectures();
        setPrefectures(prefectures);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
          prefecturesPopulationCompositionData={
            prefecturesPopulationCompositionData
          }
        />
      </div>
    </>
  );
};
