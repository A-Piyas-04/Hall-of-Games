import GameCard from "../components/GameCard";

function Home() {
    const games = [
        {
            id: 1,
            poster: "/images/RE2 Remake.jpg",
            title: "Resident Evil 2 Remake",
            genre: "Horror Survival | (Puzzle,Shooter)",
            releaseYear: 2019
        },
        {
            id: 2,
            poster: "/images/POP WW.jpg",
            title: "Princess of Persia: Warrior Within",
            genre: "Action Adventure",
            releaseYear: 2004
        },
        {
            id: 3,
            poster: "/images/RE4 Remake.jpg",
            title: "Resident Evil 4 Remake",
            genre: "Horror Survival | Action,Shooter,Puzzle",
            releaseYear: 2023
        },
        {
            id: 4,
            poster: "/images/Ghost of Tsushima.jpg",
            title: "Ghost of Tsushima",
            genre: "Action Adventure | Open World",
            releaseYear: 2020
        }
    ]

    return (
        <div className="Home">
            <div className="game-grid">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default Home;