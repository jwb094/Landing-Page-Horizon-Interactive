import React from 'react';
import bgHero from '../assets/imgs/background.png'
import HeroCard from './HeroCard';
import '../assets/styles/c-hero.css'
function Hero(props) {

    let cards = [];
    for (let index = 0; index < 3; index++) {
        cards.push(<HeroCard />);

    }
    return (
        <section
            data-view="c-img-hero"
            data-template="default"
            className="c-img-hero position-relative"
        >
            <img
                src={bgHero}
                alt=""
                className=" w-100 c-img-hero__image"
            />

            <div className="c-img-hero__overlay">

                <div className="container">

                    <div className="c-img-hero__inner">

                        <div className="c-img-hero__content  | d-flex flex-column gap-40 text-center text-white ">
                            <span>Lorem, ipsum dolor.</span>
                            <h1>Lorem ipsum dolor sit.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vel, tempora!
                            </p>
                            <button className="btn btn-primary">
                                CTA
                            </button>
                        </div>

                        <div className="row c-hero-cards">
                            {cards}
                        </div>

                    </div>

                </div>

            </div>
        </section>

    );
}

export default Hero;