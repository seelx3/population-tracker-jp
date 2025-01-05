"use client";

import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";
import { usePrefectures } from "../hooks/usePrefectures";

type Props = {
  checkedPrefectures: number[];
  updateCheckedPrefectures: (prefIdx: number) => void;
};

export const CheckBoxPane: React.FC<Props> = ({
  checkedPrefectures,
  updateCheckedPrefectures,
}) => {
  const { prefectures, error, isLoading } = usePrefectures();

  if (error) {
    return <p>データの読み込みに失敗しました。</p>;
  }

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  return (
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
                updateCheckedPrefectures(idx);
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
  );
};
