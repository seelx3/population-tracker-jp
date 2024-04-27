"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {
  PopulationData,
  PrefectureWithPopulationComposition,
} from "@/app/types";

interface Props {
  checkedPrefectures: number[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

function Graph({
  prefName,
  populationData,
}: {
  prefName: string;
  populationData: PopulationData[];
}) {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories: string[] = [];
  const traceData: number[] = [];

  populationData.forEach((data) => {
    categories.push(data.year.toString());
    traceData.push(data.value);
  });

  series.push({
    type: "line",
    name: prefName,
    data: traceData,
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
  return (
    <div>
      <Graph
        prefName="北海道"
        populationData={
          prefecturesPopulationCompositionData[0].totalPopulationData
        }
      />
    </div>
  );
}
