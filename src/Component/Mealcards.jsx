import React from "react";
import { NavLink } from "react-router-dom";

const MealCards = ({ detail }) => {
  console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? "Data Not Found"
        : detail.map((curItem) => {
            return (
              <div className="mealImg" key={curItem.idMeal}>
                <img src={curItem.strMealThumb} />
                <p>{curItem.strMeal}</p>

                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default MealCards;
