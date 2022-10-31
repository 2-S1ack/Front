import { configureStore } from "@reduxjs/toolkit";
import userList from "../modules/userSlice";
const Store = configureStore({
     reducer: { userList },
});

export default Store;
