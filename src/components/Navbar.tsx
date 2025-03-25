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
                <ul className="nav__links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Service</a></li>
                    <li><a href="#services">Feature</a></li>
                    <li><a href="#contact">Product</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">FAQ</a></li>

                </ul>
                <ul className="nav__links">
                    <li><a href="#login" className="login">Login</a></li>
                    <li><a href="#signup" className="signup">Sign Up</a></li>
                </ul>
            </div>
            <div className="nav__hamburger">
                <i className="ri-menu-fill" onClick={toggleMenu} />
            </div>
        </nav>
    )
}



export default Navbar;