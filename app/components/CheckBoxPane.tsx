"use client";

import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";

type Prefecture = {
  prefCode: number;
  prefName: string;
};

type Props = {
  prefectures: Prefecture[] | undefined;
  checkedPrefectures: number[];
  updateCheckedPrefectures: (prefIdx: number) => void;
};

export const CheckBoxPane: React.FC<Props> = ({
  prefectures,
  checkedPrefectures,
  updateCheckedPrefectures,
}) => {
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
