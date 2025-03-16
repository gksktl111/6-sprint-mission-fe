import styles from './Index.module.css';
import CommonProductList from './model/CommonProductList';
// import BestProductList from './model/BestProductList';

const Items = () => {
  return (
    <main className={styles.items}>
      <section className={styles.container}>
        {/* <BestProductList /> */}
        <CommonProductList />
      </section>
    </main>
  );
};

export default Items;
