import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import Login from "../page/Login";
import Register from "../page/Register";
const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<Main />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
