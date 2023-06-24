export const transform = (input) => {
  const convertedData = {};
  for (const [key, value] of Object.entries(input)) {
    value.forEach((item) => (convertedData[item.toLowerCase()] = Number(key)));
  }
  return convertedData;
};
