import React, { useState, useEffect } from "react";
import { NavLink, json, useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ detail }) => {
  const [data, setData] = useState();
  const { mealid } = useParams();
  // console.log(mealid);

  useEffect(() => {
    const myFun = async () => {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await get.json();
      // console.log(jsonData.meals[0]);
      setData(jsonData.meals[0]);

      // console.log(jsonData);
    };

    if (mealid != "") {
      myFun();
    }
  }, []);

  return (
    <div className="recipe-container">
      {!data ? (
        "Not Found"
      ) : (
        <div className="msg">
          <img src={data.strMealThumb} className="recipe-img" />
          <div className="info">
            <h1>Recipe Detail's</h1>
            <button className="recipe-button">{data.strMeal}</button>
            <h3>Instructions:</h3>
            <p>{data.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
