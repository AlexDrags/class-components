export default async function searchData(formData: string) {
  const response = await fetch(
    `http://universities.hipolabs.com/search?name=Middle&country=${formData}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
