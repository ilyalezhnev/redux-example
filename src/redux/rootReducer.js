import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  SWITCH_LOADING,
} from "./actionTypes";
import { combineReducers } from "redux";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}

function themeReducer(state = { value: "light" }, action) {
  if (action.type === CHANGE_THEME) {
    return { ...state, value: action.payload };
  }

  return state;
}

function loadingReducer(state = { value: false }, action) {
  if (action.type === SWITCH_LOADING) {
    return { ...state, value: action.payload };
  }

  return state;
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  loading: loadingReducer,
});
