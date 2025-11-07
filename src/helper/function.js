//@ts-check

export const sendFn = (endpoint, { body }) => {
  return navigator.sendBeacon(endpoint, body);
};

export const safeParse = (input) => {
  try {
    return input ? JSON.parse(input) : {};
  } catch {
    return {};
  }
};

export const num2Int = (number) => {
  if (isNaN(number)) {
    return 0;
  }
  return parseInt(number);
};
