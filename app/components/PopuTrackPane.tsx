"use client";

import { usePrefectures } from "@/app/hooks/usePrefectures";
import { usePrefecturesPopulationData } from "@/app/hooks/usePrefecturesPopulationData";
import styles from "@/app/styles/popuTrackPane.module.css";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  const {
    prefectures,
    error,
    isLoading: isLoadingPrefectures,
  } = usePrefectures();
  const {
    updateCheckedPrefectures,
    prefecturesPopulationCompositionData,
    error: errorCheckedPrefectures,
    isLoading: isLoadingCheckedPrefectures,
  } = usePrefecturesPopulationData(prefectures);

  return (
    <>
      <h3>都道府県</h3>
      {error ? (
        <p>データの読み込みに失敗しました。</p>
      ) : isLoadingPrefectures ? (
        <p>読み込み中...</p>
      ) : (
        <div className={styles.checkboxContainer}>
          <CheckBoxPane
            prefectures={prefectures}
            updateCheckedPrefectures={updateCheckedPrefectures}
          />
        </div>
      )}
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
