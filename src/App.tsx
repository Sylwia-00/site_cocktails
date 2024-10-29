import { useState } from "react";
import "./App.css";
import ListeCocktails from "./Components/ListeCocktails";
import ResumePanier from "./Components/ResumePanier";

export interface Cocktail {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  isFavorite: boolean;
  addedToCart: number;
}

const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Mojito",
    image: "./src/assets/images/mojito.png",
    ingredients: "Eau gazeuse, citron vert, menthe fraîche, sucre",
    isFavorite: false,
    addedToCart: 0,
  },
  {
    id: 2,
    name: "Tequila Sunrise",
    image: "./src/assets/images/tequila_sunrise.png",
    ingredients: "Tequila, jus d'orange, sirop de grenadine",
    isFavorite: false,
    addedToCart: 0,
  },
  {
    id: 3,
    name: "Canaille",
    image: "./src/assets/images/canaille.png",
    ingredients: "Vodka, ginger beer, citron, sirop de sureau",
    isFavorite: false,
    addedToCart: 0,
  },
  {
    id: 4,
    name: "Daiquiri",
    image: "./src/assets/images/daiquiri.png",
    ingredients: "Rhum passion,jus de cirton vert, sirop de sucre",
    isFavorite: false,
    addedToCart: 0,
  },
  {
    id: 5,
    name: "Sex on the beach",
    image: "./src/assets/images/sex-on-the-beach.png",
    ingredients: "Vodka, liqueur de pêche, jus d'orange, jus d'ananas",
    isFavorite: false,
    addedToCart: 0,
  },
];

function App() {
  // const [cocktailCount, setCocktailCount] = useState(0);
  // setCocktailCount(() => cocktailCount + 1);
  return (
    <main>
      <input className="input-panier" type="text" />
      <header>
        <h1>Cocktails [2SLN]</h1>
      </header>
      <main>
        <ListeCocktails cocktails={cocktails} />
        {/* <ResumePanier cocktailCount={cocktailCount} /> */}
      </main>
    </main>
  );
}

export default App;
