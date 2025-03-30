import aboutImg from '../assets/about-img.png';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import client4 from '../assets/client-4.png';
import client5 from '../assets/client-5.png';
import client6 from '../assets/client-6.png';

function About() {
    return (
        <section className="about">
            <div className="about__img">
                <img src={aboutImg} alt="About" />
            </div>
            <div className="about__container">
                <div className="about__txt">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4>Tim Smith</h4>
                    <p>British Dragon Boat Racing Association</p>
                </div>
                <div className="about__customers">
                    <div className="about__logos">
                        <img src={client1} alt="Client 1" />
                        <img src={client2} alt="Client 2" />
                        <img src={client3} alt="Client 3" />
                        <img src={client4} alt="Client 4" />
                        <img src={client5} alt="Client 5" />
                        <img src={client6} alt="Client 6" />
                    </div>
                    <a href="#" className="about__link">Meet all customers <i className="ri-arrow-right-long-fill"></i></a>
                </div>
            </div>
        </section>
    );
}

export default About;