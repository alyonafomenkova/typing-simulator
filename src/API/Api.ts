import axios from 'axios';

async function getRussianText(sentenceCount: number) {
  const response = await axios.get(
    `https://fish-text.ru/get?number=${sentenceCount}`
  );
  return response.data.text;
}

async function getEnglishText(sentenceCount: number) {
  const response = await axios.get(
    `https://baconipsum.com/api/?type=all-meat&sentences=${sentenceCount}&start-with-lorem=1`
  );
  return response.data[0];
}

const getText = (language: string, sentenceCount: number = 5) => {
  switch (language) {
    case 'en':
      return getEnglishText(sentenceCount);
    default:
      return getRussianText(sentenceCount);
  }
};

export default getText;
