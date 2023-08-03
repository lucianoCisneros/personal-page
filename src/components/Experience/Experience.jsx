import './Experience.css';

const Experience = () => (
    <div className='experience__container'>
        <div className='experience'>
            <h2 className='experience__title'>Experience</h2>

            <div className='position-container'>
                <img className='logo-artear' src="/artear-logo.png" alt="" />

                <div>
                    <h3 className='experience-position__title'>Front-end Developer</h3>

                    <p className='experience__description'>Front end development with react, in the Arc environment.</p>
                    <p className='experience__year'>Nov 2021 - Present</p>
                </div>
            </div>
        </div>

        <div className='education'>
            <h2 className='experience__title'>Education</h2>

            <div className='position-container'>
                <img className='logo-dh' src="/dh-logo.png" alt="" />

                <div>
                    <h3 className='experience-position__title'>Full Stack Developer</h3>

                    <p className='experience__description'>
                        Development of an ecommerce web application.
                        Use of HTML, CSS and JavaScript client-side interactions and/or validations.
                        The BackEnd was developed in Node, with Express as a supporting Framework using MVC best practices.
                        We design and use a UML for the assembly and organization of the relational database with which we then interact through Sequelize with MySQL.
                    </p>
                    <p className='experience__year'>Duration: 6 months</p>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;