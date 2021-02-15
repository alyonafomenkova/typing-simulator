import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import Statistics from '../Statistics/Statistics';
import styles from './Testing.module.scss';
import getText from '../../API/Api';
import { setText } from '../../redux/actions';

const Testing = () => {
  const language = useSelector((state) => {
    return state.testingReducer.language;
  });
  const [text, updateText] = useState();
  const dispatch = useDispatch();
  const addTextToState = useCallback(
    (data: string) => {
      dispatch(setText(data));
    },
    [text]
  );
  addTextToState(text);

  useEffect(() => {
    getText(language)
      .then((response) => {
        updateText(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(`Error loading ${language} text`, error);
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
