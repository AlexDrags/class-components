export interface IUniversityCard {
  name: string;
  country: string;
  web_pages: string;
}

export interface IUniversities {
  universities: IUniversityCard[];
}

export interface ISetUniversities extends IUniversities {
  setUniversities: (prev: IUniversityCard[]) => void;
}

export interface ICardDecsription extends IUniversityCard {
  setDescription: (description: IUniversityCard) => void;
}
