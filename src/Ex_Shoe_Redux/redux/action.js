import {
  ADD_SHOE,
  DECREASE,
  DELETE_SHOE,
  INCREASE,
  TANG,
  VIEW_DETAIL,
} from "./constant";

export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};

export let addShoeAction = (payload) => {
  return {
    type: ADD_SHOE,
    payload,
  };
};

export const deleteShoeAction = (id) => ({
  type: DELETE_SHOE,
  payload: id,
});

export const increaseAmountAction = (id) => ({
  type: INCREASE,
  payload: id,
});

export const decreaseAmountAction = (id) => ({
  type: DECREASE,
  payload: id,
});
