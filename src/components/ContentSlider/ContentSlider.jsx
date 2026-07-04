import React from 'react';
import '../../assets/styles/c-content-slider.css'
import courses from '../../data/Content_Slider_Courses';
import CarouselCard from './CarouselCard';
import { ContentSliderHeading } from '../../data/ContentSliderHeading';
import { useThemeContext } from '../../context/ThemeContext';
function ContentSlider(props) {
    const { theme } = useThemeContext();
    const slides = [];

    for (let i = 0; i < courses.length; i += 2) {
        slides.push(courses.slice(i, i + 2));
    }

    /**
     *           <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-8 text-center">
                        <div className="c-sign-up-heading" >
     */

    return (
        <section data-template="content-slider" data-view="default" className={theme === 'Light' ? 'c-content-slider bg-light-color' : 'c-content-slider bg-dark-color'}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12">
                        <div className="c-content-slider-heading | d-flex flex-column align-items-center">
                            <h6 className={theme === 'Light' ? 'primary-text-color text-center ' : 'light-text-color text-center'}>{ContentSliderHeading.tagline}</h6>
                            <h2 className={theme === 'Light' ? 'primary-text-color text-center ' : ' light-text-color text-center'}>{ContentSliderHeading.heading}</h2>
                            <p className={theme === 'Light' ? 'primary-text-color text-center ' : ' light-text-color text-center'}>{ContentSliderHeading.description}</p>
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