function Cards() {
    return (
        <section className="cards">
            <div className="cards__head">
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?
                </p>
            </div>
            <div className="cards__container">
                <div className="cards__card">
                    <div className="cards__img">
                        <img src="src/assets/icon1.png" />
                        <div className="cards__rectangle"></div>
                    </div>
                    <h3>Membership Organisations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="cards__card">
                    <div className="cards__img">
                        <img src="src/assets/icon2.png" />
                        <div className="cards__rectangle"></div>
                    </div>
                    <h3>National Associations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="cards__card">
                    <div className="cards__img">
                        <img src="src/assets/icon3.png" />
                        <div className="cards__rectangle"></div>
                    </div>
                    <h3>Clubs And Groups</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </section>
    )
}

export default Cards;