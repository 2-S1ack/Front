import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../shared/Instance";

const initialState = {
  lists: [],
  list: {
    "content": "",
    "username": "",
    "creatiedAt": "",
    "modifiedAt": ""
  }
};


//메인페이지 입장 시 방 리스트 불러오기
export const __getRoomList = createAsyncThunk("GET_ROOM_LIST", async(_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get("/api/chat/room")
        .then(res => res.data);
        return thunkAPI.fulfillWithValue(data);
    } catch(err) {
        return thunkAPI.rejectWithValue(err)
    }
})

// 채팅방 입장 및 채팅내역 불러오기
export const  __getUserChatList = createAsyncThunk("GET_USER_CHAT_LIST", async(payload, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get(`/api/chat/room/${payload.roomId}`)
        .then(res => res.data);
        return thunkAPI.fulfillWithValue(data);
    } catch(err) {
        return thunkAPI.rejectWithValue(err)
    }
})

const room = createSlice({
    name: "room",
    initialState,
    reducers: {},
    extraReducers: {
        [__getRoomList.fulfilled]: (state, action) => {
            state.lists = action.payload;
        },
        [__getRoomList.rejected]: (state, action) => {
        },
        [__getUserChatList.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [__getUserChatList.rejected]: (state, action) => {
            state.err = action.payload
        },
    }
})

export default room.reducer;