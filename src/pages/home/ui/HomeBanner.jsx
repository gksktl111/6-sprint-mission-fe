import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.banner__left}>
          <span className={styles.banner__headline}>
            일상의 모든 물건을 거래해 보세요
          </span>
          <a href='/page/items.html' className={styles.banner__btn}>
            구경하러 가기
          </a>
        </div>

        <div className={styles.banner__right}>
          <img src='./img/Img_home_top.png' alt='배너 이미지' />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
