import './Proyects.css';

const Proyects = () => (
   <div className='proyects__section'>
    <h2 className='experience__title'>Proyects</h2>

    <div className='proyects__container'>
        <div className='proyect__card'>
            <img className='proyect__img' src="/trueSize-page.png" alt="" />

            <div className='proyect__info'> 
                <h2 className='proyect__title'>True Size Store</h2>
                <p className='proyect__description'>Ecommerce web application, developed in React using components, responsive design and mobileFirst. FireBase as database.</p>
            </div>
        </div>

        <div className='proyect__card'>
            <img className='proyect__img' src="/ryzen-page.png" alt="" />

            <div className='proyect__info'> 
                <h2 className='proyect__title'>Ryzen Store</h2>
                <p className='proyect__description'>Development of an ecommerce web application. Use of HTML, CSS and JavaScript client-side interactions and validations. The BackEnd was developed in Node, with Express as a supporting Framework. We design and use a relational database with which we interact through Sequelize with MySQL.</p>
            </div>
        </div>

        <div className='proyect__card'>
            <img className='proyect__img' src="" alt="" />

            <div className='proyect__info'> 
                <h2 className='proyect__title'>?</h2>
                <p className='proyect__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consequatur quasi doloribus fugit modi officiis beatae nihil atque magnam sed.</p>
            </div>
        </div>

        <div className='proyect__card'>
            <img className='proyect__img' src="" alt="" />

            <div className='proyect__info'> 
                <h2 className='proyect__title'>?</h2>
                <p className='proyect__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consequatur quasi doloribus fugit modi officiis beatae nihil atque magnam sed.</p>
            </div>
        </div>
    </div>
   </div>
);

export default Proyects;
