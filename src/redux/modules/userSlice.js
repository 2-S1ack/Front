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
          //로그인 상태 전역관리
          loginState: (state) => {
               state.isLogin = true;
          },
          //이메일 중복확인 전역관리(state 변경시 버튼 활성 초기화)
          emailChkChange: (state) => {
               state.isEmailCheck = false;
          },
          //이름 중복확인 전역관리(state 변경시 버튼 활성 초기화)
          nameChkChange: (state) => {
               state.isNameCheck = false;
          },
     },
     extraReducers: {
          //회원가입
          [_postUserJoin.pending]: (state) => {
               state.isLoading = true;
          },
          [_postUserJoin.fulfilled]: (state, action) => {
               state.isLoading = false;
          },
          [_postUserJoin.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
          //이메일 중복확인
          [_postEmailCheck.fulfilled]: (state, action) => {
               state.isLoading = false;
               console.log(action.payload.data);
               if (action.payload.data.success === true) {
                    state.isEmailCheck = true;
                    alert("사용가능한 이메일입니다.");
               }
               if (!action.payload.data.success) {
                    state.isEmailCheck = false;
                    alert("중복된 이메일이 존재합니다.");
               }
          },
          //이름 중복확인
          [_postNameCheck.fulfilled]: (state, action) => {
               state.isLoading = false;
               //console.log(action.payload.data);
               if (action.payload.data.success === true) {
                    state.isNameCheck = true;
                    alert("사용가능한 이름입니다.");
               }
               if (!action.payload.data.success) {
                    state.isNameCheck = false;
                    alert("중복된 이름이 존재합니다.");
               }
          },
          //로그인
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
                    alert("이메일이나 비밀번호를 확인해주세요");
               }
          },
          [_postUserLogin.rejected]: (state, action) => {
               state.isLoading = false;
               state.isLogin = false;
               state.error = action.payload;
          },
     },
});

export const { loginState, nameChkChange, emailChkChange } = userList.actions;
export default userList.reducer;
