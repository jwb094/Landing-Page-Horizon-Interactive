import React from 'react';
import bgHero from '../assets/imgs/background.png'
import HeroCard from './HeroCard';
import { HeroContent } from '../data/HeroContent';
import { HeroCards } from '../data/HeroCards';
import '../assets/styles/c-hero.css'
function Hero(props) {

    let cards = [];
    for (let index = 0; index < HeroCards.length; index++) {
        // const id = Math.floor(Math.random() * 100);
        cards.push(
            <HeroCard
                key={HeroCards[index].id}
                content={HeroCards[index]}
            />);

    }

    return (
        <section
            data-view="img-hero"
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
                            <h5>{HeroContent.tagline}</h5>
                            <h1>{HeroContent.heading}</h1>
                            <p className="d-none  d-sm-none d-md-block">
                                {HeroContent.description}
                            </p>
                            <a className="btn my-0 mx-auto " href={HeroContent.cta.href}>
                                {HeroContent.cta.label}
                            </a>
                        </div>

                        <div className="row c-hero-cards ">
                            {cards}
                        </div>

                    </div>

                </div>

            </div>
        </section >

    );
}

export default Hero;