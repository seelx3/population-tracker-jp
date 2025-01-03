import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { getPrefectures } from "../lib/api";
import { Prefecture } from "../types";

const prefecturesAtom = atom<Prefecture[]>([]);

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useAtom(prefecturesAtom);

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
