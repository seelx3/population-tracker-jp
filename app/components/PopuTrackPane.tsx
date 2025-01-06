"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";

const queryClient = new QueryClient();

export const PopuTrackPane: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckBoxPane />
      <ChartPane />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
