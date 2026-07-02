
import React, { useState, useRef } from 'react';
import '../assets/styles/c-sign-up.css'
import { SignUpContent } from '../data/SignUp';
function SignUp(props) {


    const inputEmailRef = useRef(null);
    const [result, setResult] = useState("");
    const [errors, setErrors] = useState({});

    function validateFields() {
        let validationErrors = {};
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmailRef.current?.value)) {
            validationErrors.email = "Invalid Email address"
        }
        //append the validationErrors to State
        setErrors(validationErrors);
        //Return True or false depending on the length
        return Object.keys(validationErrors).length === 0;
    }
    const submitForm = (e) => {
        e.preventDefault();
        const isValid = validateFields();
        if (!isValid) return;

        setResult(`Thank you , you have been added to our service`);
    }

    return (
        <section data-template="sign-up" data-view="default" className='c-sign-up'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-8 text-center">
                        <div className="c-sign-up-heading" >
                            <h6 class="text-center">{SignUpContent.tagline}</h6>
                            <h2 class="text-center">{SignUpContent.heading}</h2>
                            <p className='text-center'>{SignUpContent.description}</p>
                        </div>
                        <div className="c-sign-up-form" >
                            <form action="post" onSubmit={submitForm}>

                                <div class="input-group mb-3">
                                    <input ref={inputEmailRef} type="email" class="form-control" placeholder="Your email" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
                                    <button className='btn '>Subscribe</button>
                                </div>
                            </form>
                        </div>
                        {errors.email && (
                            <div class="col-sm-12 col-md-12 text-center">
                                <div className=" mt-2 | alert alert-danger" role="alert">
                                    {errors.email}</div>
                            </div>
                        )}
                        {result &&
                            <div class="col-sm-12 col-md-12 text-center">
                                < div className="alert alert-success" role="alert">
                                    {result}
                                </div>   </div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;