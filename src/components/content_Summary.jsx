import React from 'react';
import '../assets/styles/c-content-summary.css'
import { ContentSummaryContent } from '../data/Content_Summary';
import { useThemeContext } from '../context/ThemeContext';


function Content_Summary(props) {
    const { theme } = useThemeContext();
    return (
        <section data-template="content-summary" data-view='default' className={theme === 'Light' ? 'c-content-summary bg-light-color' : 'c-content-summary bg-dark-color'}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="c-content-summary-content | d-flex flex-column">
                            <div className="c-content-summary-content__thin_red_line"></div>
                            <h2 className={theme === 'Light' ? 'primary-text-color  ' : 'light-text-color '}>{ContentSummaryContent.title}</h2>
                            <p className={theme === 'Light' ? 'primary-text-color  ' : 'light-text-color '}>{ContentSummaryContent.content}</p>
                            <a className={theme === 'Light' ? 'primary-text-color  d-flex' : 'light-text-color d-flex'} href={ContentSummaryContent.cta.url}>{ContentSummaryContent.cta.label} <i class="bi bi-chevron-right"></i></a>
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