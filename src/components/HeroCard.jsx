import React from 'react';

function HeroCard(props) {
    return (
        //d-none d-sm-block d-md-none d-md-block
        <div className="col-md-4">
            <div className='c-img-hero-card | d-none d-lg-block d-xl-block'>
                <div>Icon</div>
                <h3 className='c-img-hero-card__title'>title</h3>
                <p className='c-img-hero-card__content' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, nulla.</p>
            </div>
        </div>
    );
}

export default HeroCard;