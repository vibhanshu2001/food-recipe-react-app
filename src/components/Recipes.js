import React from "react";

const Recipes = (props) => {
  const { recipes } = props;
  return (
    <div className="card-columns">
      {recipes.map((recipe) => (
        
          <div className="card">
            <img src={recipe.recipe.image} className="img-fluid w-100" />
            <div className="card-body">
              <h5>{recipe.recipe.label}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {
                    recipe.recipe.ingredientLines.map(ingredient=><li className="list-group-item">{ingredient}</li>)
                }
            </ul>
          
        </div>
      ))}
    </div>
  );
};
export default Recipes;
