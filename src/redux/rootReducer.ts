import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  // tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;