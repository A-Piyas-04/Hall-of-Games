import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import { getAllGames, searchGames } from "../services/api.js";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch games on initial load and when page changes
    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                const data = await getAllGames(page);
                
                if (data.results.length === 0) {
                    setHasMore(false);
                } else {
                    // If it's the first page, replace games, otherwise append
                    setGames(prevGames => page === 1 ? mapApiDataToGames(data.results) : [...prevGames, ...mapApiDataToGames(data.results)]);
                }
                setError(null);
            } catch (err) {
                setError('Failed to load games. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [page]);

    // Map API data to our game structure
    const mapApiDataToGames = (apiGames) => {
        return apiGames.map(game => ({
            id: game.id,
            poster: game.background_image || '/images/placeholder.svg',
            title: game.name,
            genre: game.genres?.map(g => g.name).join(', ') || 'Unknown',
            releaseYear: game.released ? new Date(game.released).getFullYear() : 'Unknown'
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        
        try {
            setLoading(true);
            const data = await searchGames(searchQuery);
            setGames(mapApiDataToGames(data.results));
            setError(null);
        } catch (err) {
            setError('Failed to search games. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreGames = () => {
        if (!loading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
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

            {error && <div className="error-message">{error}</div>}

            <div className="game-grid">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            {loading && <div className="loading">Loading games...</div>}
            
            {!loading && hasMore && (
                <button className="load-more-button" onClick={loadMoreGames}>
                    Load More Games
                </button>
            )}

            {!loading && !hasMore && games.length > 0 && (
                <div className="no-more-games">No more games to load</div>
            )}

            {!loading && games.length === 0 && (
                <div className="no-games-found">No games found</div>
            )}
        </div>
    );
}

export default Home;