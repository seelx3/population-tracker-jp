"use client";

import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

import styles from "@/app/styles.module.css";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

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
