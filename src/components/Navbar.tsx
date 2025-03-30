function Navbar() {

    const toggleMenu = () => {
        const nav = document.querySelector('.nav__container') as HTMLElement;
        if (nav.style.display === 'none') {
            nav.style.display = 'flex';
        }
        else {
            nav.style.display = 'none';
        }
    }


    return (
        <nav className="nav body-2">
            <div className="nav__logo">
                <img src="src/assets/logo.png" alt="logo" />
            </div>
            <div className="nav__container">
                <ul>
                    <li><a href="#home" className="nav__links">Home</a></li>
                    <li><a href="#about" className="nav__links">Service</a></li>
                    <li><a href="#services" className="nav__links">Feature</a></li>
                    <li><a href="#contact" className="nav__links">Product</a></li>
                    <li><a href="#" className="nav__links">Testimonial</a></li>
                    <li><a href="#" className="nav__links">FAQ</a></li>

                </ul>
                <ul className="nav__auth">
                    <li><a href="#login" className="login nav__auth--link">Login</a></li>
                    <li><a href="#signup" className="signup button">Sign Up</a></li>
                </ul>
            </div>
            <div className="nav__hamburger">
                <i className="ri-menu-fill" onClick={toggleMenu} />
            </div>
        </nav>
    )
}



export default Navbar;