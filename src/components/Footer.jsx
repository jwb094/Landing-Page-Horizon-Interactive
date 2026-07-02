import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-5">

            <div className="container">

                <div className="row gy-4">

                    {/* Column 1 - Brand */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className="fw-bold">Marketly</h4>

                        <p className="text-secondary mt-3">
                            We help businesses grow through modern digital marketing,
                            branding strategies, and high-converting landing pages.
                        </p>

                        <button className="btn btn-primary mt-2">
                            Get Free Consultation
                        </button>
                    </div>

                    {/* Column 2 - Services */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h5 className="fw-semibold mb-3">Services</h5>

                        <ul className="nav flex-column">
                            <li><a href="#" className="nav-link p-0 text-secondary">SEO Optimization</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Social Media Marketing</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">PPC Advertising</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Content Strategy</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Resources */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h5 className="fw-semibold mb-3">Resources</h5>

                        <ul className="nav flex-column">
                            <li><a href="#" className="nav-link p-0 text-secondary">Marketing Blog</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Case Studies</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Free Guides</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Webinars</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Company */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h5 className="fw-semibold mb-3">Company</h5>

                        <ul className="nav flex-column">
                            <li><a href="#" className="nav-link p-0 text-secondary">About Us</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Our Team</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Careers</a></li>
                            <li><a href="#" className="nav-link p-0 text-secondary">Contact</a></li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <hr className="border-secondary my-4" />

                {/* Bottom bar */}
                <div className="text-center text-secondary small">
                    © {new Date().getFullYear()} Marketly. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;