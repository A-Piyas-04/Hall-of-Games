function GameCard({game}) {

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
        </div>
    );
}