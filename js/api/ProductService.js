const BASE_URL = 'https://sprint-mission-api.vercel.app';

async function getProductList(page = 1, pageSize = 10, keyword = '') {
  return fetch(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log('성공: 상품 목록 조회');
        return response.json();
      } else {
        throw new Error('Failed to fetch products');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

async function getProduct(id) {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 상품 조회');
        return response.json();
      } else if (response.status === 404) {
        throw new Error('존재하지 않는 상품입니다.');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

async function createProduct(productData) {
  return fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 상품 생성');
        return response.json();
      } else if (response.status === 400) {
        throw new Error('유효성 검사 오류입니다');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

async function updateProduct(id, productData) {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 상품 수정');
        return response.json();
      } else if (response.status === 404) {
        throw new Error('존재하지 않는 상품입니다.');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

async function deleteProduct(id) {
  return fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 상품 삭제');
        return response.status; // 204 상태코드 반환
      } else if (response.status === 404) {
        throw new Error('상품을 찾을 수 없음');
      } else {
        throw new Error('상품 삭제에 실패했습니다.');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

export {
  getProductList,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
