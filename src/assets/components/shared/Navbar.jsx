import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const imgStyle = { marginTop: '-1px' }
    const navbarStyle = { backgroundColor: '#e3f2fd' }
    const navItems = ['Home', 'About', 'Locations', 'Contact'];
    const [selectedNav, setSelectedNav] = useState(0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle} data-mdb-theme="light">
                <div className="container">
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="16"
                        alt="Company Logo"
                        loading="lazy"
                        style={imgStyle}
                    />
                    </a>

                    <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                navItems.map((item, index) => (
                                    <li 
                                        className={ selectedNav === index ? "nav-item navActive" : "nav-item"} 
                                        key={index}
                                        onClick={ () => {setSelectedNav(index)} }
                                    >
                                        <Link className="nav-link" to={item === 'Home' ? '' : "/" +item.toLowerCase()}>{item}</Link>
                                    </li>
                                ))
                            }
                            
                        </ul>

                        <div className={ selectedNav === -1 ? "d-flex align-items-center navActive" : "d-flex align-items-center"}>
                            <Link to={'/login'}>
                                <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2" onClick={() => setSelectedNav(-1)}>
                                Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar