import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userSlice";
import profilePatch from "../modules/profileSlice";
import room from "../modules/room";

const store = configureStore({
     reducer: { userList, profilePatch },
     room,
});

export default store;
