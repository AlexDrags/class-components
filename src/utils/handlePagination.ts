import { getDataPage } from '../api/getData';

export async function handlePagination(offset = '0', limit = '5') {
  const response = await getDataPage(offset, limit);
  console.log('handlePagination result: ', response);
}
