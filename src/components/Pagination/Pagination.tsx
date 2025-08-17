'use client';
import './style.css';
import Link from 'next/link';
import type { IUniversityCard } from '../types/cards';

export default function Pagination({
  resultLength,
}: {
  resultLength: IUniversityCard[];
}) {
  return (
    <div className="pagination">
      {resultLength.map((el, index) => (
        <Link key={index} href={`/pages/${index + 1}`}>
          {index + 1}
        </Link>
      ))}
    </div>
  );
}
