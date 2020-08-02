import React, { Component } from 'react';
import resume from './resume.pdf';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>
                        My family lives in the beautiful countryside of Briggs, TX.  We raise sheep on our ranch, the Lazy FR, and like to keep things a bit lazy.  The picture at the top of the page is one of the amazing sunsets we get to experience every night.                        
                    </p>
                    <p>
                        I like being out in the dust, working the fields, but my interests lie in programming.  After working as a stay-at-home father while our children grew to high-school age, I became interested in rejoining the workforce.  One of the major items on my list was to join UT's Full Stack Coding Bootcamp and receive their certification.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>Brent Feuerbacher</span><br />
                            <span>3840 FM 2657 Briggs, TX USA
                            </span><br />
                            <span>(512) 964-6668</span><br />
                            <span>feuerbacherb@gmail.com</span>
                        </p>
                        </div>
                        <div className="columns download">
                        <p>
                            <a href={resume} className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>
                        </div>
                    </div> 
                    </div> 
                </div>
                </section>
            </React.Fragment>
        );
    }
}