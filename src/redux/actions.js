import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  SWITCH_LOADING,
} from "./actionTypes";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(switchLoading(true));
    setTimeout(() => {
      dispatch({ type: INCREMENT });
      dispatch(switchLoading(false));
    }, 1500);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export function switchLoading(loading) {
  return {
    type: SWITCH_LOADING,
    payload: loading,
  };
}
