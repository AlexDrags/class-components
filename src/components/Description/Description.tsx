import './style.css';
import type { IUniversityCard } from '../../types/description';
export default function Description({
  name,
  country,
  web_pages,
}: IUniversityCard) {
  return (
    <div className="description">
      <h2>Description:</h2>
      <div className="wrapper-description">
        <p>Name of universities: {name}</p>
        <p>Country: {country}</p>
        <p>Web-page: {web_pages}</p>
      </div>
    </div>
  );
}
