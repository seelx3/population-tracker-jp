import axios from "axios";
import { Prefecture } from "../types";

const PREFECTURES_API = "/api/prefectures";

export const fetchPrefectures = async (): Promise<Prefecture[]> => {
  const response = await axios
    .get(PREFECTURES_API)
    .then((res) => res.data.result)
    .catch(() => {
      throw new Error("都道府県情報の取得に失敗しました");
    });
  return response;
};
