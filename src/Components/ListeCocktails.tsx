import type { Cocktail } from "../App";
import CocktailCard from "./CocktailCard";

interface ListeCocktailsProps {
  cocktails: Cocktail[];
}

function ListeCocktails({ cocktails }: ListeCocktailsProps) {
  return (
    <>
      {cocktails.map((boisson: Cocktail) => (
        <CocktailCard key={boisson.id} cocktail={boisson} />
      ))}
    </>
  );
}

export default ListeCocktails;
