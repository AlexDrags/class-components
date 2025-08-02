import { getDataNext, getDataPrev } from '../api/getData';
import type { IUniversities } from '../types/cards';

export async function handlePaginationPrev(
  universities: IUniversities,
  setUniversities: (prev: IUniversities) => void
) {
  const response = await getDataPrev();
  setUniversities(response);
}

export async function handlePaginationNext(
  universities: IUniversities,
  setUniversities: (prev: IUniversities) => void
) {
  const response = await getDataNext();
  setUniversities(response);
}
