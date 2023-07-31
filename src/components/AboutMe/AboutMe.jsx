import './AboutMe.css';

const AboutMe = () => (
    <div className="about-me__container">
        <div className="about-me">
            <div className="presentation-container">
                <h1 className="about-me__title">Hello, my name is Luciano Cisneros</h1>

                <p className="presentation">
                    A creative <span className='highlight'>front end</span> developer from Buenos Aires, Argentina.
                </p>
            </div>
            <div className='portrait'>
                <img className="about-me__image" src="/personal-image.webp" alt="personal portrait" />
            </div>
        </div>
    </div>
);

export default AboutMe;
