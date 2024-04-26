export type Prefectures = {
  prefCode: number;
  prefName: string;
};

export type PrefectureWithPopulationComposition = {
  prefCode: number;
  prefName: string;
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
};
