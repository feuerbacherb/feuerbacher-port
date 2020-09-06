import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                <h1>Check Out Some of My Work.</h1>
                {/* portfolio-wrapper */}
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div key="project-it" className="columns portfolio-item">
                        <div className="item-wrap">                    
                            <a href="https://project-it-panda.herokuapp.com" title="project-it" target="_blank" rel="noopener noreferrer">
                            <img alt="project it" src="images/portfolio/projectit.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Project It</h5>
                                <p>Project Management and Team Building in one spot</p>
                                </div>
                            </div>                            
                            </a>    
                                <a href="https://github.com/roxyvaught/project-it"><i className="fa fa-github" /></a>
                        </div>
                    </div> {/*item end */}
                    <div className="item-wrap">
                        <div className="item-wrap">                    
                            <a href="https://feuerbacherb.github.io/Vacation-Planner/" title="vacation-planner" target="_blank" rel="noopener noreferrer">
                            <img alt="vacation-planner" src="images/portfolio/vacationplanner.jpg" />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                <h5>Vacation Planner</h5>
                                <p>Looking for a quick vacation to a national park?  This is the place to start!</p>
                                </div>
                            </div>                            
                            </a>    
                                <a href="https://github.com/feuerbacherb/vacation-planner"><i className="fa fa-github" /></a>
                        </div>
                    </div> {/*item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://infinite-ocean-27765.herokuapp.com/" title="hearth" target="_blank" rel="noopener noreferrer">
                        <img alt="" src="images/portfolio/hearth.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Hearth</h5>
                            <p>A secure way to share experiences without having to join a social network.</p>
                            </div>
                        </div>
                        </a>                            
                            <a href="https://github.com/feuerbacherb/hearth"><i className="fa fa-github" /></a>

                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item"> {/* item start */}
                    <div className="item-wrap">
                        <a href="https://feuerbacherb.github.io/password-generator/" title="password-generator" target="_blank" rel="noopener noreferrer">
                        <img alt="" src="images/portfolio/passwordgenerator.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Hearth</h5>
                            <p>Need to create a new password?  With this program, you can create a password that with upper/lowercase as well as special characters!</p>
                             </div>
                        </div>
                        </a>                           
                            <a href="https://github.com/feuerbacherb/password-generator"><i className="fa fa-github" /></a>

                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://feuerbacherb.github.io/code-quiz" title="code-quiz" target="_blank" rel="noopener noreferrer">
                        <img alt="code quiz" src="images/portfolio/codequiz.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Code Quiz</h5>
                            <p><br /><br /><br />Try your hand at a randomized quiz and beat the clock for the highest score!<br /><br /></p>
                            </div>
                        </div>
                        </a>                            
                            <a href="https://github.com/feuerbacherb/code-quiz"><i className="fa fa-github" /></a>

                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://feuerbacherb.github.io/work-scheduler/" title="work scheduler" target="_blank" rel="noopener noreferrer">
                        <img alt="" src="images/portfolio/workscheduler.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Code Quiz</h5>
                            <p>Try your hand at a randomized quiz and beat the clock for the highest score!</p>
                            </div>
                        </div>
                        </a>
                            <a href="https://github.com/feuerbacherb/work-scheduler"><i className="fa fa-github" /></a>

                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://feuerbacherb.github.io/weather-dashboard/" title="weather dashboard" target="_blank" rel="noopener noreferrer">
                        <img alt="" src="images/portfolio/weatherdashboard.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Weather Dashboard</h5>
                            <p>Find the weather forecast for your area!</p>
                            </div>
                        </div>
                        </a>                            
                            <a href="https://github.com/feuerbacherb/weather-dashboard"><i className="fa fa-github" /></a>

                    </div>
                    </div> {/* item end */}
                </div> {/* portfolio-wrapper end */}
                </div> {/* twelve columns end */}
            </div></section>

        );
    }
}