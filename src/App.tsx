import "./App.css";
import ListeCocktails from "./Components/ListeCocktails";

export interface Cocktail {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  isFavorite: boolean;
  addedToCart: boolean;
}

const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Mojito",
    image: "../images/mojito.png",
    ingredients: "Eau gazeuse, citron vert, menthe fraîche, sucre",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 2,
    name: "Tequila Sunrise",
    image: "../images/tequila_sunrise.png",
    ingredients: "Tequila, jus d'orange, sirop de grenadine",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 3,
    name: "Canaille",
    image: "../images/canaille.png",
    ingredients: "Vodka, ginger beer, citron, sirop de sureau",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 4,
    name: "Daiquiri",
    image: "../images/daiquiri.png",
    ingredients: "Rhum passion,jus de cirton vert, sirop de sucre",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 5,
    name: "Sex on the beach",
    image: "../images/sex-on-the-beach.png",
    ingredients: "Vodka, liqueur de pêche, jus d'orange, jus d'ananas",
    isFavorite: false,
    addedToCart: false,
  },
];

function App() {
  return (
    <>
      <header>
        <h1>Cocktails [2SLN]</h1>
      </header>
      <main>
        <ListeCocktails cocktails={cocktails} />
      </main>
    </>
  );
}

export default App;
