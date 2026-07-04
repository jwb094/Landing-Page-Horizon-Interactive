import React from 'react';

function TestmonialCard({ content }) {

    const rating = [];
    {
        for (let index = 0; index < content.rating; index++) {

            rating.push(<i className="bi bi-star-fill text-warning"></i>)

        }
    }
    return (
        <div className='c-testmonial-card shadow | d-flex flex-column  text-center' key={content.id}>
            <div className='c-testmonial-card-media'>
                <img className='rounded-circle' src={content.image} alt={`profile pic of ${content.name}`} />
            </div>
            <div className='c-testmonial-card-content'>
                <p>{content.content}</p>
                <small className='rating'>

                    {rating}

                </small>
                <div className='personal | d-flex flex-column'>
                    <h5>{content.name}</h5>
                    <h6>{content.occupation}</h6>
                </div>
            </div>
        </div>
    );
}

export default TestmonialCard;