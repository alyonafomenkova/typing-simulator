import SymbolProps from './Symbol.types';
import styles from './Symbol.module.scss';

const Symbol = ({ symbol, state = 'common' }: SymbolProps) => {
  let classes;
  switch (state) {
    case 'passed':
      classes = styles.passed;
      break;
    case 'current':
      classes = styles.current;
      break;
    case 'wrong':
      classes = styles.wrong;
      break;
    default:
      classes = styles.common;
      break;
  }
  return <span className={classes}>{symbol}</span>;
};

export default Symbol;
