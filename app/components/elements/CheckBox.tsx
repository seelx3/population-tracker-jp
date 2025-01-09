import React from "react";
import style from "@/app/styles/checkBox.module.css";
import { Prefecture } from "@/app/types";

type Props = {
  prefecture: Prefecture;
  idx: number;
  isLoading: boolean;
  checked: boolean;
  updateCheckedPrefecturesData: (idx: number) => void;
};

export const CheckBox: React.FC<Props> = ({
  prefecture,
  idx,
  isLoading,
  checked,
  updateCheckedPrefecturesData,
}) => {
  return (
    <div className={style.checkboxItem}>
      <input
        disabled={isLoading}
        type="checkbox"
        checked={checked}
        id={prefecture.prefName}
        className={style.checkboxInput}
        onChange={() => {
          updateCheckedPrefecturesData(idx);
        }}
      />
      <label htmlFor={prefecture.prefName}>{prefecture.prefName}</label>
    </div>
  );
};
