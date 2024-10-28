import "./App.css";

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
        <h2>Blabla</h2>
      </main>
    </>
  );
}

export default App;
