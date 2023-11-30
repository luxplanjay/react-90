import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

constactsSlice = createSlice({
  intiiaLState: [],
});

fitlerSlice = createSlice({
  intiiaStaet: '',
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: constactsSlice.reducer,
  filter: fitlerSlice.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

configureStore({
  reducer: persistedRootReducer,
});
