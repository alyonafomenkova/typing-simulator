import Testing from '../Testing/Testing';
import Settings from '../Settings/Settings';
import styles from './TestingContainer.module.scss';

const TestingContainer = () => (
  <>
    <div className={styles.overlay} />
    <div className={styles.container}>
      <Testing />
      <Settings />
    </div>
  </>
);

export default TestingContainer;
