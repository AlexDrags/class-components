import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IQueryState {
  query: string;
  userInputQuery: (userInput: string) => void;
}
interface ICardDecsription {
  name: string;
  country: string;
  web_pages: string;
}

interface ICheckCardsState {
  checkedCards: ICardDecsription[];
  addToCheckedCards: (newCheckCard: ICardDecsription) => void;
  removeFromCheckCards: (id: string) => void;
  clearCheckedCards: () => void;
}

export const useStore = create<IQueryState>()(
  devtools(
    immer((set) => ({
      query: '',
      userInputQuery: (userInput: string) => set({ query: userInput }),
    }))
  )
);

export const useStoreStateCheckCards = create<ICheckCardsState>()(
  devtools(
    immer((set) => ({
      checkedCards: [],
      addToCheckedCards: (newCheckCard: ICardDecsription) =>
        set((state) => {
          state.checkedCards.push(newCheckCard);
        }),
      removeFromCheckCards: (id: string) =>
        set((state) => {
          const filterCards = state.checkedCards.filter(
            (item: ICardDecsription) => item.name !== id
          );
          state.checkedCards = filterCards;
        }),
      clearCheckedCards: () => set({ checkedCards: [] }),
    }))
  )
);
