import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../Components/signUp.js"
import Signin from "../Components/signIn.js"
import Explorer from "../Components/Explorer.js"
import Index from "../Components/Index.js";
import ItemDetails from "../Components/itemDetails";


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
