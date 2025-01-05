"use client";

import styles from "@/app/styles/popuTrackPane.module.css";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  return (
    <>
      <h3>都道府県</h3>
      <CheckBoxPane />
      <h3>人口推移</h3>
      <div className={styles.chartPaneContainer}>
        <ChartPane />
      </div>
    </>
  );
};
