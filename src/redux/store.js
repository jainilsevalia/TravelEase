import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import sampleReducer from "./sample.reducers";
import tripReducer from "./Trip.reducers";
import transactionReducer from "./Transaction.reducer";
import postReducer from "./postReducer";
import plandataReducers from "./plandata.reducers";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
    tripDetails: tripReducer,
    transaction: transactionReducer,
    post: postReducer,
    plans: plandataReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
