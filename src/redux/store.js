import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

// const myMiddlware2 = store => {
//   return next => {
//     return action => {
//       console.log('myMiddlware2');
//       console.log(action);
//       next(action);
//     };
//   };
// };

const myMiddlware1 = store => next => action => {
  // console.log('myMiddlware1');
  // console.log(action);
  next(action);
};

const myMiddlware2 = store => next => action => {
  // console.log('myMiddlware2');
  // console.log(action);
  next(action);
};

const gaMiddleware = store => next => action => {
  if (action?.meta?.ga) {
    // GA.send(action)
    console.log('SEND TO GA', action);
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMd = getDefaultMiddleware();
    return [...defaultMd, myMiddlware1, myMiddlware2, gaMiddleware];
  },
});
