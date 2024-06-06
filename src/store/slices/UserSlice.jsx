import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});

export default userSlice.reducer;

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
