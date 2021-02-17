const calculateSymbolsPerMinute = (start: number, passedSymbols: number) => {
  const MINUTE_IN_SEC = 60;
  const SEC_IN_MSEC = 1000;
  const now = new Date().getTime();
  const difference = now - start;
  const result = (passedSymbols / difference) * SEC_IN_MSEC * MINUTE_IN_SEC;
  return result.toFixed(0);
};
export default calculateSymbolsPerMinute;
