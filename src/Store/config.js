const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} = require("redux-persist");
const { persistReducer } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;
const combineReducers = require("redux").combineReducers;
// const registerReducer = require("../Slice/registerDataSlice").default;
// const approvalListReducer = require("../Slice/approvalDataSlice").default;
// const activityReducer = require("../Slice/activityDataSlice").default;

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "position",
    "profession"
  ],
};

const rootReducer = combineReducers({
  // regStdandEmp: registerReducer,
  // approvalList: approvalListReducer,
  // activityList: activityReducer
  // add other reducers here if you have them
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

module.exports = { store, persistor };
module.exports.RootState = typeof rootReducer;
module.exports.AppDispatch = store.dispatch;
module.exports.AppThunk = (thunk) =>
  thunk(store.dispatch, store.getState, extraArgument);

function extraArgument() {
  return null;
}
