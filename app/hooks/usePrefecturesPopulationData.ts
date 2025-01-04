import { Prefecture, PrefectureWithPopulationComposition } from "@/app/types";

import { getPrefecturePopulationCompositionData } from "@/app/lib/api";
import { useCallback, useState } from "react";

export const usePrefecturesPopulationData = (
  prefectures: Prefecture[] | undefined,
) => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([]);
  const [
    prefecturesPopulationCompositionData,
    setPrefecturesPopulationCompositionData,
  ] = useState<PrefectureWithPopulationComposition[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const updateCheckedPrefectures = useCallback(
    async (prefIdx: number) => {
      if (!prefectures) {
        return;
      }
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
          setError(null);
          setIsLoading(true);
          const newPrefectureCompositionData =
            await getPrefecturePopulationCompositionData(prefectures[prefIdx]);

          setPrefecturesPopulationCompositionData([
            ...prefecturesPopulationCompositionData,
            newPrefectureCompositionData,
          ]);
        } catch (error) {
          setError(error as Error);
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [checkedPrefectures, prefecturesPopulationCompositionData, prefectures],
  );

  return {
    prefecturesPopulationCompositionData,
    error,
    isLoading,
    updateCheckedPrefectures,
  };
};
