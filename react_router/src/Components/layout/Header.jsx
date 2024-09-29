import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>My First project in React</p>
                        </div>
                        <div className="sign_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="navbar-brand">
                        {/* <NavLink to="/">
                            <img
                                src="vite.svg"
                                alt="thapa eCommerce logo"
                                className="logo"
                                width="100%"
                                height="50%"
                            />
                        </NavLink> */}
                        <li className="nav-item">WorldKannda</li>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link">Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/cart"
                                    className="nav-link add-to-cart-button"
                                    id="cartValue"
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
