import styles from './Index.module.css';
import BestProductList from './model/BestProductList';
import CommonProductList from './model/CommonProductList';

const UsedMarket = () => {
  return (
    <main className={styles.used_market}>
      <section className={styles.container}>
        <BestProductList />
        <CommonProductList />
      </section>
    </main>
  );
};

export default UsedMarket;
