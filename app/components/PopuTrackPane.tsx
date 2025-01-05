"use client";

import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

export const PopuTrackPane: React.FC = () => {
  return (
    <>
      <CheckBoxPane />
      <ChartPane />
    </>
  );
};
