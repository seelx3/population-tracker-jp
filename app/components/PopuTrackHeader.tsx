import React from "react";
import { HiOutlineChartBar } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import style from "@/app/styles/popuTrackHeader.module.css";

import { lusitana } from "@/app/ui/fonts";

const GITHUB_URL = "https://github.com/seelx3/population-tracker-jp";

export const PopuTrackHeader: React.FC = () => {
  return (
    <div className={`${lusitana.className} ${style.header}`}>
      <div className={style.headerLogoWrapper}>
        <HiOutlineChartBar className={style.headerLogoIcon} />
        <p className={style.headerTitle}>都道府県別人口推移</p>
      </div>
      <div>
        <Link href={GITHUB_URL}>
          <div className={style.headerGithubIconContainer}>
            <FaGithub className={style.headerGithubIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
};
