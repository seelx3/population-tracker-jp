export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  value: number;
  rate: number;
};

export type PopulationDataList = {
  prefName: string;
  populationData: PopulationData[];
}[];

export type PrefectureWithPopulationComposition = {
  prefCode: number;
  prefName: string;
  boundaryYear: number;
  totalPopulationData: PopulationData[];
  youngPopulationData: PopulationData[];
  productivePopulationData: PopulationData[];
  elderlyPopulationData: PopulationData[];
};

export type PrefecturesAPIResponse = {
  message: string;
  result: Prefecture[];
};

export type PopulationCompositionAPIResponse = {
  message: string;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
        rate: number;
      }[];
    }[];
  };
};
