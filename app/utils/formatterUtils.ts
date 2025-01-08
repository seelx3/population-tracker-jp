const TEN_THOUSAND = 10000;

export const yAxisLabelFormatter = (value: number): string => {
  return Math.floor(value / TEN_THOUSAND) + "万";
};

export const populationFormatter = (value: number): string => {
  const divTenThousand = Math.floor(value / TEN_THOUSAND);
  const modTenThousand = value % TEN_THOUSAND;

  return (
    (value >= TEN_THOUSAND ? divTenThousand + "万" : "") +
    (modTenThousand > 0 ? modTenThousand : "")
  );
};
