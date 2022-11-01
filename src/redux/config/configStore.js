import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userSlice";
import room from "../modules/room";

const store = configureStore({
     reducer: {userList}, room
});

export default store;
