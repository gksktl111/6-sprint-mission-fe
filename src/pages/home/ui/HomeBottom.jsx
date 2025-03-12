import styles from './HomeBottom.module.css';

const HomeBottom = () => {
  return (
    <section className={styles.bottom}>
      <div className={styles.bottom__content}>
        <div className={styles.bottom__left}>
          <p>믿을 수 있는</p>
          <p>판다마켓 중고 거래</p>
        </div>
        <div className={styles.bottom__right}>
          <img src='./img/Img_home_bottom.png' alt='배너 이미지' />
        </div>
      </div>
    </section>
  );
};

export default HomeBottom;
