import GameCard from "./components/GameCard";
import "./app.css";

function App() {
  return (
    <>
      <GameCard game={{
        poster: "/images/RE2 Remake.jpg",
        title: "Resident Evil 2 Remake",
        genre: "Horror Survival | (Puzzle,Shooter)",
        releaseYear: 2019,
      }} />

      <GameCard game={{
        poster: "/images/POP WW.jpg",
        title: "Princess of Persia: Warrior Within",
        genre: "Action Adventure",
        releaseYear: 2004,
      }} />

      <GameCard game={{
        poster: "/images/RE4 Remake.jpg",
        title: "Resident Evil 4 Remake",
        genre: "Horror Survival | Action",
        releaseYear: 2023,
      }} />

      <GameCard game={{
        poster: "/images/Ghost of Tsushima.jpg",
        title: "Ghost of Tsushima",
        genre: "Action Adventure | Open World",
        releaseYear: 2020,
      }} />
    </>
  );
}

export default App;