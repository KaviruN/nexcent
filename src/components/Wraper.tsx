


function Wraper({ img, title, text }: { img: string; title: string; text: string }) {
    console.log({ img, title, text });
    return (
        <div className="wraper">
            <div className="wraper__img">
                <img src={img} alt={title} />
            </div>
            <div className="wraper__container">
                <h2>{title}</h2>
                <p>{text}</p>
                <a href="#" className="button">Learn More</a>
            </div>
        </div>
    );
}
export default Wraper;