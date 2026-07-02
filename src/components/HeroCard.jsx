import React from 'react';

function HeroCard({ content }) {

    return (
        //d-none d-sm-block d-md-none d-md-block
        <div className="col-md-4">
            <div className="c-img-hero-card |   d-none d-sm-block d-md-none d-lg-flex  d-xl-flex  | d-flex flex-column" key={content.id}>
                {content.icon}
                <div className="c-img-hero-card__thin_red_line"></div>
                <h3 className='c-img-hero-card__title'>  {content.title}</h3>
                <p className='c-img-hero-card__content' >  {content.description}</p>
            </div>
        </div >
    );
}

export default HeroCard;