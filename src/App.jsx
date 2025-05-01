import GameCard from "./components/GameCard";
import "./app.css";

function App() {
  return (
    <>
     
      <GameCard game={{
        poster: "/images/RE2 Remake.jpg",
        title: "Resident Evil 2 Remake",
        genre: "Horror Survival(Puzzle,Shooter)",
        releaseYear: 2019,
      }} />

<GameCard game={{
        poster: "/images/mario.jpg",
        title: "Resident Evil 2 Remake",
        genre: "Horror Survival(Puzzle,Shooter)",
        releaseYear: 2019,
      }} />

    </>
  );
}

export default App;