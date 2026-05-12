import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recipe from "./Pages/recipe"; 
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/contact"; 
import MealType from "./Pages/Mealtype";
import Dishtype from "./Pages/Dishtype";
import Search from "./Pages/search";
import Fetchdata from "./Pages/search";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/Mealtype/:meal" element={<MealType/>} />
          <Route path="/Dishtype/:dish" element={<Dishtype/>} />
          <Route path="/search" element={<Fetchdata/>} />
          <Route path="*" element={<><h1>404 Page Not Found</h1></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
