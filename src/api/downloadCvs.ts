'use server';
import type { IUniversityCard } from '../types/cards';

export default async function downloadCvs(data: IUniversityCard[]) {
  const csvData = data.map((payment) => {
    return [
      payment.name + ',' + payment.country + ',' + payment.web_pages + '\n',
    ];
  });
  const csvContent = csvData.join('');
  return csvContent;
}
