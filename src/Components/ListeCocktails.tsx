import type { Cocktail } from "../App";
import CocktailCard from "./CocktailCard";

interface ListeCocktailsProps {
  cocktails: Cocktail[];
}

function ListeCocktails({ cocktails }: ListeCocktailsProps) {
  return (
    <div>
      {cocktails.map((boisson: Cocktail) => (
        <CocktailCard key={boisson.id} cocktail={boisson} />
      ))}
    </div>
  );
}

export default ListeCocktails;
