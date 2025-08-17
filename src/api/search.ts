export default async function searchData(queryString: string) {
  try {
    const response = await fetch(
      queryString
        ? `http://universities.hipolabs.com/search?name=Middle&country=${queryString}`
        : 'http://universities.hipolabs.com/search?name=Middle&offset=0&limit=5',
      {
        method: 'GET',
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error response');
    }
  } catch (error) {
    console.log(error);
  }
}
