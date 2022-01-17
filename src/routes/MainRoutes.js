import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../pages/Home";


const mainRoute = () => {
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       
      </Route>
    </Routes>
 </BrowserRouter>

}
export default mainRoute;