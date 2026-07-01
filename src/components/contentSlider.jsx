import React from 'react';
import '../assets/styles/c-content-slider.css'
import courses from '../data/Content_Slider';
import CarouselCard from './CarouselCard';
function ContentSlider(props) {

    const slides = [];

    for (let i = 0; i < courses.length; i += 2) {
        slides.push(courses.slice(i, i + 2));
    }

    return (
        <section data-template="content-slider" data-view="default" className='c-content-slider'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="c-content-slider-heading | d-flex flex-column align-items-center">
                            <h6>lorem ispum</h6>
                            <h2>Lorem ipsum dolor sit.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error omnis ex at mollitia exercitationem nulla ab, modi natus aperiam non, distinctio velit quo recusandae illo quasi quibusdam ea quaerat.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                        <div id="desktopCarousel"

                            className="desktopCarousel | carousel slide d-none d-md-block"
                            data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {slides.map((slide, index) => (

                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""} py-5`}
                                    >

                                        <div className="container">

                                            <div className="row justify-content-center g-4">

                                                {slide.map((course) => (

                                                    <div
                                                        key={course.id}
                                                        className="col-lg-6 d-flex justify-content-center"
                                                    >

                                                        <CarouselCard course={course} />

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
                                data-bs-target="#desktopCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            {/* Next */}
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#desktopCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <div
                            id="mobileCarousel"
                            data-bs-ride="carousel"
                            className="mobileCarousel | carousel slide d-md-none"
                        >

                            <div className="carousel-inner">

                                {courses.map((course, index) => (

                                    <div
                                        key={course.id}
                                        className={`carousel-item ${index === 0 ? "active" : ""} py-5`}
                                    >

                                        <div className="d-flex justify-content-center">
                                            <CarouselCard course={course} />
                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Previous */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#mobileCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            {/* Next */}
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#mobileCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSlider;