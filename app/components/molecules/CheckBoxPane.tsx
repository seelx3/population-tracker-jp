"use client";

import style from "@/app/styles/styles.module.css";

type Prefectures = {
  prefCode: number;
  prefName: string;
};

interface Props {
  prefectures: Prefectures[];
  checkboxHandler: (prefIdx: number) => void;
}

export function CheckBoxPane({ prefectures, checkboxHandler }: Props) {
  return (
    <div className={style.checkbox}>
      {prefectures.map((prefecture, idx) => (
        <div key={prefecture.prefCode} className={style.checkboxItem}>
          <input
            type="checkbox"
            id={prefecture.prefName}
            onChange={() => {
              checkboxHandler(idx);
            }}
          />
          <label htmlFor={prefecture.prefName} className={style.checkboxLabel}>
            {prefecture.prefName}
          </label>
        </div>
      ))}
    </div>
  );
}
