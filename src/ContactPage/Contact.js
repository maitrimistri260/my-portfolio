import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_mexcmvp', e.target, 'user_UOrllEtRJjr3jk9uicrWB')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contact">
            <section className="s2">
                <h2 className="contact-title"> Contact Me</h2>
                <div>
                    <form onSubmit={sendEmail}>
                        <input className="textfield"
                            type="text"
                            name="name"
                            placeholder="your name"
                        />
                        <input className="textfield"
                            type="text"
                            name="email"
                            placeholder="Your Email"
                        />
                        <input className="textfield"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                        />

                        <textarea rows="10"
                            className="msgfield"
                            type="text"
                            name="message"
                            placeholder="Message"
                        />
                        <button type="submit" value="Send Message">Submit</button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact
