import "./App.css";
import ListeCocktails from "./Components/ListeCocktails";

Interface cocktails

const cocktails = [
  {
    id: 1,
    name: "Mojito",
    image: "./assets/images/mojito.png",
    ingredients: "Eau gazeuse, citron vert, menthe fraîche, sucre",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 2,
    name: "Tequila Sunrise",
    image: "./assets/images/tequila_sunrise.png",
    ingredients: "Tequila, jus d'orange, sirop de grenadine",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 3,
    name: "Canaille",
    image: "./assets/images/canaille.png",
    ingredients: "Vodka, ginger beer, citron, sirop de sureau",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 4,
    name: "Daiquiri",
    image: "./assets/images/daiquiri.png",
    ingredients: "Rhum passion,jus de cirton vert, sirop de sucre",
    isFavorite: false,
    addedToCart: false,
  },
  {
    id: 5,
    name: "Sex on the beach",
    image: "./assets/images/sex-on-the-beach.png",
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
        <ListeCocktails 
        mojito={cocktails[0]}
        tequila={cocktails[1]}
        canaille={cocktails[2]}
        daikiri={cocktails[3]}
        sexOnTheBeach={cocktails[4]}
         />
      </main>
    </>
  );
}

export default App;
