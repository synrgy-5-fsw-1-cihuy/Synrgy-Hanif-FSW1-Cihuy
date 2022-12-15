const Footer = () => {
    return (
        <section id="footer">
          <div className="row justify-content-center pt-5 pb-3 mt-4 mb-3">
            <div className="col-12 col-lg-3 ps-5 ms-5 ps-lg-0 ms-lg-0 mb-3 mb-lg-0">
              <div className="text-content fs-6">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
            </div>
            <div className="col-12 col-lg-2 ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
              <div className="text-content px-lg-3 fs-6">
                <ul style={{listStyle: 'none'}} className="ps-0">
                  <li className="pb-3"><a href="#our-services" className="link-dark">Our services</a></li>
                  <li className="pb-3"><a href="#why-us" className="link-dark">Why Us</a></li>
                  <li className="pb-3"><a href="#testimonial" className="link-dark">Testimonial</a></li>
                  <li><a href="#faq" className="link-dark">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
              <div className="text-content fs-6">
                <p>Connect with us</p>
              </div>
              <img src="assets/img/icon_facebook.png" alt="facebook" />
              <img src="assets/img/icon_instagram.png" alt="instagram" />
              <img src="assets/img/icon_twitter.png" alt="twitter" />
              <img src="assets/img/icon_mail.png" alt="mail" />
              <img src="assets/img/icon_twitch.png" alt="twitch" />
            </div>
            <div className="col-12 col-lg-2 ps-5 ms-5 ps-lg-0 ms-lg-0 mb-4 mb-lg-0">
              <div className="text-content fs-6">
                <p>Copyright Binar 2022</p>
              </div>
              <div className="d-flex"><img src="assets/img/img_logo.png" alt="" /></div>
            </div>
          </div>
        </section>
    )
};

export default Footer;