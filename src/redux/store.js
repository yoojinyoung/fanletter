import { configureStore } from "@reduxjs/toolkit";
import { letterReducer } from "./slices/letter.slice";
import { memberReducer } from "./slices/member.slice";

const store = configureStore({
  reducer: {
    member: memberReducer,
    letter: letterReducer,
  },
});

export default store;
