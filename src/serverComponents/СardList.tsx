// 'use client';
// import './style.css';
// import { usePathname } from 'next/navigation';
// import { use, useState } from 'react';
// import { useRouter } from 'next/navigation';

// import type { IUniversityCard } from '../types/cards';
// import Card from '../components/Card/Card';

// import Description from '../components/Description/Description';

// export default function CardList({ cards }: { cards: IUniversityCard[] }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const countCardsPerPage = 5;
//   // const cardList = use(cards);
//   const [description, setDescription] = useState<IUniversityCard | null>(null);
//   router.push('/pages/1');
//   return (
//     <section className="item-list">
//       {/* <p>Current pathname: {pathname}</p>
//       <ul className="card-item">
//         {cards.map(({ name, country, web_pages }: IUniversityCard, index) => {
//           if (index < countCardsPerPage)
//             return (
//               <Card
//                 key={name}
//                 name={name}
//                 country={country}
//                 web_pages={web_pages}
//                 setDescription={setDescription}
//               />
//             );
//         })}
//       </ul>
//       {description && (
//         <div className="wrapper-description">
//           <Description description={description} />{' '}
//           <button onClick={() => setDescription(null)}>
//             Close description
//           </button>
//         </div>
//       )} */}
//     </section>
//   );
// }
