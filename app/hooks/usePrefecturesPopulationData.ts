import { PrefectureWithPopulationComposition } from "@/app/types";

import { getPrefecturePopulationCompositionData } from "@/app/lib/api";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { useCheckedPrefectures } from "./useCheckedPrefectures";
import { usePrefectures } from "./usePrefectures";

const prefecturesPopulationCompositionDataAtom = atom<
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
    [prefectures, checkedPrefectures, prefecturesPopulationCompositionData],
  );

  return {
    prefecturesPopulationCompositionData,
    error,
    isLoading,
    updateCheckedPrefecturesData,
  };
};
