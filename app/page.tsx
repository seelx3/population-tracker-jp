import styles from "@/app/styles/page.module.css";
import React from "react";

import { PopuTrackHeader } from "@/app/components/PopuTrackHeader";
import { PopuTrackPane } from "@/app/components/PopuTrackPane";

const Page: React.FC = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY not found.");
  }

  return (
    <div className={styles.root}>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <PopuTrackHeader />
        </div>
      </header>
      <main className={styles.mainWrapper}>
        <div className={styles.main}>
          <PopuTrackPane />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} seelx3</p>
      </footer>
    </div>
  );
};

export default Page;
