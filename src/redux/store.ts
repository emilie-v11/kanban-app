import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
import tasksReducer from './slices/taskSlice';

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 