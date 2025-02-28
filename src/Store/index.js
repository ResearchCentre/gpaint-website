import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const createPersistedReducer = (reducers) => {
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["profile", "profession"],
  };

  const rootReducer = combineReducers(reducers);

  return persistReducer(persistConfig, rootReducer);
};

export default createPersistedReducer;
