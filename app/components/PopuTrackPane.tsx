"use client";

import { usePrefectures } from "@/app/hooks/usePrefectures";
import { usePrefecturesPopulationData } from "@/app/hooks/usePrefecturesPopulationData";
import styles from "@/app/styles/popuTrackPane.module.css";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  const prefectures = usePrefectures();
  const { updateCheckedPrefectures, prefecturesPopulationCompositionData } =
    usePrefecturesPopulationData(prefectures);

  return (
    <>
      <h3>都道府県</h3>
      <div className={styles.checkboxContainer}>
        <CheckBoxPane
          prefectures={prefectures}
          updateCheckedPrefectures={updateCheckedPrefectures}
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
