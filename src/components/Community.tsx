import communityImg1 from "../assets/community-img1.jpg";
import communityImg2 from "../assets/community-img2.jpg";
import communityImg3 from "../assets/community-img3.jpg";

function Community() {
    return (
        <div className="community">
            <div className="community__content">
                <h2>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className="community__cards">
                <div className="community__container">
                    <div className="community__img">
                        <img src={communityImg1} alt="Community 1" />
                    </div>
                    <div className="community__card">
                        <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
                        <a href="#" >Readmore <i className="ri-arrow-right-long-fill"></i></a>
                    </div>
                </div>
                <div className="community__container">
                    <div className="community__img">
                        <img src={communityImg2} alt="Community 2" />
                    </div>
                    <div className="community__card">
                        <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                        <a href="#" >Readmore <i className="ri-arrow-right-long-fill"></i></a>
                    </div>
                </div>
                <div className="community__container">
                    <div className="community__img">
                        <img src={communityImg3} alt="Community 3" />
                    </div>
                    <div className="community__card">
                        <h4>Revamping the Membership Model with Triathlon Australia</h4>
                        <a href="#" >Readmore <i className="ri-arrow-right-long-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;