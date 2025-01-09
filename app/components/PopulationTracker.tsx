"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ChartPane } from "./ChartPane";
import { CheckBoxPane } from "./CheckBoxPane";
import { Notification } from "./Notification";

const queryClient = new QueryClient();

export const PopuTrackPane: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckBoxPane />
      <ChartPane />
      <Notification />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
