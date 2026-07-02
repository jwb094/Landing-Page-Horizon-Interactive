import React from 'react';
import TestmonialCard from '../components/Testmonials/TestmonialCard'
// import TestmonialCard from './TestmonialCard';
import testimonials from '../data/Testmonials';
import '../assets/styles/c-testimonials.css'
function Testmonials(props) {

    const slides = [];

    for (let i = 0; i < testimonials.length; i += 2) {
        slides.push(testimonials.slice(i, i + 2));
    }
    console.table(slides);
    return (
        <section data-template="testmonials" data-view="default" className='c-testmonials'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="c-testimonials-heading | d-flex flex-column align-items-center">
                            <h6>lorem ispum</h6>
                            <h2>Lorem ipsum dolor sit.</h2>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error omnis ex at mollitia exercitationem nulla ab, modi natus aperiam non, distinctio velit quo recusandae illo quasi quibusdam ea quaerat.</p>
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

                            {slides.map((content, index) => (

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