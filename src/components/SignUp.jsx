import React from 'react';
import '../assets/styles/c-sign-up.css'
function SignUp(props) {
    return (
        <section data-template="sign-up" data-view="default" className='c-sign-up'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-8 text-center">
                        <div className="c-sign-up-heading" >
                            <h6>tagline</h6>
                            <h2>Heading</h2>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error omnis ex at mollitia exercitationem nulla ab, modi natus aperiam non, distinctio velit quo recusandae illo quasi quibusdam ea quaerat.</p>
                        </div>
                        <div className="c-sign-up-form" >
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Your email" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                                <button className='btn btn-primary'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;