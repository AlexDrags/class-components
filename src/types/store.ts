import type { IUniversityCard } from './cards';

export interface IQueryState {
  query: string;
  userInputQuery: (userInput: string) => void;
}

export interface ICheckCardsState {
  checkedCards: IUniversityCard[];
  addToCheckedCards: (newCheckCard: IUniversityCard) => void;
  removeFromCheckCards: (id: string) => void;
  clearCheckedCards: () => void;
}
