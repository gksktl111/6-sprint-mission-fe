import {
  getArticleList,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from './api/ArticleService.js';

import {
  getProductList,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './api/ProductService.js';

// 아티클 테스트
const aData = await getArticleList(1, 10, '');
console.log('getArticleList 데이터 : ', aData);

const aArticleData = {
  title: '새로운 게시글',
  content: '새로운 게시글 내용',
  image: 'https://via.placeholder.com/150',
};

const aTestNum = 36;

const aCreateArticleResult = await createArticle(aArticleData);
console.log('createArticle 데이터 : ', aCreateArticleResult);

const aArticle = await getArticle(aTestNum);
console.log('getArticle 데이터 : ', aArticle);

const aUpdateData = {
  title: '수정된 제목',
  content: '수정된 내용',
  image: '수정된이미지URL',
};

const aUpdateArticleResult = await updateArticle(aTestNum, aUpdateData); // 123은 수정할 게시글의 ID
console.log('수정된 게시글:', aUpdateArticleResult);

const aDeleteResult = await deleteArticle(aTestNum);
console.log(aDeleteResult, '게시글이 성공적으로 삭제되었습니다.');

// ----------------------------------------------------------------------

// 상품 목록 조회 테스트
const pData = await getProductList(1, 10, '');
console.log('getProductList 데이터 : ', pData);

// 상품 테스트
const pProductData = {
  name: '테스트 상품',
  description: '테스트 상품 설명',
  price: 15000,
  manufacturer: '테스트 제조사', // 필수 필드 추가
  tags: ['테스트', '신상품'],
  images: ['https://via.placeholder.com/150'],
};

const pCreateProductResult = await createProduct(pProductData);
console.log('createProduct 데이터 : ', pCreateProductResult);

// 특정 상품 조회 테스트
const pTestId = 28; // 실제 존재하는 상품 ID로 변경 필요
const pProduct = await getProduct(pTestId);
console.log('getProduct 데이터 : ', pProduct);

// 상품 수정 테스트
const pUpdateData = {
  name: '수정된 상품명',
  description: '수정된 상품 설명',
  price: 20000,
  manufacturer: '수정된 제조사', // 필수 필드 추가
  tags: ['수정됨', '할인상품'],
  images: ['https://via.placeholder.com/200'],
};

const pUpdateProductResult = await updateProduct(pTestId, pUpdateData);
console.log('수정된 상품:', pUpdateProductResult);

// 상품 삭제 테스트
const pDeleteResult = await deleteProduct(pTestId);
console.log(pDeleteResult, '상품이 성공적으로 삭제되었습니다.');
