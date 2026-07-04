import React from 'react';
import TestmonialCard from './TestmonialCard'
import { useThemeContext } from '../../context/ThemeContext';
import testimonials from '../../data/Testmonials';
import { TestimonialHeading } from '../../data/TestmonialHeading';
import '../../assets/styles/c-testimonials.css'
function Testmonials(props) {
    const { theme } = useThemeContext();
    const slides = [];

    for (let i = 0; i < testimonials.length; i += 2) {
        slides.push(testimonials.slice(i, i + 2));
    }

    return (
        <section data-template="testmonials" data-view="default" className={theme === 'Light' ? 'c-testmonials bg-light-color' : 'c-testmonials bg-dark-color'}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="c-testimonials-heading | d-flex flex-column align-items-center">
                            <h6 className={theme === 'Light' ? 'primary-text-color  ' : 'light-text-color '}>{TestimonialHeading.tagline}</h6>
                            <h2 className={theme === 'Light' ? 'primary-text-color  text-center' : 'light-text-color text-center'}>{TestimonialHeading.heading}</h2>
                            <p className={theme === 'Light' ? 'primary-text-color  text-center' : 'light-text-color '}>{TestimonialHeading.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <div id="desktopCarousel-testmonial"

                        className="desktopCarousel-testmonial | carousel slide d-none d-md-block"
                        data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {slides.map((slide, index) => (

                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? "active" : ""} py-5`}
                                >

                                    <div className="container">

                                        <div className="row justify-content-center g-4">

                                            {slide.map((content) => (

                                                <div
                                                    key={content.id}
                                                    className="col-lg-6 d-flex justify-content-center"
                                                >

                                                    <TestmonialCard content={content} />

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            ))}
                        </div>
                        {/* Previous */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#desktopCarousel-testmonial"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        {/* Next */}
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#desktopCarousel-testmonial"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <div id="mobileCarousel-testmonials"
                        data-bs-ride="carousel"
                        className="mobileCarousel-testmonials | carousel slide d-md-none"
                    >

                        <div className="carousel-inner">

                            {testimonials.map((content, index) => (

                                <div
                                    key={content.id}
                                    className={`carousel-item ${index === 0 ? "active" : ""} py-5`}
                                >

                                    <div className="d-flex justify-content-center">
                                        <TestmonialCard content={content} />
                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Previous */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#mobileCarousel-testmonials"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        {/* Next */}
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#mobileCarousel-testmonials"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>

                    </div>
                </div>
            </div >
        </section >
    );
}

export default Testmonials;