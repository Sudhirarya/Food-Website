import "./App.css";
import MainPage from "./Component/Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealInfo from "./Component/Mealinfo";
import Food from "./Components/Food";
import Recipe from "./Components/Recipe";
import Navbar from "./Component/Navbar";

function App() {
  return (
    // <Mainpage />

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/:mealid" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
