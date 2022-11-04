import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  accessToken: "",
  userSeq: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // 얘는 예시
    setEnt(state, action) {
      return { ...action.payload.setEnt };
    },
  },
});

export const ent = authSlice.actions;
export default authSlice.reducer;
