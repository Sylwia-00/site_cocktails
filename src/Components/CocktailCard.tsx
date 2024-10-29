import { useState } from "react";
import type { Cocktail } from "../App";
import ResumePanier from "./ResumePanier";

interface CocktailCardProps {
  cocktail: Cocktail;
}

function CocktailCard({ cocktail }: CocktailCardProps) {
  const [isFavorite, setIsFavorite] = useState(cocktail.isFavorite);
  const [cocktailCount, setCocktailCount] = useState(0);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function incrementCocktailCount() {
    setCocktailCount(cocktailCount + 1);
  }

  return (
    <article>
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.ingredients}</p>
      <button type="button" onClick={handleClickFavorite}>
        {isFavorite ? "❤️" : "🖤"}
      </button>
      <button type="button" onClick={incrementCocktailCount}>
        Ajout au 🧺
      </button>
      <ResumePanier cocktailCount={cocktailCount} />
    </article>
  );
}

export default CocktailCard;
