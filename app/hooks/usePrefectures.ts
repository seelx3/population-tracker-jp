import { useEffect, useState } from "react";
import { getPrefectures } from "../lib/api";
import { Prefecture } from "../types";

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const prefectures = await getPrefectures();
        setPrefectures(prefectures);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return prefectures;
};
