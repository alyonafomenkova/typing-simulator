import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import getText from '../../API/Api';
import calculatePrecision from '../../helpers/calculatePrecision';
import calculateSymbolsPerMinute from '../../helpers/calculateSymbolsPerMinute';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [startTime, setStartTime] = useState();
  const [symbolsPerMinute, setSymbolsPerMinute] = useState(0);
  const [finished, setFinished] = useState(false);
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
    if (evt.key === text[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setIsChecked(true);
      if (!startTime) {
        setStartTime(new Date().getTime());
      }
      if (currentIndex === text.length - 1) {
        setFinished(true);
      }
    } else {
      setIsChecked(false);
      setMistakesCount(mistakesCount + 1);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (startTime && !finished) {
      const interval = setInterval(() => {
        const passed = text.length - mistakesCount;
        setSymbolsPerMinute(calculateSymbolsPerMinute(startTime, passed));
      }, 1500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [startTime, finished]);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      document.addEventListener('keypress', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keypress', handleKeyDown);
    };
  }, [text, currentIndex]);

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
        {text && uprateProgress(text, currentIndex, isChecked)}
      </div>
      <Statistics
        speed={symbolsPerMinute}
        precision={text ? calculatePrecision(text, mistakesCount) : 100}
      />
    </div>
  );
};

export default Testing;
