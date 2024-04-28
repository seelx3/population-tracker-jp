export type Prefectures = {
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
