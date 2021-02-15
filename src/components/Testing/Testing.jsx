import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Statistics from '../Statistics/Statistics';
import styles from './Testing.module.scss';
import getText from '../../API/Api';

const Testing = () => {
  const language = useSelector((state) => {
    return state.testingReducer.language;
  });
  const [text, setText] = useState();

  useEffect(() => {
    getText(language).then((response) => {
      setText(response);
    });
  }, [language]);

  return (
    <div className={styles.testing}>
      <div className={styles.mainNext}>{text}</div>
      <Statistics speed={0} precision={100} />
    </div>
  );
};

export default Testing;
