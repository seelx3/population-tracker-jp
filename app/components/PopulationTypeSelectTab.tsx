import React from "react";
import { PopulationTypeButton } from "./elements/PopulationTypeSelectButton";
import { useActiveKey } from "@/app/hooks/useActiveKey";
import style from "@/app/styles/populationTypeSelectTab.module.css";

const POPULATION_TYPES = [
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

export const PopulationTypeSelectTab: React.FC = () => {
  const { activeKey, setActiveKey } = useActiveKey();

  return (
    <ul className={style.chartTabUl}>
      {POPULATION_TYPES.map((content) => (
        <li key={content.key} className={style.chartTabLi}>
          <PopulationTypeButton
            content={content}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </li>
      ))}
    </ul>
  );
};
