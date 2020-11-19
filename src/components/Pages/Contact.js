import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

//to revisit after everything else is done. add backend functionality, redo file structure to accomodate (AFTER GRADUATION)

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div >
            <h1 className="pageHeader">Contact me!</h1>
            <div className="contact-container container">
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                    <div id="contactTitle">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div>

                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div id="contactTitle">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div>

                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div id="contactTitle">
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div>

                        <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
                <div id="contactInfo">
                    <h5>Don't want to contact me here or the form isn't working? Contact me directly!</h5>
                    <div>**** The form isnt ready yet! In the meantime, reach me here: ****</div>
                    <h3>Email: suwanaloet@wisc.edu</h3>
                    <h3> Phone: 626-378-7040</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
