import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";
import axios from "axios";


// 이전 채팅내용 가져오기
export const __loadMessage = createAsyncThunk("GET_CHAT_LOG", async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/api/chat/room/${payload.roomId}`, {
        headers: {
          authorization: sessionStorage.getItem("authorization")
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

const initialState = {
  roomId: "",
  desUsername: "",
  chatRoom: [],
  chat: [],
  isLoading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.chat = [payload, ...state.chat];
    },
  },
  extraReducers: {
    [__loadMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.chat = payload;
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;