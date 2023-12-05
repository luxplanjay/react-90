const objAction = {
  type: 'qwe',
  payload: 5,
};

// dispatch(objAction) > это обьект который дошел до редюсера!

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});

// dispatch(fetchTasks); // > функия дошла до редюсера???? > промис доходит до редюсера??

// redux-thunk

// Если екшен це обьект, ничего не делает и пропускает дальше те next(action)
// Если екшен це функция, вызывает ее action(store.dispatch) и не пропускает дальше
const reduxThunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
    return;
  }

  next(action);
};
