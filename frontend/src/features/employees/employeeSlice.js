// src/features/employees/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    setEmployees: (state, action) => action.payload,
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    // other reducers like editEmployee, removeEmployee, etc.
  },
});

export const { setEmployees, addEmployee } = employeeSlice.actions;

export const fetchEmployees = () => async dispatch => {
  const response = await axios.get('/api/employees');
  dispatch(setEmployees(response.data));
};

export default employeeSlice.reducer;
