import axios from "axios";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { Prefecture } from "../types";

const PREFECTURES_API = "/api/prefectures";

const prefecturesAtom = atomWithQuery(() => ({
  queryKey: ["prefectures"],
  queryFn: async (): Promise<Prefecture[]> => {
    const response = await axios
      .get(PREFECTURES_API)
      .then((res) => res.data.result)
      .catch(() => {
        throw new Error("都道府県情報の取得に失敗しました");
      });
    return response;
  },
}));

export const usePrefectures = () => {
  const [{ data, error, isLoading }] = useAtom(prefecturesAtom);

  return {
    prefectures: data,
    error,
    isLoading,
  };
};
