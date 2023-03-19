export const increase = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrease = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
