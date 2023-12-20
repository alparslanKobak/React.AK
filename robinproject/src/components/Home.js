import { Link } from "react-router-dom";

function Home() {
  return (


    <>
     
      {/*====================  End of hero slider area  ====================*/}
      {/*====================  brand logo slider ====================*/}
      <div className="brand-logo-slider-area">
        <div className="container wide">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  brand logo slider wrapper  =======*/}
              <div
                className="brand-logo-slider-wrapper theme-slick-slider"
                data-slick-setting='{
                  "slidesToShow": 6,
                  "arrows": true,
                  "autoplay": false,
                  "autoplaySpeed": 5000,
                  "speed": 500,
                  "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                  "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
              }'
                data-slick-responsive='[
                  {"breakpoint":1501, "settings": {"slidesToShow": 5} },
                  {"breakpoint":1199, "settings": {"slidesToShow": 4} },
                  {"breakpoint":991, "settings": {"slidesToShow": 3} },
                  {"breakpoint":767, "settings": {"slidesToShow": 2} },
                  {"breakpoint":575, "settings": {"slidesToShow": 2} },
                  {"breakpoint":479, "settings": {"slidesToShow": 1} }
              ]'
              >
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-6.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-7.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-11.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
                {/*=======  single brand logo  =======*/}
                <div className="single-brand-logo">
                  <Link to="/Shop">
                    <img
                      src="assets/img/brands/brand-12.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                {/*=======  End of single brand logo  =======*/}
              </div>
              {/*=======  End of brand logo slider wrapper  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of brand logo slider  ====================*/}
      {/*====================  banner two column ====================*/}
      <div className="banner-area section-space">
        <div className="container wide">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-two-column-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-two-column-banner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="single-two-column-banner__image single-two-column-banner__image--bg-one " />
                        </div>
                        <div className="col-lg-6">
                          <div className="single-two-column-banner__content ">
                            <div className="content-wrapper">
                              <div className="image">
                                <img
                                  src="assets/img/banners/lamp.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h2 className="title">New Lamp Design</h2>
                                <p className="price">From $85</p>
                                <p className="description">
                                  The natural bright daylight technology also
                                  reduces eyestrain and glare and also allows for
                                  truer color matching.
                                </p>
                                <Link
                                  to="/Shop"
                                  className="theme-button theme-button--alt theme-button--banner--two-column"
                                >
                                  SHOP NOW!
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-two-column-banner">
                      <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                          <div className="single-two-column-banner__content ">
                            <div className="content-wrapper">
                              <div className="content">
                                <h2 className="title">Living Room</h2>
                                <p className="price">From $49</p>
                                <p className="description">
                                  Your living room is where you share the story of
                                  who you are. So our living room furniture helps
                                  you do that
                                </p>
                                <Link
                                  to="/Shop"
                                  className="theme-button theme-button--alt theme-button--banner--two-column"
                                >
                                  SHOP NOW!
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                          <div className="single-two-column-banner__image single-two-column-banner__image--bg-two " />
                        </div>
                      </div>
                    </div>
                    <div className="single-two-column-banner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="single-two-column-banner__image single-two-column-banner__image--bg-three " />
                        </div>
                        <div className="col-lg-6">
                          <div className="single-two-column-banner__content ">
                            <div className="content-wrapper">
                              <div className="image">
                                <img
                                  src="assets/img/banners/chair.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h2 className="title">Big Sofa</h2>
                                <p className="price">From $195</p>
                                <p className="description">
                                  Chic and streamlined, it’s just enough furniture
                                  to complete your space. Curved back cushion and
                                  lumbar pillow blend style and comfort.
                                </p>
                                <Link
                                  to="/Shop"
                                  className="theme-button theme-button--alt theme-button--banner--two-column"
                                >
                                  SHOP NOW!
                                </Link>
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
        </div>
      </div>
      {/*====================  End of banner two column  ====================*/}
      {/*====================  product single row area ====================*/}

    </>




  );
}

export default Home;