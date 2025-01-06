import { PrefectureWithPopulationComposition } from "@/app/types";

import { getPrefecturePopulationCompositionData } from "@/app/lib/api";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { useCheckedPrefectures } from "./useCheckedPrefectures";
import { usePrefectures } from "./usePrefectures";

export const prefecturesPopulationCompositionDataAtom = atom<
  PrefectureWithPopulationComposition[]
>([]);
const isLoadingAtom = atom<boolean>(false);
const errorAtom = atom<Error | null>(null);

export const usePrefecturesPopulationData = () => {
  const { prefectures } = usePrefectures();
  const { checkedPrefectures, setCheckedPrefectures } = useCheckedPrefectures();

  const [
    prefecturesPopulationCompositionData,
    setPrefecturesPopulationCompositionData,
  ] = useAtom(prefecturesPopulationCompositionDataAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [error, setError] = useAtom(errorAtom);

  const updateCheckedPrefecturesData = useCallback(
    async (prefIdx: number) => {
      if (!prefectures) {
        return;
      }
      setError(null);
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
        try {
          setIsLoading(true);

          const newPrefectureCompositionData =
            await getPrefecturePopulationCompositionData(prefectures[prefIdx]);

          setPrefecturesPopulationCompositionData([
            ...prefecturesPopulationCompositionData,
            newPrefectureCompositionData,
          ]);

          setCheckedPrefectures([...checkedPrefectures, prefIdx]);
        } catch (error) {
          setError(error as Error);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [prefectures, checkedPrefectures, prefecturesPopulationCompositionData],
  );

  return {
    prefecturesPopulationCompositionData,
    error,
    isLoading,
    updateCheckedPrefecturesData,
  };
};
