import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function AboutUs() {
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
              {/*=======  breadcrumb wrapper  =======*/}
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">About Us</h2>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">About Us</li>
                </ul>
              </div>
              {/*=======  End of breadcrumb wrapper  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}
      {/*====================  page content wrapper ====================*/}
      <div className="page-content-wrapper">
        {/*=======  about page top wrapper  =======*/}
        <div className="about-page-top-wrapper section-space">
          {/*=======  about us brief wrapper  =======*/}
          <div className="about-us-brief-wrapper section-space--small">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-5">
                  <h2 className="about-us-brief-title">
                    A Better Way To Shop Online For Furniture
                  </h2>
                </div>
                <div className="col-xl-8 col-lg-7">
                  <div className="about-us-brief-desc">
                    <p>
                      Robin is more than just an online furniture store. We hand
                      pick and curate the best in quality and style for you and your
                      home.
                    </p>
                    <p>
                      Why spend days driving from store to store trying to find that
                      perfect look or unique piece. Find everything you’re looking
                      for and more from the comfort of your own home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of about us brief wrapper  =======*/}
          {/*=======  about us slider wrapper  =======*/}
          <div className="about-us-slider-wrapper section-space--small">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="about-us-slider theme-slick-slider"
                    data-slick-setting='{
                          "slidesToShow": 1,
                          "slidesToScroll": 1,
                          "arrows": false,
                          "dots": true,
                          "autoplay": false,
                          "autoplaySpeed": 5000,
                          "speed": 500,
                          "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                          "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
                      }'
                    data-slick-responsive='[
                          {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                          {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                          {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                          {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                          {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                          {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                      ]'
                  >
                    {/*=======  single slider image  =======*/}
                    <div className="single-image">
                      <img
                        src="assets/img/about/about_us_slide_01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    {/*=======  End of single slider image  =======*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of about us slider wrapper  =======*/}
          {/*=======  about us process section wrapper  =======*/}
          <div className="about-us-process-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-process">
                    <h3 className="title">
                      {" "}
                      <span>01.</span> SERVICE
                    </h3>
                    <p className="description">
                      Our Customer Care Team can answer any questions you may have,
                      as well as provide personalized assistance with: scheduling,
                      availability, bulk orders, custom orders and delivery options.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-process">
                    <h3 className="title">
                      {" "}
                      <span>02.</span> SELECTION
                    </h3>
                    <p className="description">
                      Shop our extensive selection of quality furniture and home
                      décor for every room, plus a vast assortment of mattresses,
                      appliances and electronics at prices that can’t be beat!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-process">
                    <h3 className="title">
                      {" "}
                      <span>03.</span> SATISFACTION
                    </h3>
                    <p className="description">
                      Shop with confidence! Our Satisfaction Guarantee and Price
                      Match Promise ensure you are always happy with your purchase.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-process">
                    <h3 className="title">
                      {" "}
                      <span>04.</span> DELIVERY
                    </h3>
                    <p className="description">
                      Our One Of A Kind Delivery network is fast, reliable and FREE
                      on thousands of items. Delivery is free on all purchases over
                      $799, plus many home decor items qualify for FREE SHIPPING.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=======  End of about us process section wrapper  =======*/}
        </div>
        {/*=======  End of about page top wrapper  =======*/}
        {/*=======  team member area  =======*/}
        <div className="team-member-area section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title">MEET OUR TEAM</h2>
                  <p className="section-subtitle">
                    Your Satisfaction defines our Success
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/*=======  team members wrapper  =======*/}
                <div className="team-member-wrapper">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      {/*=======  single team member  =======*/}
                      <div className="single-team-member">
                        <div className="single-team-member__image">
                          <img
                            src="https://media.licdn.com/dms/image/C4E03AQEpHtI3Z6YcRA/profile-displayphoto-shrink_800_800/0/1598915463052?e=1708560000&v=beta&t=NcTPWFztbmY73YYuQGYYMzVTrqRrHI29dn1Zyt4F-4E"
                            className="img-fluid h-100"
                            alt=""
                          />
                        </div>
                        <div className="single-team-member__content">
                          <h3 className="name">Alparslan KOBAK</h3>
                          <h4 className="designation">CEO</h4>
                          <p className="short-desc">
                            Alparslan's focus is clear: Deliver the best possible
                            customer experience for each of their clients. He works
                            with all team members to ensure that goal is met - each
                            and every day.
                          </p>
                          <ul className="social-profiles">
                            <li>
                              <Link target="_blank" to="https://www.linkedin.com/in/alparslan-kobak-5a98831b5/">
                                <i className="fa fa-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-rss" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*=======  End of single team member  =======*/}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      {/*=======  single team member  =======*/}
                      <div className="single-team-member">
                        <div className="single-team-member__image">
                          <img
                            src="assets/img/about/team-member-2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-team-member__content">
                          <h3 className="name">John Wilson</h3>
                          <h4 className="designation">Manager</h4>
                          <p className="short-desc">
                            John has always focused on exceptional customer service,
                            attention to detail and offering a friendly,
                            professional and detail-oriented approach for every
                            customer shopping with his team.
                          </p>
                          <ul className="social-profiles">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-rss" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*=======  End of single team member  =======*/}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      {/*=======  single team member  =======*/}
                      <div className="single-team-member">
                        <div className="single-team-member__image">
                          <img
                            src="assets/img/about/team-member-3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-team-member__content">
                          <h3 className="name">Charlotte Hill</h3>
                          <h4 className="designation">Design</h4>
                          <p className="short-desc">
                            "I create environments that compliment your daily life,
                            from a sanctuary for a good night's sleep to a welcoming
                            home to share with family and friends. Color is a key
                            element to any design project".
                          </p>
                          <ul className="social-profiles">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-rss" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*=======  End of single team member  =======*/}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      {/*=======  single team member  =======*/}
                      <div className="single-team-member">
                        <div className="single-team-member__image">
                          <img
                            src="assets/img/about/team-member-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="single-team-member__content">
                          <h3 className="name">Jim Shafer</h3>
                          <h4 className="designation">Marketing</h4>
                          <p className="short-desc">
                            Jim has over 25 years' experience in the Marketing and
                            Advertising world. He held several senior marketing
                            roles in the automotive business working for Volvo Cars
                            of North America, LLC.
                          </p>
                          <ul className="social-profiles">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-rss" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*=======  End of single team member  =======*/}
                    </div>
                  </div>
                </div>
                {/*=======  End of team members wrapper  =======*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of team member area  =======*/}
        {/*=======  contact form area  =======*/}
        <div className="contact-form-area section-space--inner--contact-form bg--dark-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title">DO YOU HAVE ANY QUESTION ?</h2>
                  <p className="section-subtitle">
                    Your Satisfaction defines our Success
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Contact Form Wrapper */}
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
                        <button type="submit" className="theme-button">
                          SEND A MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End of Contact Form Wrapper */}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of contact form area  =======*/}
      </div>
    </>




  );
}

export default AboutUs;