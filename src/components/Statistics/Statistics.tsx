import StatisticsProps from './Statistics.types';
import styles from './Statistics.module.scss';
import Button from '../Button/Button';

const Statistics = ({ speed, precision }: StatisticsProps) => {
  const handleButtonClick = () => {
    window.location.reload();
  };
  return (
    <div className={styles.statistics}>
      <div className={styles.speedWrapper}>
        <span className={styles.speedText}>Скорость</span>
        <div>
          <span className={styles.speedValue}>{speed}</span>
          <span className={styles.speedMeasurement}> зн./мин</span>
        </div>
      </div>
      <div className={styles.precisionWrapper}>
        <span className={styles.precisionText}>Точность</span>
        <div>
          <span className={styles.precisionValue}>{precision}</span>
          <span className={styles.precisionMeasurement}> %</span>
        </div>
      </div>
      <div className={styles.reload}>
        <Button text="Заново" isTextButton onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Statistics;
