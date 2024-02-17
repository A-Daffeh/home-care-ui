import { useState } from "react";
import { Link } from "react-router-dom";
import pro_shipping_image from '../../../images/pro-shipping-logo.png';

const Navbar = () => {
    // Adjust the image style to increase the logo size and remove the margin top if it's not needed
    const imgStyle = {
        maxHeight: '80px', // This value can be adjusted to fit your navbar's height
        width: 'auto', // This will maintain the aspect ratio of the image
        borderRadius : '50%'
        
    };
    const navbarStyle = { backgroundColor: '#e3f2fd' };
    const navItems = ['Home', 'About', 'Services', 'Contact'];
    const [selectedNav, setSelectedNav] = useState(0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
                <div className="container">
                    {/* Changed from <a> to <div> to remove hyperlink functionality */}
                    <div className="navbar-brand">
                        <img
                            src={pro_shipping_image}
                            alt="Company Logo"
                            loading="lazy"
                            style={imgStyle}
                        />
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map((item, index) => (
                                <li 
                                    className={selectedNav === index ? "nav-item navActive" : "nav-item"} 
                                    key={index}
                                    onClick={() => setSelectedNav(index)}
                                >
                                    <Link className="nav-link" to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className={selectedNav === -1 ? "d-flex align-items-center navActive" : "d-flex align-items-center"}>
                            <Link to="/login">
                                <button type="button" className="btn btn-link px-3 me-2" onClick={() => setSelectedNav(-1)}>
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
