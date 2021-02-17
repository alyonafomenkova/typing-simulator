import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setIsReady } from '../../redux/actions';
import Button from '../Button/Button';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Settings.module.scss';
import cat from './images/cat.png';

const Settings = () => {
  const text = useSelector((state) => {
    return state.testingReducer.text;
  });
  const isReady = useSelector((state) => {
    return state.testingReducer.isReady;
  });
  const dispatch = useDispatch();
  const handleButtonClick = useCallback(() => {
    dispatch(setIsReady(true));
  }, []);

  if (isReady) return <></>;

  return (
    <div className={styles.settings}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img
            src={cat}
            alt="cat"
            width="100"
            height="100"
            className={styles.image}
          />
        </div>
        <LanguageSwitcher />
      </div>
      {text && (
        <>
          <h2 className={styles.title}>Приготовься и начинай печатать!</h2>
          <div className={styles.buttonWrapper}>
            <Button text="Начать печатать" onClick={handleButtonClick} />
          </div>
        </>
      )}
      {!text && (
        <h2 className={styles.title}>
          Что-то пошло не так.
          <br />
          Попробуйте изменить язык :)
        </h2>
      )}
    </div>
  );
};

export default Settings;
