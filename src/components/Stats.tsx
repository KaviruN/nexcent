import CountUp from "react-countup";
import statsIcon1 from "../assets/stats-icon1.png";
import statsIcon2 from "../assets/stats-icon2.png";
import statsIcon3 from "../assets/stats-icon3.png";
import statsIcon4 from "../assets/stats-icon4.png";

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
                        <img src={statsIcon1} alt="Stats Icon 1" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                                start={0}
                                end={2245341}
                                duration={5}
                                separator=","
                            />
                        </h2>
                        <p>Members</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src={statsIcon2} alt="Stats Icon 2" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                                start={0}
                                end={46328}
                                duration={5}
                                separator=","
                            />
                        </h2>
                        <p>Clubs</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src={statsIcon3} alt="Stats Icon 3" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                                start={0}
                                end={828867}
                                duration={5}
                                separator=","
                            />
                        </h2>
                        <p>Event Bookings</p>
                    </div>
                </div>
                <div className="stats__content">
                    <div className="stats__icon">
                        <img src={statsIcon4} alt="Stats Icon 4" />
                    </div>
                    <div className="stats__countup">
                        <h2>
                            <CountUp
                                start={0}
                                end={1926436}
                                duration={5}
                                separator=","
                            />
                        </h2>
                        <p>Members</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;