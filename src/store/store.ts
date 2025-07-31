import { create } from 'zustand';

interface IQueryState {
  query: string;
  userInputQuery: (userInput: string) => void;
}

export const useStore = create<IQueryState>((set) => ({
  query: '',
  userInputQuery: (userInput: string) => set(() => ({ query: userInput })),
}));
