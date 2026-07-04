import React from 'react';

function TestmonialCard(props) {
    console.log(props);
    return (
        <div className='c-testmonial-card  | d-flex flex-column  text-center'>
            <div className='c-testmonial-card-media'>
                <img src="https://placehold.co/128x128" alt="" />
            </div>
            <div className='c-testmonial-card-content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, laborum!</p>
                <small className='rating'>Rating</small>
                <div className='personal | d-flex flex-column'>
                    <h5>FirstN LastN</h5>
                    <h6>Occupation</h6>
                </div>
            </div>
        </div>
    );
}

export default TestmonialCard;