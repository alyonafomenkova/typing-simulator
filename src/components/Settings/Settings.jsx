import Button from '../Button/Button';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Settings.module.scss';
import cat from './images/cat.png';

const Settings = () => (
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
    <h2 className={styles.title}>Приготовься и начинай печатать!</h2>
    <div className={styles.buttonWrapper}>
      <Button text="Начать печатать" />
    </div>
  </div>
);

export default Settings;
