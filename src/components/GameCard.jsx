function GameCard({ game }) {

    function handleFavoriteClick() {
        alert('Added as a favorite');
    }

    return (

        <div className="game-card">
            <div className="game-poster">
                <img src={game.poster} alt={game.title} />
            </div>
            <div className="game-overlay">
                <button className="favorite-btn" onClick={handleFavoriteClick}>
                    💙
                </button>
            </div>

            <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.genre}</p>
                <p>{game.releaseYear}</p>
            </div>
        </div>
    );
}

export default GameCard;
