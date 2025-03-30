function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Lessons and insights <span className="header__span">from 8 years</span></h1>
                <p className="header__para">Where to grow your business as a photographer: site or social media?</p>
                <a href="#" className="button">Register</a>
            </div>
            <div className="header__hero">
                <img src="src/assets/hero-img.png" alt="hero-img" className="header__hero--img"/>
            </div>
        </header>
    );
}

export default Header;
// This component is a placeholder for the header of the application.