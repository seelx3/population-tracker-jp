import React from "react";
import style from "@/app/styles/populationTypeButton.module.css";

type Props = {
  content: {
    key: string;
    label: string;
  };
  activeKey: string;
  setActiveKey: (key: string) => void;
};

export const PopulationTypeButton: React.FC<Props> = ({
  content,
  activeKey,
  setActiveKey,
}) => {
  return (
    <button
      className={`${style.chartTabButton} ${
        content.key === activeKey
          ? style.chartTabButtonActive
          : style.chartTabButtonInactive
      }`}
      onClick={() => setActiveKey(content.key)}
    >
      {content.label}
    </button>
  );
};
