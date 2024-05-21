import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "DIMPLY TRIPURA",
    std: 10,
    bod: new Date("10-02-2007").toLocaleDateString(),
    school: "Cambrige school",
  },
  {
    id: 2,
    name: "PIJA LOLLEN",
    std: 8,
    bod: new Date("2-02-2009").toLocaleDateString(),
    school: "Cambrige school",
  },
];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    editStudent: (state, action) => {
      const { id, name, std, bod, school } = action.payload;
      const editStudent = state.find((student) => student.id === id);
      if (editStudent) {
        editStudent.name = name;
        editStudent.std = std;  
        editStudent.bod = bod;
        editStudent.school = school;
      }
    },
    deleteStudent: (state, action) => {
      const { id } = action.payload;
      const editStudent = state.find((student) => student.id === id);
      if (editStudent) {
        return state.filter((student) => student.id !== id);
      }
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
