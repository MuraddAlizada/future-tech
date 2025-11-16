'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offcanvas from '../components/Offcanvas';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "100px", background: "url(/img/3.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-2"></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-3 fw-bolder text-uppercase mb-4">About Us</h1>
          <p className="fs-5">Learn more about FutureTech Summit</p>
        </div>
      </header>

      <main>
        <section className="py-5 bg-blue">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="card border-0 bg-transparent text-white" style={{ marginBottom: "5rem" }}>
                  <div className="card-body">
                    <h6 className="card-title text-uppercase text-main pb-1 d-table mb-4" style={{ borderBottom: "2px solid #4b4d7b" }}>about the summit</h6>
                    <h1 className="card-subtitle mb-2 text-uppercase mb-4">Welcome to FutureTech Summit</h1>
                    <p className="card-text mb-4 lh-lg">Join 2,000+ builders, designers, and leaders shaping the next decade of
                      technology. Three days of hands‑on workshops, practical case studies, and visionary talks across AI,
                      cloud, and product design. Walk away with playbooks you can apply on Monday.</p>
                    <p className="card-text mb-5 lh-lg">Since 2020, FutureTech Summit has been the premier gathering for technology professionals
                      who want to stay ahead of the curve. Our mission is to bridge the gap between cutting-edge research
                      and practical implementation, bringing together the brightest minds in the industry.</p>
                    <Link href="/#pricing" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 mt-3 animated-btn">
                      <span>Get tickets <i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/img/2.png" className="img-fluid" style={{ marginBottom: "5rem" }} alt="About FutureTech Summit" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-dark">
          <div className="container">
            <div className="row text-center text-white mb-5">
              <div className="col-12">
                <h2 className="text-uppercase mb-4">Our Mission</h2>
                <p className="fs-5 lh-lg">To empower technology professionals with the knowledge, tools, and connections
                  they need to build the future. We believe in learning by doing, sharing openly, and building together.</p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <i className="fa-solid fa-users fs-1 text-main"></i>
                  </div>
                  <h4 className="mb-3">2,000+ Attendees</h4>
                  <p>Join a diverse community of developers, designers, and leaders from around the world.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <i className="fa-solid fa-microphone fs-1 text-main"></i>
                  </div>
                  <h4 className="mb-3">50+ Speakers</h4>
                  <p>Learn from industry experts and thought leaders sharing their real-world experiences.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <i className="fa-solid fa-calendar-days fs-1 text-main"></i>
                  </div>
                  <h4 className="mb-3">3 Days</h4>
                  <p>Intensive learning experience with workshops, keynotes, and networking opportunities.</p>
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

