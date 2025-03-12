import styles from './HomeCard.module.css';

const HomeCard = ({ id, reverse, imgSrc, imgAlt, title, text, subtext }) => {
  return (
    <section key={id} className={styles.main}>
      <div
        className={
          reverse
            ? `${styles.main__content} ${styles.main__content__reverse}`
            : styles.main__content
        }
      >
        <div className={styles.main__img__wrapper}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div
          className={
            reverse
              ? `${styles.main__headline} ${styles.main__headline__reverse}`
              : styles.main__headline
          }
        >
          <span
            className={
              reverse
                ? `${styles.main__headline__title} ${styles.main__headline__title__reverse}`
                : styles.main__headline__title
            }
          >
            {title}
          </span>
          <span
            className={
              reverse
                ? `${styles.main__headline__text} ${styles.main__headline__text__reverse}`
                : styles.main__headline__text
            }
          >
            {text}
          </span>
          <span
            className={
              reverse
                ? `${styles.main__headline__subtext} ${styles.main__headline__subtext__reverse}`
                : styles.main__headline__subtext
            }
          >
            {subtext.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
