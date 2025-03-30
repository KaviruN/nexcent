function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src="src/assets/logo2.png" alt="Logo" />
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className="footer__social">
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-basketball-line"></i>
                    <i className="ri-twitter-fill"></i>
                    <i className="ri-youtube-fill"></i>
                </div>
            </div>
            <div className="footer__container">
                <div className="footer__content">
                <h4>Company</h4>
                    <ul className="footer__links">
                        <li><a href="#about">About us</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact us</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h4>Support</h4>
                    <ul className="footer__links">
                        <li><a href="#help-center">Help center</a></li>
                        <li><a href="#terms">Terms of service</a></li>
                        <li><a href="#legal">Legal</a></li>
                        <li><a href="#privacy">Privacy policy</a></li>
                        <li><a href="#status">Status</a></li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h4>Stay up to date</h4>
                    <div className="footer__subscribe">
                        <input type="email" name="email" placeholder="Your email address" />
                        <button type="submit" className="footer__subscribe-button">
                            <i className="ri-send-plane-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;