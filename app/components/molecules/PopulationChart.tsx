"use client";

import { PopulationDataList } from "@/app/types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Accessibility from "highcharts/modules/accessibility";

if (typeof Highcharts === "object") {
  Accessibility(Highcharts);
}

export function PopulationChart({
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
      labels: {
        formatter: function () {
          return Number(this.value) / 10000 + "万";
        },
      },
    },
    series,
    accessibility: {
      description: "都道府県別の人口推移を示すグラフ",
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
