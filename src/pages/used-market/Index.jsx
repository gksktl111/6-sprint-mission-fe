import styles from './Index.module.css';
import BestProductList from './model/BestProductList';
import CommonPorductList from './model/CommonPorductList';

const UsedMarket = () => {
  return (
    <section>
      <div className={styles.used_market__container}>
        <BestProductList />
        <CommonPorductList />
      </div>
    </section>
  );
};

export default UsedMarket;
