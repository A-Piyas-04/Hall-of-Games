import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="brand">Hall of Games</Link>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <div className="nav-links">
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/Wishlist"
                        className={`nav-link ${location.pathname === '/Wishlist' ? 'active' : ''}`}
                    >
                        Wishlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;