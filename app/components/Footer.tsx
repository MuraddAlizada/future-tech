'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark" style={{ paddingTop: "6rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <div className="mb-4">
              <Link href="/" title="FutureTech Summit - Home">
                <Logo size="small" />
              </Link>
            </div>
            <p className="mb-3 text-light">Join 2,000+ builders, designers, and leaders shaping the next decade of technology. Three days of hands-on workshops and visionary talks.</p>
            <div className="d-flex">
              {["facebook-f", "instagram", "twitter", "linkedin-in"].map((icon, i) => (
                <div className="d-flex me-3 footer-icons--white" key={i}
                  style={{ borderRadius: "50%", width: "30px", height: "33px", border: "1px, solid #9293bc", justifyContent: "center", alignItems: "center" }}>
                  <a href="#" className="text-white fs-7" style={{ textDecoration: "none" }}><i className={`fa-brands fa-${icon} d-block py-2`}></i></a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="text-light fs-7"><i className="fa-solid fa-map"></i> 88 Market Street, Singapore</p>
            <p className="text-light fs-7"><i className="fa-solid fa-phone"></i> +65 6123 4567</p>
            <p className="text-light fs-7"><i className="fa-solid fa-envelope"></i>hello@futuretechsummit.co</p>
            <p className="text-light fs-7"><i className="fa-solid fa-earth-americas"></i>www.futuretechsummit.co</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <h5 className="text-white mb-4">Workshops</h5>
            <p className="fs-7"><Link href="/schedule" style={{ textDecoration: "none" }} className="text-light footer-text--white">Prototyping with AI</Link></p>
            <p className="text-light fs-7"><Link href="/schedule" style={{ textDecoration: "none" }} className="text-light footer-text--white">Design Tokens 2.0</Link></p>
            <p className="text-light fs-7"><Link href="/schedule" style={{ textDecoration: "none" }} className="text-light footer-text--white">Cloud Observability</Link></p>
            <p className="text-light fs-7"><Link href="/schedule" style={{ textDecoration: "none" }} className="text-light footer-text--white">Product Strategy Sprint</Link></p>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5">
            <h5 className="text-white mb-4">Gallery</h5>
            <div className="row mb-4">
              {[21, 22, 23].map(n => (
                <div className="col-4" key={n}>
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={`/img/${n}.jpg`} className="w-100" alt="" />
                    <Link href="/gallery"><div className="position-absolute top-0 start-0 w-100 h-100 gradient manifest"></div></Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {[24, 25, 26].map(n => (
                <div className="col-4" key={n}>
                  <div className="position-relative rounded-3 overflow-hidden">
                    <img src={`/img/${n}.jpg`} className="w-100" alt="" />
                    <Link href="/gallery"><div className="position-absolute top-0 start-0 w-100 h-100 gradient manifest"></div></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="text-light" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-light fs-7">Copyright ©2025 FutureTech Summit</p>
          </div>
          <div className="col-md-6">
            <ul className="d-flex justify-content-end fs-7 custom-ul">
              <li className="me-4"><Link href="/terms" style={{ textDecoration: "none" }} className="text-light footer-text--white">Terms of Service</Link></li>
              <li><Link href="/privacy" style={{ textDecoration: "none" }} className="text-light footer-text--white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

