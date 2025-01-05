"use client";

import { usePrefecturesPopulationData } from "@/app/hooks/usePrefecturesPopulationData";
import styles from "@/app/styles/popuTrackPane.module.css";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  const {
    prefecturesPopulationCompositionData,
    error: errorCheckedPrefectures,
    isLoading: isLoadingCheckedPrefectures,
    updateCheckedPrefecturesData,
  } = usePrefecturesPopulationData();

  return (
    <>
      <h3>都道府県</h3>
      <div className={styles.checkboxContainer}>
        <CheckBoxPane updateCheckedPrefectures={updateCheckedPrefecturesData} />
      </div>
      <h3>人口推移</h3>
      <div className={styles.chartPaneContainer}>
        <ChartPane
          prefecturesPopulationCompositionData={
            prefecturesPopulationCompositionData
          }
        />
      </div>
      {errorCheckedPrefectures ? (
        <p>データの読み込みに失敗しました。</p>
      ) : isLoadingCheckedPrefectures ? (
        <p>読み込み中...</p>
      ) : null}
    </>
  );
};
