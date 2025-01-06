import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { fetchPrefectures } from "../endpoints/prefectures";

const prefecturesAtom = atomWithQuery(() => ({
  queryKey: ["prefectures"],
  queryFn: fetchPrefectures,
  staleTime: 1000 * 60 * 60 * 1,
}));

export const usePrefectures = () => {
  const [{ data, error, isLoading }] = useAtom(prefecturesAtom);

  return {
    prefectures: data,
    error,
    isLoading,
  };
};
