import React from 'react';
import emailjs from 'emailjs-com';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nieiy3i', 'template_sqyfb38', e.target, 'user_ooGm6jpztE1nrjRIyF0vM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="dark-bg text-center">
            <div id="contact" className="mt-5 py-5 text-white">
                <h1 className="mb-4">CONTACT</h1>
                <p className="text-info">Have a question or want to work together?</p>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-2 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto text-end">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mb-2">
                <a href="https://www.linkedin.com/in/sajib-barua-475814203/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ color: 'white', fontSize: '50px', marginRight: "30px" }} /></a> 
                <a href="https://github.com/SajibBarua-art" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ color: 'white', fontSize: '40px' }} /></a>
            </div>
            <p className="text-white">Created By Sajib | &#169; {new Date().getFullYear()} All rights reserved.</p>
        </div>
    );
};

export default Contact;