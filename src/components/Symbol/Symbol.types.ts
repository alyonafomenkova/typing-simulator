interface SymbolProps {
  symbol: string;
  state: 'passed' | 'current' | 'wrong' | 'common';
  isCurrent?: boolean;
  isWrong?: boolean;
}

export default SymbolProps;
