const BASE_URL = 'https://sprint-mission-api.vercel.app';

async function getArticleList(page = 1, pageSize = 10, keyword = '') {
  //   console.log(
  //     `${baseUrl}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  //   );

  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log('성공: 게시글 목록 조회');
        return response.json();
      } else {
        throw new Error('Failed to fetch articles');
      }
    })
    .catch((e) => {
      throw e;
    });
}

async function getArticle(id = 0) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 게시글 조회');
        return response.json();
      } else if (response.status === 404) {
        throw new Error('존재하지 않는 게시글입니다.');
      }
    })
    .catch((e) => {
      throw e;
    });
}

async function createArticle(articleData) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 게시글 생성!');
        return response.json();
      } else if (response.status === 400) {
        throw new Error('유효성 검사 오류입니다');
      }
    })
    .catch((e) => {
      throw e;
    });
}

async function updateArticle(id, articleData) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 게시글 수정');
        return response.json();
      } else if (response.status === 404) {
        throw new Error('존재하지 않는 게시글입니다.');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

async function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('성공: 게시글 삭제');
        return response.status; // 204 상태코드 반환
      } else if (response.status === 404) {
        throw new Error('게시글을 찾을 수 없음');
      } else {
        throw new Error('게시글 삭제에 실패했습니다.');
      }
    })
    .catch((e) => {
      console.error(e);
      throw e;
    });
}

export {
  getArticleList,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
