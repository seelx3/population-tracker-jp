"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {
  PopulationData,
  PrefectureWithPopulationComposition,
} from "@/app/types";
import { useEffect, useState } from "react";

type PopulationDataList = {
  prefName: string;
  populationData: PopulationData[];
}[];

interface Props {
  checkedPrefectures: number[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

function Graph({
  populationDataList,
}: {
  populationDataList: PopulationDataList;
}) {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories: string[] = [];

  populationDataList.forEach((data) => {
    const traceData: number[] = [];
    data.populationData.forEach((populationData) => {
      categories.push(populationData.year.toString());
      traceData.push(populationData.value);
    });

    series.push({
      type: "line",
      name: data.prefName,
      data: traceData,
    });
  });

  const options: Highcharts.Options = {
    title: {
      text: "人口推移",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export function ChartPane({
  checkedPrefectures,
  prefecturesPopulationCompositionData,
}: Props) {
  const [
    checkedPrefecturesPopulationDataList,
    setCheckedPrefecturesPopulationDataList,
  ] = useState<PopulationDataList>([]);

  useEffect(() => {
    const checkedPrefecturesPopulationDataList: PopulationDataList = [];
    checkedPrefectures.forEach((checkedIdx) => {
      const prefCode = checkedIdx + 1;
      const prefecture = prefecturesPopulationCompositionData.find(
        (data) => data.prefCode === prefCode,
      );
      if (prefecture) {
        checkedPrefecturesPopulationDataList.push({
          prefName: prefecture.prefName,
          populationData: prefecture.totalPopulationData,
        });
      }
    });
    setCheckedPrefecturesPopulationDataList(
      checkedPrefecturesPopulationDataList,
    );
    console.log(checkedPrefecturesPopulationDataList);
  }, [checkedPrefectures, prefecturesPopulationCompositionData]);

  return <Graph populationDataList={checkedPrefecturesPopulationDataList} />;
}
