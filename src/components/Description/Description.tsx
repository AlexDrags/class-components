import './style.css';
interface IDecsription {
  description: {
    name: string;
    country: string;
    web_pages: string;
  };
}
export default function Description({ description }: IDecsription) {
  return (
    <div className="description">
      <h2>Description:</h2>
      <div className="wrapper-description">
        <p>Name of universities: {description.name}</p>
        <p>Country: {description.country}</p>
        <p>Web-page: {description.web_pages}</p>
      </div>
    </div>
  );
}
