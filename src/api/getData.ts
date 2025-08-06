async function getData() {
  try {
    const response = await fetch(
      'http://universities.hipolabs.com/search?name=Middle',
      {
        method: 'GET',
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      console.log('fnGetData: ', data);

      return data;
    } else {
      throw new Error('Test error');
    }
  } catch (error) {
    console.log(error);
  }
}

async function getDataPage(offset = '0', limit = '5') {
  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=Middle&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Test error');
    }
  } catch (error) {
    console.log(error);
  }
}

export { getData, getDataPage };
