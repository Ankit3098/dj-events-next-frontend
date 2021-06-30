// Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const increment = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

const decrement = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
