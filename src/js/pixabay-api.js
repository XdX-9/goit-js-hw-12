import axios from 'axios';

const api = '54028889-2cc77c36b1263169d392db777';

const getImagesByQuery = async (query, page) => {
  const queryResult = await axios({
    method: 'get',
    baseURL: 'https://pixabay.com/',
    url: 'api/',
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: api,
      q: query,
      per_page: 15,
      page: page,
    },
  });

  return queryResult.data;
};

export default getImagesByQuery;
