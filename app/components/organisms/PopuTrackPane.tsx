"use client";

import {
  Prefecture,
  PrefectureWithPopulationComposition,
  RESASPopulationComposition,
} from "@/app/types";

import styles from "@/app/styles/popuTrackPane.module.css";
import { useEffect, useState } from "react";
import { ChartPane } from "../molecules/ChartPane";
import { CheckBoxPane } from "../molecules/CheckBoxPane";

const POPULATION_TOTAL = "総人口";
const POPULATION_YOUNG = "年少人口";
const POPULATION_PRODUCTIVE = "生産年齢人口";
const POPULATION_ELDERLY = "老年人口";

async function getPrefecturePopulationCompositionData(
  prefecture: Prefecture,
): Promise<PrefectureWithPopulationComposition> {
  const populationComposition: RESASPopulationComposition = await fetch(
    `/api/population/composition/perYear?prefCode=${prefecture.prefCode}`,
  ).then((res) => res.json());

  return {
    prefCode: prefecture.prefCode,
    prefName: prefecture.prefName,
    boundaryYear: populationComposition.result.boundaryYear,
    totalPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_TOTAL,
      )?.data || [],
    youngPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_YOUNG,
      )?.data || [],
    productivePopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_PRODUCTIVE,
      )?.data || [],
    elderlyPopulationData:
      populationComposition.result.data.find(
        (data) => data.label === POPULATION_ELDERLY,
      )?.data || [],
  };
}

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

      const newPrefectureCompositionData =
        await getPrefecturePopulationCompositionData(prefectures[prefIdx]);

      setPrefecturesPopulationCompositionData([
        ...prefecturesPopulationCompositionData,
        newPrefectureCompositionData,
      ]);
    }
  };

  useEffect(() => {
    const fetchPrefectures = async () => {
      const prefecturesData = await fetch("/api/prefectures").then((res) =>
        res.json(),
      );
      setPrefectures(prefecturesData.result);
    };
    fetchPrefectures();
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
