import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Task } from '../../data/interfaces';
import axios from 'axios';

interface TaskState {
  tasks: Task[];
  isPending: boolean;
  error: string | null | undefined;
}

const initialState: TaskState = {
  tasks: [],
  isPending: false,
  error: null,
};

export const fetchTasks = createAsyncThunk('kanban/fetchTasks', async () => {
  const response = await axios.get('https://awa.dev.adsoftware-tech.com/api/kanban/items');
  return response.data as Task[];
});

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // addTask: (state, action: PayloadAction<Task>) => {
    //   state.tasks.push(action.payload);
    // },
    // removeTask: (state, action: PayloadAction<number>) => {
    //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    // },
    // updateTask: (state, action: PayloadAction<Task>) => {
    //   const index = state.tasks.findIndex((task) => task.id === action.payload.id);
    //   if (index !== -1) {
    //     state.tasks[index] = action.payload;
    //   }
    // },
    // completeTask: (state, action: PayloadAction<number>) => {
    //   const index = state.tasks.findIndex((task) => task.id === action.payload);
    //   if (index !== -1) {
    //     state.tasks[index].completed = true;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isPending = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isPending = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.error.message;
      });
  },
});

// export const { addTask, removeTask, updateTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;

export default taskSlice.reducer;
