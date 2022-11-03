import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userSlice";
import chat from "../modules/chat";
import profilePatch from "../modules/profileSlice";
import room from "../modules/room";

const store = configureStore({
     reducer: { userList, profilePatch },
     chat,
     room,
});

export default store;
