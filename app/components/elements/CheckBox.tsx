import style from "@/app/styles/checkBox.module.css";
import { Prefecture } from "@/app/types";
import PropTypes from "prop-types";
import React from "react";

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

CheckBox.propTypes = {
  prefecture: PropTypes.shape({
    prefCode: PropTypes.number.isRequired,
    prefName: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  updateCheckedPrefecturesData: PropTypes.func.isRequired,
};
