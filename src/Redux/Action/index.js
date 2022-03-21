export const IncrementNumber = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const DecrementNumber = (num) => {
  return {
    type: 'DECREMENT',
    payload: num,
  };
};
