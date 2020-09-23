import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact()  {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }

        return (
            <React.Fragment>
                <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                    <p className="lead">If you would like to contact me, send me a message!
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                    {/* form */}
                    <form action="true" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                        <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                        {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                        <div>
                            <button className="button" onClick={handleSubmit}>Submit</button>
                            <span id="image-loader">
                            <img alt="" src="images/loader.gif" />
                            </span>
                        </div>
                        </fieldset>
                    </form> {/* Form End */}
                    {/* contact-warning */}
                    <div id="message-warning"> Error boy</div>
                    {/* contact-success */}
                    <div id="message-success">
                        <i className="fa fa-check" />Your message was sent, thank you!<br />
                    </div>
                    </div>
                    <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                        Brent Feuerbacher<br />
                        3840 FM 2657 <br />
                        Briggs, TX 78608 US<br />
                        <span>(512) 964-6668</span>
                        </p>
                    </div>
                   
                    </aside>
                </div>
                </section> {/* Contact Section End*/}

            </React.Fragment>
        )
    
}

export default Contact;