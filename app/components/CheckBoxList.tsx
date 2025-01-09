import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";
import { useCheckedPrefectures } from "../hooks/useCheckedPrefectures";
import { usePrefectures } from "../hooks/usePrefectures";
import { usePrefecturesPopulationData } from "../hooks/usePrefecturesPopulationData";
import { CheckBox } from "./elements/CheckBox";

export const CheckBoxList: React.FC = () => {
  const {
    prefectures,
    error,
    isLoading: isLoadingPrefectures,
  } = usePrefectures();
  const { checkedPrefectures } = useCheckedPrefectures();
  const { isLoading: isLoadingData, updateCheckedPrefecturesData } =
    usePrefecturesPopulationData();

  if (error) {
    return <p>データの読み込みに失敗しました。</p>;
  }

  if (isLoadingPrefectures) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className={style.checkboxContainer}>
      {prefectures &&
        prefectures.map((prefecture, idx) => (
          <CheckBox
            key={prefecture.prefCode}
            prefecture={prefecture}
            idx={idx}
            isLoading={isLoadingData}
            checked={checkedPrefectures.includes(idx)}
            updateCheckedPrefecturesData={updateCheckedPrefecturesData}
          />
        ))}
    </div>
  );
};
