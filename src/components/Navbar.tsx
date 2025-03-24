function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo">
                    <img src="src/assets/logo.png" alt="" />
                </div>
                <ul className="nav__links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Service</a></li>
                    <li><a href="#services">Feature</a></li>
                    <li><a href="#contact">Product</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <div className="nav__auth-links">
                    <a href="#login" className="login">Login</a>
                    <a href="#signup" className="signup">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;