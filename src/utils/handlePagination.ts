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
  const response = await getDataPrev();
  setUniversities(response);
}

export async function handlePaginationNext(
  universities: ICard[],
  setUniversities: (prev: ICard[]) => void
) {
  const response = await getDataNext();
  setUniversities(response);
}
