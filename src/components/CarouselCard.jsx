import React from 'react';

function CarouselCard({ course }) {

    return (
        <div
            className="c-content-slider-card | card shadow border-0 mx-auto"
            style={{ width: "330px", height: "678px" }}
        >

            {/* Image */}
            <div className="position-relative | c-content-slider-card__img">

                <img
                    src={course.image}
                    className="card-img-top img-fluid"
                    style={{
                        //     width: "330px",
                        height: "300px",
                        //     objectFit: "cover"
                    }}
                />

                {/* Icons */}
                <div className="position-absolute bottom-0 left-0 end-0 p-3 | d-flex justify-content-center gap-2 | w-100">

                    <button className="btn btn-light btn-sm rounded-circle">
                        <i className="bi bi-heart"></i>
                    </button>

                    <button className="btn btn-light btn-sm rounded-circle">
                        <i class="bi bi-cart"></i>
                    </button>

                    <button className="btn btn-light btn-sm rounded-circle">
                        <i class="bi bi-eye-fill" width="40"></i>
                    </button>

                </div>

            </div>

            <div className="card-body d-flex flex-column">

                {/* Row 1 */}
                <div className="category d-flex justify-content-between">

                    <small className="c-content-slider-card-body__cat text-primary fw-semibold">
                        {course.subject}
                    </small>

                    <small className='c-content-slider-card-body__rating rounded-pill bg-dark'>
                        ⭐      {course.rating}
                    </small>

                </div>

                {/* Row 2 */}

                <h5 className="c-content-slider-card-body__title fw-bold ">
                    {course.title}
                </h5>

                {/* Row 3 */}

                <p className="c-content-slider-card-body__content text-muted  flex-grow-1">
                    {course.description}
                </p>

                {/* Row 4 */}

                <h5 className="c-content-slider-card-body__price text-primary fw-bold">
                    {course.price}
                </h5>

                {/* Row 5 */}

                <div className="d-flex justify-content-between mt-4">

                    <small>
                        <i className="bi bi-clock"></i> {course.duration}
                    </small>

                    <small>
                        <i className="bi bi-journal-bookmark"></i> {course.lessons} Lessons
                    </small>

                    {course.status === "In Progress" && <small className="fw-semibold text-primary">In Progress</small>}
                    {course.status === "Finished" && <small className="fw-semibold text-success">Finished</small>}
                    {course.status === "In Development" && <small className="fw-semibold text-warning">In Development</small>}






                </div>

                {/* Row 6 */}

                <button className="btn  rounded-pill w-50 mt-4">
                    Enrol Now <i class="bi bi-chevron-right"></i>
                </button>

            </div>

        </div>
    );
}

export default CarouselCard;