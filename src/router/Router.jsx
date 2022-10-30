import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import Login from "../page/Login";
import Register from "../page/Register";
import Enter from "../page/Enter";
const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/enter" element={<Enter />} />
                    <Route path="/main" element={<Main />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
