import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./action";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (sction.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
