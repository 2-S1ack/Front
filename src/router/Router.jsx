import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../page/Login";
import Register from "../page/Register";
import Enter from "../page/Enter";
import Main from "../page/Main";
const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Register />} />
                    <Route path="/enter" element={<Enter />} />
                    <Route path="/main" element={<Main />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
