import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        contactSubject: '',
        contactMessage: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/contacts', formData);
            console.log(response.data);
            // Temizleyin veya başka bir işlem yapın
            setFormData({
                customerName: '',
                customerEmail: '',
                contactSubject: '',
                contactMessage: ''
            });
        } catch (error) {
            console.error('Error sending contact form: ', error);
        }
    };

    return (
        <>
            <div className="breadcrumb-area section-space--breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="breadcrumb-wrapper">
                                <h2 className="page-title">Contact Us</h2>
                                <ul className="breadcrumb-list">
                                    <li><a href="/Home">Home</a></li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content-wrapper">
                <div class="contact-icon-text-area section-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">


                                <div class="contact-icon-text-wrapper">
                                    <div class="row">
                                        <div class="col-sm-4">


                                            <div class="single-contact-icon-text">
                                                <div class="single-contact-icon-text__icon">
                                                    <i class="fa fa-map-marker"></i>
                                                </div>
                                                <h3 class="single-contact-icon-text__title">ADDRESS</h3>
                                                <p class="single-contact-icon-text__value">Joseph, Canada 10020</p>
                                            </div>

                                        </div>
                                        <div class="col-sm-4">


                                            <div class="single-contact-icon-text">
                                                <div class="single-contact-icon-text__icon">
                                                    <i class="fa fa-phone"></i>
                                                </div>
                                                <h3 class="single-contact-icon-text__title">PHONE NUMBER</h3>
                                                <p class="single-contact-icon-text__value">(012) 3456 7890</p>
                                            </div>


                                        </div>
                                        <div class="col-sm-4">


                                            <div class="single-contact-icon-text">
                                                <div class="single-contact-icon-text__icon">
                                                    <i class="fa fa-envelope"></i>
                                                </div>
                                                <h3 class="single-contact-icon-text__title">MAIL ADDRESS</h3>
                                                <p class="single-contact-icon-text__value">info@website.com</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="contact-form-content-area section-space--contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-form-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="contact-form-wrapper">
                                                <form id="contact-form" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                type="text"
                                                                placeholder="First Name *"
                                                                name="customerName"
                                                                value={formData.customerName}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input
                                                                type="email"
                                                                placeholder="Email *"
                                                                name="customerEmail"
                                                                value={formData.customerEmail}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <input
                                                                type="text"
                                                                placeholder="Subject"
                                                                name="contactSubject"
                                                                value={formData.contactSubject}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <textarea
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Message *"
                                                                name="contactMessage"
                                                                value={formData.contactMessage}
                                                                onChange={handleInputChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button onClick={handleSubmit} type="submit" className="theme-button">
                                                                SEND A MESSAGE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="form-messege"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact-form-content">
                                                <div class="col-md-12">


                                                    <div class="contact-form-content">
                                                        <p>Please view our FAQ to find answers to your questions or send us an email for general questions! Due to unexpected volumes, it is taking us a little longer than we would like to respond to emails. Our current email response time is 3 business days.</p>

                                                        <ul class="social-links">
                                                            <li><a href="http://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href="http://www.plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
                                                            <li><a href="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                                                            <li><a href="http://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                                        </ul>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
