import { Prefecture, PrefectureWithPopulationComposition } from "@/app/types";

import { getPrefecturePopulationCompositionData } from "@/app/lib/api";
import { useCallback, useState } from "react";

export const usePrefecturesPopulationData = (prefectures: Prefecture[]) => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([]);
  const [
    prefecturesPopulationCompositionData,
    setPrefecturesPopulationCompositionData,
  ] = useState<PrefectureWithPopulationComposition[]>([]);

  const updateCheckedPrefectures = useCallback(
    async (prefIdx: number) => {
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
        try {
          const newPrefectureCompositionData =
            await getPrefecturePopulationCompositionData(prefectures[prefIdx]);

          setPrefecturesPopulationCompositionData([
            ...prefecturesPopulationCompositionData,
            newPrefectureCompositionData,
          ]);
        } catch (error) {
          console.error(error);
        }
      }
    },
    [checkedPrefectures, prefecturesPopulationCompositionData, prefectures],
  );

  return { updateCheckedPrefectures, prefecturesPopulationCompositionData };
};
