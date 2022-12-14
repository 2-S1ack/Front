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


export const _patchProfile = createAsyncThunk(
     "profilePatch",
     async (payload, thunkAPI) => {
          try {
               //console.log(payload);
               const res = await axiosInstance.patch(
                    "/api/member/profile",
                    payload,
                    {
                         headers: {
                              // "Content-type": "multipart/form-data",
                              authorization:
                                   sessionStorage.getItem("authorization"),
                              refresh_token:
                                   sessionStorage.getItem("refresh_token"),
                              withCredentials: true,
                         },
                    }
               );
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
               const getData = JSON.parse(sessionStorage.getItem("userinfo"));
               getData.filename = action.payload.data.filename;
               getData.username = action.payload.data.username;
               sessionStorage.setItem("userinfo", JSON.stringify(getData));
               //console.log(getData.filename);
               //console.log("do", action.payload.data.filename);
          },
          [_patchProfile.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export default profilePatch.reducer;
