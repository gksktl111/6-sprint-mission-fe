import { useRef, useState } from 'react';
import styles from './Index.module.css';
import { productRegistration } from './api/productRegistration';
import useValidation from '@hooks/useValidation';
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    tags: [],
  });

  const [inputTag, setInputTag] = useState('');

  const { isName, isDescription, isPrice, isTags, isAllCheck } = useValidation(
    'product',
    formData
  );

  const [isTagValidation, setIsTagValidation] = useState(true);

  const inputRef = {
    nameRef: useRef(null),
    descriptionRef: useRef(null),
    priceRef: useRef(null),
    tagRef: useRef(null),
  };

  const onKeydownEnterAndTabNextInput = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();

      switch (e.target.name) {
        case 'name':
          inputRef.descriptionRef.current.focus();
          break;
        case 'description':
          inputRef.priceRef.current.focus();
          break;
        case 'price':
          inputRef.tagRef.current.focus();
          break;
      }
    }
  };

  const onChangeInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeTagInput = (e) => {
    const tag = e.target.value;

    setInputTag(tag);
  };

  const onKeydownEnterTagsAdd = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!inputTag || formData.tags.includes(inputTag)) {
        alert('태그가 비었거나 이미 존재하는 태그입니다.');
        setInputTag('');
        return;
      }

      if (inputTag.length > 5) {
        setIsTagValidation(false);
        return;
      } else {
        setIsTagValidation(true);
      }

      setFormData((prev) => ({ ...prev, tags: [...prev.tags, inputTag] }));

      setInputTag('');
    }
  };

  const onClickTagsDelete = (e, currenTag) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== currenTag),
    }));
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const result = await productRegistration(formData);

    const itemId = result._id;

    console.log(itemId);

    if (itemId) {
      navigate(`/items/${itemId}`);
    }
  };

  return (
    <main className={styles.registration}>
      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmitRegister}>
          <div className={styles.header}>
            <span className={styles.form__title}>상품 등록하기</span>
            <button
              className={styles.register__btn}
              disabled={!isAllCheck}
              type='submit'
            >
              등록
            </button>
          </div>

          <div className={styles.input__container}>
            <span className={styles.input__title}>상품명</span>
            <input
              className={isName ? styles.input : styles.input__error}
              name='name'
              type='text'
              required
              value={formData.productName}
              ref={inputRef.nameRef}
              placeholder='상품명을 입력해주세요.'
              onChange={onChangeInputData}
              onKeyDown={onKeydownEnterAndTabNextInput}
            />
            {!isName && (
              <span className={styles.validation}>
                10자 이내로 입력해주세요
              </span>
            )}
          </div>

          <div className={styles.input__container}>
            <span className={styles.input__title}>상품 소개</span>
            <textarea
              className={
                isDescription
                  ? styles.input__description
                  : styles.input__description__error
              }
              name='description'
              type='text'
              required
              value={formData.description}
              ref={inputRef.descriptionRef}
              placeholder='상품 소개를 입력해주세요.'
              onChange={onChangeInputData}
              onKeyDown={onKeydownEnterAndTabNextInput}
            />
            {!isDescription && (
              <span className={styles.validation}>10자 이상 입력해주세요</span>
            )}
          </div>

          <div className={styles.input__container}>
            <span className={styles.input__title}>판매가격</span>
            <input
              className={isPrice ? styles.input : styles.input__error}
              name='price'
              type='number'
              required
              value={formData.price}
              ref={inputRef.priceRef}
              placeholder='판매 가격을 입력해주세요.'
              onChange={onChangeInputData}
              onKeyDown={onKeydownEnterAndTabNextInput}
            />
            {!isPrice && (
              <span className={styles.validation}>숫자로 입력해주세요</span>
            )}
          </div>

          <div className={styles.input__container}>
            <span className={styles.input__title}>태그</span>
            <input
              className={isTags ? styles.input : styles.input__error}
              type='text'
              value={inputTag}
              ref={inputRef.tagRef}
              placeholder='태그를 입력후 엔터를 눌러주세요!'
              onChange={onChangeTagInput}
              onKeyDown={onKeydownEnterTagsAdd}
            />
            {!isTagValidation && (
              <span className={styles.validation}>
                5글자 이내로 입력해주세요
              </span>
            )}
            {!isTags && (
              <span className={styles.validation}>
                태그를 1개 이상 입력해주세요
              </span>
            )}
            {formData.tags && (
              <ul className={styles.tags__container}>
                {formData.tags.map((tag, index) => (
                  <li key={index} className={styles.tag__wrap}>
                    <span className={styles.tag__name}>#{tag}</span>
                    <TiDelete
                      className={styles.tag__delete}
                      onClick={(e) => onClickTagsDelete(e, tag)}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Registration;
