export type Prefectures = {
  prefCode: number;
  prefName: string;
};

type PopulationData = {
  year: number;
  value: number;
  rate: number;
};

export type PrefectureWithPopulationComposition = {
  prefCode: number;
  prefName: string;
  boundaryYear: number;
  totalPopulationData: PopulationData[];
  youngPopulationData: PopulationData[];
  workingAgePopulationData: PopulationData[];
  elderlyPopulationData: PopulationData[];
};
