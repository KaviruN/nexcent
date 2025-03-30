function Community(){
    return(
        <div className="community">
            <div className="community__content">
                <h2>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className="community__cards">
                <div className="community__img">
                    <img src="src/assets/community-img1.jpg" alt="" />
                </div>
                <div className="community__card">
                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <a href="#" className="about__link">Readmore <i className="ri-arrow-right-long-fill"></i></a>
                </div>
            </div>
            <div className="community__cards">
                <div className="community__img">
                    <img src="src/assets/community-img2.jpg" alt="" />
                </div>
                <div className="community__card">
                    <p>What are your safeguarding responsibilities and how can you manage them?</p>
                    <a href="#" className="about__link">Readmore <i className="ri-arrow-right-long-fill"></i></a>
                </div>
            </div>
            <div className="community__cards">
                <div className="community__img">
                    <img src="src/assets/community-img3.jpg" alt="" />
                </div>
                <div className="community__card">
                    <p>Revamping the Membership Model with Triathlon Australia</p>
                    <a href="#" className="about__link">Readmore <i className="ri-arrow-right-long-fill"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Community;