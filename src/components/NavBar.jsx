import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="brand">Hall of Games</Link>
                <div className="nav-links">
                    <Link 
                        to="/" 
                        className="nav-link"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/Wishlist"
                        className="nav-link"
                    >
                        Wishlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;