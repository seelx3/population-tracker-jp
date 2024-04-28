"use client";

import { PopulationDataList } from "@/app/types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function Graph({
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
