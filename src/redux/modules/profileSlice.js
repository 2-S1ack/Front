import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";

const initialState = {
     name: "",
     file: "",
     isLoading: false,
     error: null,
};

export const _patchProfile = createAsyncThunk(
     "profilePatch",
     async (payload, thunkAPI) => {
          try {
               console.log(payload);
               const res = await axiosInstance.patch(
                    "/api/member/profile/",
                    payload.formData,
                    {
                         headers: {
                              "Content-type": "multipart/form-data",
                              authorization:
                                   sessionStorage.getItem("authorization"),
                              withCredentials: true,
                         },
                    }
               );
               console.log(res);
               return thunkAPI.fulfillWithValue(res);
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
               state.post = action.payload;
          },
          [_patchProfile.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export default profilePatch.reducer;
