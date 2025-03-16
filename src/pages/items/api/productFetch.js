const API_URL = 'https://panda-market-api.vercel.app';

const baseUrl =
  import.meta.env.MODE === 'production'
    ? 'https://six-sprint-mission-be.onrender.com'
    : 'http://localhost:3000';

export const productFetch = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyWord = '',
}) => {
  console.log(keyWord);

  const response = await fetch(
    `${baseUrl}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyWord=${keyWord}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
};
