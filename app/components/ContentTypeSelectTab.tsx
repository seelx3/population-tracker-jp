import React from "react";
import { ContentTypeButton } from "./elements/ContentTypeSelectButton";
import { useActiveKey } from "@/app/hooks/useActiveKey";
import style from "@/app/styles/contentTypeSelectTab.module.css";

const CONTENTS = [
  {
    key: "total",
    label: "総人口",
  },
  {
    key: "young",
    label: "年少人口",
  },
  {
    key: "productive",
    label: "生産年齢人口",
  },
  {
    key: "elderly",
    label: "老年人口",
  },
];

export const ContentTypeSelectTab: React.FC = () => {
  const { activeKey, setActiveKey } = useActiveKey();

  return (
    <ul className={style.chartTabUl}>
      {CONTENTS.map((content) => (
        <li key={content.key} className={style.chartTabLi}>
          <ContentTypeButton
            content={content}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </li>
      ))}
    </ul>
  );
};
