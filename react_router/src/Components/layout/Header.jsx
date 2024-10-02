import { NavLink } from "react-router-dom";

export const Header = () => {

    const getNavLinkStyle  =
        ({isActive})=>{
            return {
              color : isActive ? "green" : "black",
            };
            };

    
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>My First project in React</p>
                        </div>
                        <div className="sign_in_up flex space-x-4">
  <NavLink
    to="#"
    className="px-6 py-2 border-2 border-gray-300 rounded-lg text-white bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-700 transition-all duration-300"
  >
    SIGN IN
  </NavLink>
  <NavLink
    to="#"
    className="px-6 py-2 border-2 border-gray-300 rounded-lg text-white bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-700 transition-all duration-300"
  >
    SIGN UP
  </NavLink>
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
<li className="nav-item">
  <a
    href="/"
    className="relative px-6 py-2 text-xl font-bold text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-lg border-2 border-transparent hover:border-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 transition-all duration-500 ease-in-out transform hover:scale-105"
  >
    CHETAN
    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-25 rounded-full blur transition-all duration-500"></span>
  </a>
</li>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className={({isActive})=>{
                                      isActive ? "nav-link active" :"active";                                    
                            }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" style={({isActive})=>{
                                      return {
                                        color : isActive ? "red" : "black",
                                      };
                                      }}>
                                        About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>Movie</NavLink>
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
