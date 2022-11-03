import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";

const initialState = {
     profile: {
          name: "",
          file: ""
     },
     isLoading: false,
     error: null,
};

export const _patchProfile = createAsyncThunk("profilePatch", async (payload, thunkAPI) => {
     try {
          await axiosInstance.patch("/api/member/profile", payload.formData,
               {
                    headers: {
                         authorization: sessionStorage.getItem("authorization"),
                         withCredentials: true,
                    },
               })
          return thunkAPI.fulfillWithValue(payload);
     } catch (error) {
          return thunkAPI.rejectWithValue(error);
     }
     }
);

const profilePatch = createSlice({
     name: "profileSlice",
     initialState,
     reducers: {},
     extraReducers: {
          [_patchProfile.pending]: (state) => {
               state.isLoading = true;
          },
          [_patchProfile.fulfilled]: (state, action) => {
               state.isLoading = false;
               state.profile = action.payload;
          },
          [_patchProfile.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export default profilePatch.reducer;
