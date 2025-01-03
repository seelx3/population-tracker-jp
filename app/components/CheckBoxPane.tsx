"use client";

import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

type Props = {
  prefectures: Prefectures[] | undefined;
  updateCheckedPrefectures: (prefIdx: number) => void;
};

export const CheckBoxPane: React.FC<Props> = ({
  prefectures,
  updateCheckedPrefectures,
}) => {
  return (
    <div className={style.checkbox}>
      {prefectures &&
        prefectures.map((prefecture, idx) => (
          <div key={prefecture.prefCode} className={style.checkboxItem}>
            <input
              type="checkbox"
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
