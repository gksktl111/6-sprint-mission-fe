import { useState } from 'react';
import styles from './BestProductList.module.css';
import { useEffect } from 'react';
import { productFetch } from '../api/productFetch';
import Product from '../ui/Product';

const BEST_ITEM_DATA_PARAM = {
  page: 1,
  pageSize: 4,
  orderBy: 'favorite',
  keyword: '',
};

const BEST_ITEM_HEIGHT = 300;

const BestProductList = () => {
  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    const fetchBestItems = async () => {
      const response = await productFetch(BEST_ITEM_DATA_PARAM);
      setBestItems(response.list);
    };

    fetchBestItems();
  }, []);

  return (
    <div>
      <span className={styles.title}>베스트 상품</span>

      <ul className={styles.list}>
        {bestItems.map((item) => (
          <Product key={item.id} height={BEST_ITEM_HEIGHT} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default BestProductList;
