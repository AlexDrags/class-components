import { getDataPage } from '../api/getData';
import type { IUniversities } from '../types/cards';

export async function handlePagination(
  offset = '0',
  limit = '5',
  universities: IUniversities,
  setUniversities: (prev: IUniversities) => void
) {
  const response = await getDataPage(offset, limit);
  // setUniversities(response);
}
