import { INCREMENT } from './actionTypes';

export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num
  };
};

