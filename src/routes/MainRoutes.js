import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../pages/SignUp.js"
import Signin from "../pages/SignIn.js"
import Explorer from "../pages/Explorer.js"
import Index from "../pages/Index.js";
import ItemDetails from "../pages/ItemDetails";


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Explore" element={<Explorer />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
