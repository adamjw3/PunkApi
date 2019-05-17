import _ from "lodash";
import { FETCH_BEERS, FETCH_BEER } from "../actions/types";

const initialState = {
  data: [],
  selected: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BEERS:
      return {
        ...state,
        data: [...state.data, ...payload],
        page: payload.length
      };
    case FETCH_BEER:
      return { ...state, selected: payload };
    default:
      return state;
  }
};
