import { getDataNext, getDataPrev } from '../api/getData';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

export async function handlePaginationPrev(
  universities: ICard[],
  setUniversities: (prev: ICard[]) => void
) {
  console.log(universities);
  const response = await getDataPrev();
  setUniversities(response);
  console.log(universities);
}

export async function handlePaginationNext(
  universities: ICard[],
  setUniversities: (prev: ICard[]) => void
) {
  console.log(universities);
  const response = await getDataNext();
  setUniversities(response);
  console.log(universities);
}
