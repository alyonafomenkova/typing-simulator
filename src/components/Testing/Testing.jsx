import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import getText from '../../API/Api';
import calculatePrecision from '../../helpers/calculatePrecision';
import { setText } from '../../redux/actions';
import Statistics from '../Statistics/Statistics';
import Symbol from '../Symbol/Symbol';
import styles from './Testing.module.scss';

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
  const str1 = 'Привет! Как твои дела?'; // TODO: удалить тестовые данные
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const uprateProgress = (
    str: string,
    position: number,
    isAcceptable: boolean
  ) => {
    const passedSymbols = str.slice(0, position);
    const current = str.slice(position, position + 1);
    const remainingSymbols = str.slice(position + 1);

    if (position === str.length) {
      return (
        <p>
          <Symbol symbol={passedSymbols} state="passed" />
        </p>
      );
    }
    return (
      <p>
        <Symbol symbol={passedSymbols} state="passed" />
        <Symbol symbol={current} state={isAcceptable ? 'current' : 'wrong'} />
        <Symbol symbol={remainingSymbols} state="common" />
      </p>
    );
  };

  const handleKeyDown = (evt) => {
    if (evt.key === str1[currentIndex]) {
      console.log('верно!');
      setCurrentIndex(currentIndex + 1);
      setIsChecked(true);
    } else {
      setIsChecked(false);
      setMistakesCount(mistakesCount + 1);
      console.log(
        '+1 ошибка! нажата: ',
        evt.key,
        'а надо: ',
        str1[currentIndex]
      );
      console.log('mistakesCount: ', mistakesCount);
    }
  };

  useEffect(() => {
    console.log('меняем точность!');
  }, [mistakesCount]);

  useEffect(() => {
    if (currentIndex < str1.length) {
      document.addEventListener('keypress', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keypress', handleKeyDown);
    };
  }, [currentIndex]);

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
      <div className={styles.mainNext}>
        {uprateProgress(str1, currentIndex, isChecked)}
      </div>
      <Statistics
        speed={0}
        precision={calculatePrecision(str1, mistakesCount)}
      />
    </div>
  );
};

export default Testing;
