import style from "@/app/styles/contentTypeButton.module.css";
import React from "react";

type ContentTypeButtonProps = {
  content: {
    key: string;
    label: string;
  };
  activeKey: string;
  setActiveKey: (key: string) => void;
};

export const ContentTypeButton: React.FC<ContentTypeButtonProps> = ({
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
