export const increment = (incr) => {
  return {
    type: "INCREMENT",
    payload: incr,
  };
};

export const decrement = (decr) => {
  return {
    type: "DECREMENT",
    payload: decr,
  };
};
