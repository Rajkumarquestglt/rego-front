import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../pages/SignUp.js"
import Signin from "../pages/SignIn.js"
import Explorer from "../pages/Explorer.js"
import Index from "../pages/Index.js";
import ItemDetails from "../pages/ItemDetails";
import ForgotPass from "../pages/ForgotPass.js";
import FourOFour from "../pages/404.js";
import Create from "../pages/Create.js";


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Explore" element={<Explorer />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/404" element={<FourOFour />} />
        <Route path="/create" element={<Create />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
