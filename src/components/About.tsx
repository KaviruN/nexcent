function About() {
    return (
        <section className="about">
            <div className="about__img">
                <img src="src/assets/about-img.png" alt="" />
            </div>
            <div className="about__container">
                <div className="about__txt">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4>Tim Smith</h4>
                    <p>British Dragon Boat Racing Association</p>
                </div>
                <div className="about__customers">
                    <div className="about__logos">
                        <img src="src/assets/client-1.png" alt="" />
                        <img src="src/assets/client-2.png" alt="" />
                        <img src="src/assets/client-3.png" alt="" />
                        <img src="src/assets/client-4.png" alt="" />
                        <img src="src/assets/client-5.png" alt="" />
                        <img src="src/assets/client-6.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;