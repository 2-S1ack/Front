import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";

const initialState = {
     user: {},
     isLoading: false,
     error: null,
     isEmailCheck: false,
     isLogin: false,
};

export const _postEmailCheck = createAsyncThunk("emailCheck",
     async (payload, thunkAPI) => {
          try {
               console.log(payload);
               const { data } = await axiosInstance.post(
                    "/api/member/duplication/email",
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);

export const _postNameCheck = createAsyncThunk(
     "nameCheck",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.post(
                    "/api/member/duplication/username",
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);

export const _postUser = createAsyncThunk(
     "signup",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance.post(
                    "/api/signup",
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);

const userList = createSlice({
     name: "userList",
     initialState,
     reducers: {},
     extraReducers: {
          [_postUser.pending]: (state) => {
               state.isLoading = true;
          },
          [_postUser.fulfilled]: (state, action) => {
               state.isLoading = false;
               alert("가입이 완료 되셨습니다!");
          },
          [_postUser.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
          [_postEmailCheck.fulfilled]: (state, action) => {
               state.isLoading = false;
          },
     },
});

export default userList.reducer;
