"use client";

import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";
import { useCheckedPrefectures } from "../hooks/useCheckedPrefectures";
import { usePrefectures } from "../hooks/usePrefectures";
import { usePrefecturesPopulationData } from "../hooks/usePrefecturesPopulationData";

export const CheckBoxPane: React.FC = () => {
  return (
    <>
      <h3>都道府県</h3>
      <CheckBoxList />
    </>
  );
};

const CheckBoxList: React.FC = () => {
  const { prefectures, error, isLoading } = usePrefectures();
  const { checkedPrefectures } = useCheckedPrefectures();
  const { updateCheckedPrefecturesData } = usePrefecturesPopulationData();

  if (error) {
    return <p>データの読み込みに失敗しました。</p>;
  }

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  return (
    <div className={style.checkBoxPaneContainer}>
      <div className={style.checkbox}>
        {prefectures &&
          prefectures.map((prefecture, idx) => (
            <div key={prefecture.prefCode} className={style.checkboxItem}>
              <input
                type="checkbox"
                checked={checkedPrefectures.includes(idx)}
                id={prefecture.prefName}
                className={style.checkboxInput}
                onChange={() => {
                  updateCheckedPrefecturesData(idx);
                }}
              />
              <label
                htmlFor={prefecture.prefName}
                className={style.checkboxLabel}
              >
                {prefecture.prefName}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};
