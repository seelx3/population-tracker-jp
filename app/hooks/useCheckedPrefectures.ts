import { atom, useAtom } from "jotai";

const checkedPrefecturesAtom = atom<number[]>([]);

export const useCheckedPrefectures = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useAtom(
    checkedPrefecturesAtom,
  );

  return {
    checkedPrefectures,
    setCheckedPrefectures,
  };
};
