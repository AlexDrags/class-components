async function getDataPrev() {
  try {
    const response = await fetch(
      'http://universities.hipolabs.com/search?name=Middle&offset=1&limit=5',
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

async function getDataNext() {
  try {
    const response = await fetch(
      'http://universities.hipolabs.com/search?name=Middle&offset=2&limit=5',
      {
        method: 'GET',
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getError() {
  try {
    const response = await fetch(
      'http://niversities.hipolabs.com/search?name=Middle&offset=2&limit=5',
      {
        method: 'GET',
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export { getDataPrev, getDataNext, getError };
