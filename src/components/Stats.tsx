import CountUp from "react-countup";

function Stats() {
    return (
        <section className="stats">
            <div className="stats__header">
                <h2>Helping a local</h2>
                <h2>business reinvent itself</h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="stats__container">
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src="src/assets/stats-icon1.png" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                            start={0} // Starting number
                            end={2245341}        // Ending number
                            duration={5}  // Duration in seconds
                            separator=","  // Add commas as thousand separators
                        />
                        </h2>
                        <p>Members</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src="src/assets/stats-icon2.png" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                            start={0} // Starting number
                            end={46328}        // Ending number
                            duration={5}  // Duration in seconds
                            separator=","  // Add commas as thousand separators
                        />
                        </h2>
                        <p>Clubs</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src="src/assets/stats-icon3.png" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                            start={0} // Starting number
                            end={828867}        // Ending number
                            duration={5}  // Duration in seconds
                            separator=","  // Add commas as thousand separators
                        />
                        </h2>
                        <p>Event Bookings</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src="src/assets/stats-icon4.png" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                            start={0} // Starting number
                            end={1926436}        // Ending number
                            duration={5}  // Duration in seconds
                            separator=","  // Add commas as thousand separators
                        />
                        </h2>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats;