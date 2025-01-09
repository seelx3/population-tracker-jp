import style from "@/app/styles/popuTrackHeader.module.css";
import React from "react";

import { lusitana } from "@/app/ui/fonts";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export const PopuTrackHeader: React.FC = () => {
  return (
    <div className={`${lusitana.className} ${style.popuTrackHeader}`}>
      <ChartBarIcon className={style.popuTrackLogoIcon} />
      <p className={style.popuTrackLogoText}>都道府県別人口推移</p>
    </div>
  );
};
