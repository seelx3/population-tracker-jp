"use client";

import { PrefectureWithPopulationComposition } from "@/app/types";

interface Props {
  checkedPrefectures: number[];
  prefecturesPopulationCompositionData: PrefectureWithPopulationComposition[];
}

export function ChartPane({
  checkedPrefectures,
  prefecturesPopulationCompositionData,
}: Props) {
  // useEffect(() => {
  //   console.log(checkedPrefectures);
  // }, [checkedPrefectures]);

  // useEffect(() => {
  //   console.log(prefecturesPopulationCompositionData);
  // }, [prefecturesPopulationCompositionData]);

  return (
    <div>
      <p>TODO: add chart</p>
    </div>
  );
}
