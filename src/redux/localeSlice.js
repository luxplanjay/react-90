const initialState = {
  lang: 'en',
};

export const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export const changeLang = newLang => {
  return {
    type: 'locale/changeLang',
    payload: newLang,
  };
};
