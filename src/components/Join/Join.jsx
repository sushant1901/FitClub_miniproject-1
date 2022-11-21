import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ysxdwyk', 'template_7up6xlq', form.current, 'kOdb7e4rrsaFEqqgv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>

            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input  className='input-email' type="email" name='user_email' placeholder='Enter your Email address' />
                    <input type="submit" className='btn btn-j' value="Join Now" />
                </form>
            </div>

        </div>

    )
}

export default Join
