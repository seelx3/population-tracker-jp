import styles from "@/app/styles/page.module.css";
import React from "react";

import { PopuTrackLogo } from "./components/organisms/PopuTrackLogo";
import { PopuTrackPane } from "./components/organisms/PopuTrackPane";

const Page: React.FC = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY not found.");
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <PopuTrackLogo />
        </div>
        <PopuTrackPane />
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} seelx3</p>
        </footer>
      </div>
    </main>
  );
};

export default Page;
