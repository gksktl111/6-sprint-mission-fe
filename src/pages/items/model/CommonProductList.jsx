import { useEffect, useState } from 'react';
import { productFetch } from '../api/productFetch';
import Product from '../ui/Product';
import styles from './CommonProductList.module.css';
import { FaCaretDown, FaSortAmountDown } from 'react-icons/fa';
import useDeviceType from '@hooks/useDeviceType';
import PaginationButton from './PaginationButton';
import { Link } from 'react-router-dom';

const COMMON_ITEM_HEIGHT = 220;

const PAGE_SIZE = 10;

const ORDER_LIST = ['최신순', '좋아요순'];

const COMMON_ITEM_DATA_PARAM = {
  page: 1,
  pageSize: PAGE_SIZE,
  orderBy: 'recent',
  keyword: '',
};

const CommonProductList = () => {
  const [commonItems, setCommonItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState(ORDER_LIST[0]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyWord] = useState('');

  const { isMobile } = useDeviceType();

  useEffect(() => {
    const fetchBestItems = async () => {
      const response = await productFetch({
        ...COMMON_ITEM_DATA_PARAM,
        page: currentPage,
        // orderBy: order === ORDER_LIST[0] ? 'favorite' : 'recent',
        keyWord: keyWord,
      });

      setCommonItems(response.list);
      setTotalPage(Math.ceil(response.totalCount / PAGE_SIZE));
    };

    fetchBestItems();
  }, [currentPage, order, keyWord]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOrderChange = (order) => {
    // setOrder(order);
    // setCurrentPage(1);
    setIsOpen(false);
  };

  const handleOnChange = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={isMobile ? styles.mobile_title_wrapper : ''}>
          <span className={styles.title}>판매 중인 상품</span>
          {isMobile && (
            <Link to='/registration'>
              <button className={styles.register_button}>상품 등록하기</button>
            </Link>
          )}
        </div>
        <div className={styles.actions}>
          <input
            className={styles.search_input}
            value={keyWord}
            onChange={handleOnChange}
            type='text'
            placeholder='검색어를 입력해주세요.'
          />
          {!isMobile && (
            <Link to='/registration'>
              <button className={styles.register_button}>상품 등록하기</button>
            </Link>
          )}
          <div>
            <button className={styles.order_dropdown} onClick={toggleDropdown}>
              {isMobile ? (
                <FaSortAmountDown />
              ) : (
                <>
                  <span>{order}</span>
                  <FaCaretDown />
                </>
              )}
            </button>
            {isOpen && (
              <ul className={styles.order_dropdown_list}>
                <li
                  onClick={() => handleOrderChange('최신순')}
                  style={{ borderBottom: '1px solid #e5e7eb' }}
                >
                  최신순
                </li>
                <li onClick={() => handleOrderChange('좋아요순')}>좋아요순</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {commonItems && (
        <ul className={styles.list}>
          {commonItems.map((item) => (
            <Product key={item._id} height={COMMON_ITEM_HEIGHT} {...item} />
          ))}
        </ul>
      )}

      <PaginationButton
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CommonProductList;
