import axios from "axios";
import useSWR from "swr";
import { Prefecture } from "../types";

async function fetcher(key: string): Promise<Prefecture[]> {
  return axios
    .get(key)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("都道府県情報の取得に失敗しました");
    });
}

export const usePrefectures = () => {
  const { data, error, isLoading } = useSWR("/api/prefectures", fetcher);

  return {
    prefectures: data,
    error,
    isLoading,
  };
};
