import style from "@/app/styles/checkBoxPane.module.css";
import React from "react";
import { CheckBoxList } from "./CheckBoxList";

export const CheckBoxPane: React.FC = () => {
  return (
    <>
      <h3>都道府県</h3>
      <div className={style.checkBoxListContainer}>
        <CheckBoxList />
      </div>
    </>
  );
};
