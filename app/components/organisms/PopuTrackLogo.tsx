import style from "@/app/styles/styles.module.css";

import { lusitana } from "@/app/ui/fonts";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export function PopuTrackLogo() {
  return (
    <div className={`${lusitana.className} ${style.popuTrackLogo}`}>
      <ChartBarIcon className={style.popuTrackLogoIcon} />
      <p className={style.popuTrackLogoText}>都道府県別人口推移</p>
    </div>
  );
}
