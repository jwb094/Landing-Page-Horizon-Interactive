import React from 'react';
import '../assets/styles/c-content-summary.css'
function Content_Summary(props) {
    return (
        <section data-template="content-summary" data-view='default' className='c-content-summary'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="c-content-summary-content | d-flex flex-column">
                            <div className="c-content-summary-content__thin_red_line"></div>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur cumque doloremque, voluptate ut doloribus architecto quis quas mollitia laudantium quaerat, impedit, itaque neque dolore. Commodi blanditiis error laboriosam atque veniam?</p>
                            <a className='d-flex' href="#">Learn More <i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="c-content-summary-media">

                            <img src="https://placehold.co/600x400" className='w-100' alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content_Summary;