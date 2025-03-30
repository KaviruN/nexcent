import Marquee from "react-fast-marquee";


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
            <img src="src/assets/client-1.png" />
          </div>
          <div className="client__images--container">
            <img src="src/assets/client-2.png" />
          </div>
          <div className="client__images--container">
            <img src="src/assets/client-3.png" />
          </div>
          <div className="client__images--container">
            <img src="src/assets/client-4.png" />
          </div>
          <div className="client__images--container">
            <img src="src/assets/client-5.png" />
          </div>
          <div className="client__images--container">
            <img src="src/assets/client-6.png" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Clients;