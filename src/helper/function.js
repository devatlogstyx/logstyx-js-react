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

export const getOrSetSessionId = () => {
  const name = "logstyx_sid";
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];

  const newId = Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  document.cookie = `${name}=${newId}; path=/; SameSite=Strict`;

  return newId;
};