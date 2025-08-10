import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type {
  IQueryState,
  ICheckCardsState,
  ICountPageState,
} from '../types/store';
import type { IUniversityCard } from '../types/cards';

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
      addToCheckedCards: (newCheckCard: IUniversityCard) =>
        set((state) => {
          state.checkedCards.push(newCheckCard);
        }),
      removeFromCheckCards: (id: string) =>
        set((state) => {
          const filterCards = state.checkedCards.filter(
            (item: IUniversityCard) => item.name !== id
          );
          state.checkedCards = filterCards;
        }),
      clearCheckedCards: () => set({ checkedCards: [] }),
    }))
  )
);

export const useStorePageCountCards = create<ICountPageState>()(
  devtools(
    immer((set) => ({
      countPages: 0,
      incrementCountPage: (n) =>
        set((state) => {
          state.countPages = n;
        }),
      decrementCountPage: (n) =>
        set((state) => {
          state.countPages = n;
        }),
    }))
  )
);
