import type { FormEvent } from 'react';
import searchData from '../api/search';
import type { IUniversities, IUniversityCard } from '../types/cards';

export async function handleSearchSubmit(
  evt: FormEvent,
  queryString: string,
  universities: IUniversities,
  setUniversities: (prev: IUniversityCard[]) => void
) {
  evt.preventDefault();
  localStorage.setItem('lastSearch', queryString);
  const universitiesData: IUniversityCard[] | [] =
    await searchData(queryString);
  setUniversities(universitiesData);
}
