import { Clapperboard, Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="MovieNest home">
        <span className="brand-mark"><Clapperboard size={23} /></span>
        <span>Movie<span>Nest</span></span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("movies")}>Movies</button>
        <button onClick={() => goTo("coming-soon")}>Coming Soon</button>
        <button onClick={() => goTo("about")}>About</button>
      </nav>

      <div className="header-actions">
        {searchOpen && (
          <input
            className="nav-search"
            autoFocus
            placeholder="Search movies..."
            onChange={(event) => onSearch(event.target.value)}
          />
        )}
        <button className="icon-button" aria-label="Search movies" onClick={() => setSearchOpen(!searchOpen)}>
          {searchOpen ? <X size={19} /> : <Search size={19} />}
        </button>
        <button className="menu-button icon-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <button className="gold-button small-button" onClick={() => goTo("movies")}>Explore Movies</button>
      </div>
    </header>
  );
}
