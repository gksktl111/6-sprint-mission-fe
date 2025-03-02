import styles from './Index.module.css';
import BestProductList from './model/BestProductList';
import CommonProductList from './model/CommonProductList';

const UsedMarket = () => {
  return (
    <section>
      <div className={styles.used_market__container}>
        <BestProductList />
        <CommonProductList />
      </div>
    </section>
  );
};

export default UsedMarket;
