import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import Statistics from '../Statistics/Statistics';
import getText from '../../API/Api';
import { setText } from '../../redux/actions';
import styles from './Testing.module.scss';
import Symbol from '../Symbol/Symbol';

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
      console.log('Верно!');
      setCurrentIndex(currentIndex + 1);
      setIsChecked(true);
    } else {
      console.log('Ошибка!', 'нажата: ', evt.key, 'надо: ', str1[currentIndex]);
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (currentIndex < str1.length) {
      console.log(
        '[useEffect] currentIndex: ',
        currentIndex,
        'length: ',
        str1.length
      );
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
      <Statistics speed={0} precision={100} />
    </div>
  );
};

export default Testing;
