"use client";

import { Prefectures } from "@/app/types";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

import styles from "@/app/styles/styles.module.css";

interface Props {
  prefectures: Prefectures[];
}

export function PopuTrackPane({ prefectures }: Props) {
  return (
    <>
      <div className={styles.checkbox}>
        <CheckBoxPane prefectures={prefectures} />
      </div>
      <div className={styles.chartPane}>
        <ChartPane />
      </div>
    </>
  );
}
