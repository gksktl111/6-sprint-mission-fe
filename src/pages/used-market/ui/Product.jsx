import styles from './Product.module.css';
import { FaRegHeart } from 'react-icons/fa';

const Product = ({
  id,
  height,
  name,
  description,
  price,
  favoriteCount,
  images,
}) => {
  function formatNumberWithComma(number) {
    return number.toLocaleString();
  }

  return (
    <li key={id} className={styles.item}>
      <div className={styles.image_container} style={{ height: `${height}px` }}>
        <img src={images[0]} alt={name} />
      </div>
      <div className={styles.info}>
        <span className={styles.description}>{description}</span>
        <span className={styles.price}>{formatNumberWithComma(price)} 원</span>
        <div className={styles.favorite}>
          <FaRegHeart />
          <span>{favoriteCount}</span>
        </div>
      </div>
    </li>
  );
};

export default Product;
