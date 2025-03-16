const API_URL = 'https://panda-market-api.vercel.app';

const baseUrl =
  import.meta.env.MODE === 'production'
    ? 'https://six-sprint-mission-be.onrender.com'
    : 'http://localhost:3000';

export const productRegistration = async ({
  name = '',
  description = '',
  price = 0,
  tags = [],
}) => {
  const response = await fetch(`${baseUrl}/products/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      price,
      tags,
    }),
  });
  return await response.json();
};
