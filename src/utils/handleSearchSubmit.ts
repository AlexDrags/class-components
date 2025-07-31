import searchData from '../api/search';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

export async function handleSearchSubmit(
  queryString: string,
  universities: ICard[],
  setUniversities: (prev: ICard[]) => void
) {
  localStorage.setItem('lastSearch', queryString);
  const universitiesData: ICard[] | [] = await searchData(queryString);
  setUniversities(universitiesData);
}
