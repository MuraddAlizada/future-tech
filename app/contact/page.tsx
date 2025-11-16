'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offcanvas from '../components/Offcanvas';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "100px", background: "url(/img/3.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-2"></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-3 fw-bolder text-uppercase mb-4">Contact Us</h1>
          <p className="fs-5">Get in touch with our team</p>
        </div>
      </header>

      <main>
        <section className="bg-blue py-5">
          <div className="container">
            <div className="text-uppercase text-center mb-5">
              <p className="text-main">have question?</p>
              <h4 className="text-white fs-2 fw-bolder">contact us</h4>
            </div>
            <div className="row mb-5">
              <div className="col-sm-4 mb-5">
                <p style={{ color: "#9293bc" }} className="mb-1">Address:</p>
                <h6 className="text-white mb-3">88 Market Street, Singapore</h6>
                <p style={{ color: "#9293bc" }} className="mb-1">Phone:</p>
                <h6 className="text-white mb-3">+65 6123 4567</h6>
                <p style={{ color: "#9293bc" }} className="mb-1">Email:</p>
                <h6 className="text-white mb-3">hello@futuretechsummit.co</h6>
                <p style={{ color: "#9293bc" }} className="mb-1">Website:</p>
                <h6 className="text-white mb-3">www.futuretechsummit.co</h6>
              </div>
              <div className="col-sm-8">
                <div className="rounded-4 p-4 glass">
                  <div className="row mb-4">
                    <div className="col-lg-6 mb-4">
                      <input type="text" className="border-0 transparent border-bottom w-100 text-light" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="border-0 transparent border-bottom w-100 text-light" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-6 mb-4">
                      <input type="email" className="border-0 transparent border-bottom w-100 text-light" placeholder="Email" />
                    </div>
                    <div className="col-lg-6">
                      <input type="tel" className="border-0 transparent border-bottom w-100 text-light" placeholder="Your Number" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <textarea className="border-0 transparent border-bottom w-100 overflow-hidden text-light" rows={5} placeholder="Your Message*"></textarea>
                    </div>
                  </div>
                  <a href="#" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn">
                    <span>Send Message <i className="fa-solid fa-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <a href="#top" className="toTop d-block bg-main position-fixed toTop-black" style={{ height: "50px", width: "50px", borderRadius: "50%", bottom: "30px", right: "30px", boxShadow: "0, 0, 20px, #000", zIndex: 10 }}></a>
    </>
  );
}

