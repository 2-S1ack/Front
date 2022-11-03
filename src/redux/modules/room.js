import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../shared/Instance";


//채팅방 불러오기
export const __getChatRoom = createAsyncThunk("GET_CHAT_ROOM", async (_, thunkAPI) => {
    try {
      const {data} = await axiosInstance.get("/api/room").then(res => res.data)
      return thunkAPI.fulfillWithValue(data)

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 팀원추가 (방생성)
export const __addUser = createAsyncThunk("CREATE_ROOM", async(payload, thunkAPI ) => {
    try {
        const res = await axiosInstance.post("/api/chat/room", "", {
            headers: {
                authorization: sessionStorage.getItem("authorization"),
            }
        });
        return thunkAPI.fulfillWithValue(res);
    } catch(err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
    rooms: [],
    room: {},
    chat: [],
}

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},
    extraReducers: {

        //채팅방 목록 불러오기
        [__getChatRoom.fulfilled]: (state, action) => {
            state.rooms = action.payload
        },
        [__getChatRoom.rejected]: (state, action) => {
        },
        // [__addUser.fulfilled]: (state, {payload}) => {
        //     state.Id = payload;
        // },
    }
})

export default roomSlice.reducer;