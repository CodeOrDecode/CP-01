const getCategoriesData = async () => {
  try {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    let data = await res.json();
    return data
    
  } catch (error) {
    return "something went wrong";
  }
};

const getIngredientData = async () => {
  try {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
    let data = await res.json();
    return data
    
  } catch (error) {
    return "something went wrong";
  }
};

window.onload = function () {
  let button1 = document.getElementById("get-category-data");
  let button2 = document.getElementById("get-ingredient-data");

  button1.addEventListener("click", getCategoriesData);
  button2.addEventListener("click", getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
