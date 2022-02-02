import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/SignUp.js";
import Signin from "../pages/SignIn.js";
import Explorer from "../pages/Explorer.js";
import Index from "../pages/Index.js";
import ItemDetails from "../pages/ItemDetails";
import ForgotPass from "../pages/ForgotPass.js";
import NotFound from "../pages/NotFound.js";
import Create from "../pages/Create.js";
import Auction from "../pages/Auction.js";

import AllAuthor from "../pages/AllAuthor.js";
import ContactUs from "../pages/ContactUs.js";
import Activity from "../pages/Activity.js";

import SearchResult from "../pages/SearchResult.js";
import ScrollToTop from "../Components/ScrollToTop.jsx";

function MainRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Explore" element={<Explorer />} />
          <Route path="/item-details" element={<ItemDetails />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/create" element={<Create />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/all-authors" element={<AllAuthor />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route component={NotFound} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default MainRoutes;
