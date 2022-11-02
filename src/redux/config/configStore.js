import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userSlice";
import chat from "../modules/chat";
import room from "../modules/room";

const store = configureStore({
     reducer: {userList}, chat, room
});

export default store;
