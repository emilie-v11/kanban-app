import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Task } from '../data/interfaces';
import { API_URL, LOCAL_DATA_JSON } from './api_URL';

export const fetchTasks = createAsyncThunk('kanban/fetchTasks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data as Task[];
  } catch (error) {
    console.error('Failed to fetch from API, trying local data...', error);
    // if API fails, try local data
    const response = await axios.get(LOCAL_DATA_JSON);
    return response.data as Task[];
  }
});
