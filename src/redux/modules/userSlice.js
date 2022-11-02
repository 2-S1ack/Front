import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";

const initialState = {
     user: {},
     isLoading: false,
     error: null,
     isEmailCheck: false,
     isNameCheck: false,
     isLogin: false,
};


//이메일 중복확인
export const _postEmailCheck = createAsyncThunk(
     "emailCheck",

     async (payload, thunkAPI) => {
          try {
               console.log(payload);
               const res = await axiosInstance.post(
                    "/api/member/duplication/email",
                    payload
               );
               return thunkAPI.fulfillWithValue(res);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);
//이름 중복확인
export const _postNameCheck = createAsyncThunk(
     "nameCheck",
     async (payload, thunkAPI) => {
          try {
               const res = await axiosInstance.post(
                    "/api/member/duplication/username",
                    payload
               );
               return thunkAPI.fulfillWithValue(res);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);
//회원가입
export const _postUserJoin = createAsyncThunk(
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

//로그인
export const _postUserLogin = createAsyncThunk(
     "login",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axiosInstance
                    .post("/api/login", payload)
                    .then((res) => {
                         sessionStorage.setItem(
                              "authorization",
                              res.headers.authorization
                         );
                         sessionStorage.setItem(
                              "refresh_token",
                              res.headers.refresh_token
                         );
                         console.log(res.data);
                         return res;
                    });
               //console.log(data);
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.fulfillWithValue(error);
          }
     }
);

const userList = createSlice({
     name: "userList",
     initialState,
     reducers: {
          loginState: (state) => {
               state.isLogin = true;
          },
          logoutState: (state) => {
               state.isLogin = false;
          }
     },
     extraReducers: {
          [_postUserJoin.pending]: (state) => {
               state.isLoading = true;
          },
          [_postUserJoin.fulfilled]: (state, action) => {
               state.isLoading = false;
               alert("가입이 완료 되셨습니다!");
          },
          [_postUserJoin.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
          [_postEmailCheck.fulfilled]: (state, action) => {
               state.isLoading = false;
               console.log(action.payload.data);
               if (action.payload.data.success === true) {
                    state.isEmailCheck = true;
                    alert("중복된 이메일이 존재하지 않습니다.");
               }
               if (!action.payload.data.success) {
                    state.isEmailCheck = false;
                    alert("중복된 이메일이 존재합니다.");
               }
          },
          [_postNameCheck.fulfilled]: (state, action) => {
               state.isLoading = false;
               //console.log(action.payload.data);
               if (action.payload.data.success === true) {
                    state.isNameCheck = true;
                    alert("중복된 이름이 존재하지 않습니다.");
               }
               if (!action.payload.data.success) {
                    state.isNameCheck = false;
                    alert("중복된 이름이 존재합니다.");
               }
          },

          [_postUserLogin.fulfilled]: (state, action) => {
               console.log("success", action.payload.success);
               state.isLoading = false;
               if (action.payload.success === true) {
                    state.isLogin = true;
                    sessionStorage.setItem(
                         "userinfo",
                         JSON.stringify(action.payload.data)
                    );
               } else {
                    state.isLogin = false;
                    alert("오류");
               }
          },
          [_postUserLogin.rejected]: (state, action) => {
               state.isLoading = false;
               state.isLogin = false;
               state.error = action.payload;
               alert("로그인 확인");
          },
     },
});

export const { loginState, logoutState } = userList.actions;
export default userList.reducer;
