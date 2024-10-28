import CocktailCard from "./Components/CocktailCard";

function ListeCocktails({ cocktails }) {
  return (
    <>
      {cocktails.map((boisson) => (
        <CocktailCard
          key={boisson.id}
          name={boisson.name}
          image={boisson.image}
          ingredients={boisson.ingredients}
          isFavorite={boisson.isFavorite}
          addedToCart={boisson.addedToCart}
        />
      ))}
    </>
  );
}

export default ListeCocktails;
