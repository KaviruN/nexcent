import Marquee from "react-fast-marquee";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";

function Clients() {
  return (
    <section className="client">
      <div className="client__head">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client__images">
        <Marquee speed={90} pauseOnHover={true} gradient={false}>
          <div className="client__images--container">
            <img src={client1} alt="Client 1" />
          </div>
          <div className="client__images--container">
            <img src={client2} alt="Client 2" />
          </div>
          <div className="client__images--container">
            <img src={client3} alt="Client 3" />
          </div>
          <div className="client__images--container">
            <img src={client4} alt="Client 4" />
          </div>
          <div className="client__images--container">
            <img src={client5} alt="Client 5" />
          </div>
          <div className="client__images--container">
            <img src={client6} alt="Client 6" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Clients;