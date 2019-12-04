// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
const numberFormatterDecimal = (c, i, a) =>
  i && c !== "." && (a.length - i) % 3 === 0 ? `.${c}` : c;

export const formatNumberDecimal = number =>
  number.toString().replace(/./g, numberFormatterDecimal);
