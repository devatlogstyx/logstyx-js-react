//@ts-check

export const sendFn = (endpoint, { body }) => {
  const blob = new Blob([body], { type: 'application/json' });
  return navigator.sendBeacon(endpoint, blob);
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
