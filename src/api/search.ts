export default async function searchData(queryString: string) {
  const response = await fetch(
    `http://universities.hipolabs.com/search?name=Middle&country=${queryString}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
