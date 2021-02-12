import Statistics from '../Statistics/Statistics';
import styles from './Testing.module.scss';

const Testing = () => (
  <div className={styles.testing}>
    <div className={styles.mainNext}>
      testingtestingtesting testingtestingtestingtestingtestingtestingtestingte
      testingtestingtesting
      stingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting
    </div>
    <Statistics speed={0} precision={100} />
  </div>
);

export default Testing;
