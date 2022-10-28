import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../page/Login";
// import Register from ""
const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Login />} />
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
