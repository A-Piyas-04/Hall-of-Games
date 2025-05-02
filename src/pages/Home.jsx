import GameCard from "../components/GameCard";
import { useState } from "react";



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

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
            title: "Prince of Persia: Warrior Within",
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

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform search logic here
        alert("Search query: " + searchQuery);
    };
    return (


        <div className="Home">


            <form className="search-form" onSubmit={handleSearch}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>

            <div className="game-grid">
                {games.map((game) => (
                    
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default Home;