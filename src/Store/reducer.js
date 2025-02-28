import { combineReducers } from "@reduxjs/toolkit";

// Redux: Root Reducer
const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
