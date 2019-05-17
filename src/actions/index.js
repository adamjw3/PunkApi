import { FETCH_BEERS, FETCH_BEER, MODAL_OPEN, MODAL_CLOSE } from "./types";
import punk from "../apis/punk";

export const fetechBeers = page => async dispatch => {
  const response = await punk.get(`beers?page=${page}&per_page=25`);

  dispatch({
    type: FETCH_BEERS,
    payload: response.data
  });
};

export const fetechBeer = payload => ({
  type: FETCH_BEER,
  payload: payload
});

export const modalOpen = payload => ({
  type: MODAL_OPEN,
  payload: payload
});

export const modalClose = payload => ({
  type: MODAL_CLOSE,
  payload: payload
});
