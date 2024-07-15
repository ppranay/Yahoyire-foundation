import React, { useState } from 'react';
import contact from "../assets/contactus.png";
import '../css/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Construct WhatsApp URL
            const whatsappNumber = '918080710158'; // Include country code without '+'
            const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
            const encodedText = encodeURIComponent(text);
            const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
            
            // Open WhatsApp URL in a new tab
            window.open(url, '_blank');

            // Reset form fields
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <>
            {/* Contact Start */}
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Get In Touch</h3>
                        <h2>Contact for any query</h2>
                    </div>
                    <div className="contact-img">
                        <img src={contact} alt="Image" />
                    </div>
                    <div className="contact-form">
                        <div className='sent text-success' id="success"></div>
                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete='name' required />
                                <p className="text-danger">{errors.name}</p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} autoComplete='email' required />
                                <p className="text-danger">{errors.email}</p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                <p className="text-danger">{errors.subject}</p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                <p className="text-danger">{errors.message}</p>
                            </div>
                            <div>
                                <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    );
}

export default ContactForm;
