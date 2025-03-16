import styles from './Product.module.css';
import { FaRegHeart } from 'react-icons/fa';
import productSkelentonImg from '/img/product_skelenton_img.png';

const Product = ({
  _id,
  height,
  name,
  description,
  price,
  likes = 240,
  images,
  tags,
}) => {
  function formatNumberWithComma(number) {
    return number.toLocaleString();
  }

  return (
    <li key={_id} className={styles.item}>
      <div className={styles.image_container} style={{ height: `${height}px` }}>
        {images ? (
          <img className={styles.product__img} src={images[0]} alt={name} />
        ) : (
          <img
            className={styles.product__skelenton__img}
            src={productSkelentonImg}
            alt={name}
          />
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {/* <span className={styles.description}>{description}</span> */}
        <span className={styles.price}>{formatNumberWithComma(price)} 원</span>
        <div className={styles.favorite}>
          <FaRegHeart />
          <span>{likes}</span>
        </div>
      </div>
    </li>
  );
};

export default Product;
