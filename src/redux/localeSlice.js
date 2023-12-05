import { createSlice } from '@reduxjs/toolkit';

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    // changeLang(state, action) {
    //   state.lang = action.payload;
    // },
    changeLang: {
      prepare(lang) {
        return {
          payload: {
            value: lang,
            time: Date.now(),
          },
          meta: {
            ga: true,
          },
        };
      },
      reducer(state, action) {
        state.lang = action.payload.value;
      },
    },
  },
});

export const { changeLang } = localeSlice.actions;

export const localeReducer = localeSlice.reducer;
