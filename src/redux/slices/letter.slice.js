import { createSlice } from "@reduxjs/toolkit";
import initialLetter from "../../data/initialLetters";

const letterSlice = createSlice({
  name: "letter",
  initialState: {
    letters: initialLetter,
  },
  reducers: {},
});

export const {} = letterSlice.actions; // actionCreator들을 리턴해줘요.

export const letterActionCreators = {};
export const letterReducer = letterSlice.reducer;
