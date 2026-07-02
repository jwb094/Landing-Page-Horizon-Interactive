import React from 'react';
import '../assets/styles/c-content-summary.css'
import { ContentSummaryContent } from '../data/Content_Summary';
function Content_Summary(props) {
    return (
        <section data-template="content-summary" data-view='default' className='c-content-summary'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="c-content-summary-content | d-flex flex-column">
                            <div className="c-content-summary-content__thin_red_line"></div>
                            <h2>{ContentSummaryContent.title}</h2>
                            <p>{ContentSummaryContent.content}</p>
                            <a className='d-flex' href={ContentSummaryContent.cta.url}>{ContentSummaryContent.cta.label} <i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="c-content-summary-media">

                            <img src={ContentSummaryContent.content_summary_image} className='w-100' alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content_Summary;