import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, user: "energysports.pl", image: null, followsYou: true, isNew: false },
  { id: 2, user: "mezzomusicart", image: null, followsYou: false, isNew: true },
  { id: 3, user: "michsobi", image: null, followsYou: true, isNew: false },
  { id: 4, user: "majcuute", image: null, followsYou: true, isNew: false },
  { id: 5, user: "majOr.ka", image: null, followsYou: true, isNew: false },
];

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {},
});

export default suggestionsSlice.reducer;

export const selectAllSuggestions = (state) => state.suggestions;
