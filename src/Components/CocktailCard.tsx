import { useState } from "react";
import type { Cocktail } from "../App";

interface CocktailCardProps {
  cocktail: Cocktail;
}

function CocktailCard({ cocktail }: CocktailCardProps) {
  const [isFavorite, setIsFavorite] = useState(cocktail.isFavorite);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  const [ajoutPanier, setAjoutPanier] = useState(cocktail.addedToCart);

  function handleClickCart(){
    setAjoutPanier(!ajoutPanier);

  }

  return (
    <>
      <h2>{cocktail.name}</h2>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.ingredients}</p>
      <button type="button" onClick={handleClickFavorite}>
        {isFavorite ? "❤️" : "🖤"}
      </button>
      <button type="button" onClick={handleClickCart}>
        {ajoutPanier ? }
    </>
  );
}

export default CocktailCard;
