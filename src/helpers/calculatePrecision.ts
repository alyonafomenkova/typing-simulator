const calculatePrecision = (text: string, mistakesCount: number) => {
  const { length } = text;
  const coincidencesNumber = length - mistakesCount;
  const precision = (100 * coincidencesNumber) / length;
  return Math.round(precision);
};

export default calculatePrecision;
