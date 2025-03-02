const API_URL = 'https://panda-market-api.vercel.app';

export const productFetch = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) => {
  const response = await fetch(
    `${API_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
};
