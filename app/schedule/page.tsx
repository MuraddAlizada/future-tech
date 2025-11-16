'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offcanvas from '../components/Offcanvas';
import Link from 'next/link';

const scheduleItems = [
  { img: "/img/10.jpg", title: "Shipping AI Features Safely", by: "Ava Bennett / CPO, Flux", time: "May 22, 2025 • 10:00–10:45", hall: "Hall A" },
  { img: "/img/11.jpg", title: "Design Systems that Scale", by: "Evelyn Stone / Design Systems Lead, Orbit", time: "May 22, 2025 • 11:15–12:00", hall: "Hall B" },
  { img: "/img/12.jpg", title: "Cloud Architectures that Don't Fail", by: "Noah Kim / CTO, Skyforge", time: "May 23, 2025 • 10:00–10:45", hall: "Hall C" },
  { img: "/img/13.jpg", title: "Product Strategy: From Idea to Impact", by: "Susan Hopkins / UX Research Lead, Lumen", time: "May 23, 2025 • 11:15–12:00", hall: "Hall A" },
  { img: "/img/10.jpg", title: "Building Resilient Systems", by: "David Martinez / Founder, DataFlow", time: "May 24, 2025 • 10:00–10:45", hall: "Hall B" },
  { img: "/img/11.jpg", title: "The Future of Design Tools", by: "Lisa Anderson / VP of Design, PixelPerfect", time: "May 24, 2025 • 11:15–12:00", hall: "Hall C" },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "100px", background: "url(/img/3.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-2"></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-3 fw-bolder text-uppercase mb-4">Schedule</h1>
          <p className="fs-5">Plan your conference experience</p>
        </div>
      </header>

      <main>
        <section className="py-5 bg-blue">
          <div className="container">
            <div className="text-uppercase text-center pb-4">
              <p className="text-main">our timetable</p>
              <h4 className="text-white fs-1">schedule plan</h4>
            </div>
            <div className="d-flex justify-content-center my-4">
              <div className="btn-group text-white" role="group">
                <button type="button" className="text-white btn py-3 px-4" style={{ backgroundColor: "#5d5e8d", borderRight: "2px solid #5d5e8d" }}>
                  <span className="text-uppercase fw-bolder">Monday</span> <br /> <span>May 22, 2025</span>
                </button>
                <button type="button" className="btn py-3 px-4" style={{ backgroundColor: "#1f2371", borderRight: "2px solid #5d5e8d", color: "#8c8dc5" }}>
                  <span className="text-uppercase fw-bolder">Tuesday</span> <br /> <span>May 23, 2025</span>
                </button>
                <button type="button" className="btn py-3 px-4" style={{ backgroundColor: "#1f2371", color: "#8c8dc5" }}>
                  <span className="text-uppercase fw-bolder">Wednesday</span> <br /> <span>May 24, 2025</span>
                </button>
              </div>
            </div>

            {scheduleItems.map((s, i) => (
              <div className="row border rounded-4 p-3 my-3 animated-border" key={i}>
                <div className="col-md-5">
                  <div className="d-flex my-3">
                    <img src={s.img} alt="" className="me-3" style={{ width: "90px", borderRadius: "50%" }} />
                    <div className="my-auto">
                      <h6 className="text-white">{s.title}</h6>
                      <p style={{ color: "#9293bc", margin: 0, fontSize: 12 }}>by <span className="text-white">{s.by.split(" / ")[0]}</span> / {s.by.split(" / ")[1]}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 m-auto fs-8 fs-lg-6">
                  <div>
                    <p className="text-white mb-1"><i className="fa-regular fa-clock text-main"></i> {s.time}</p>
                    <p className="text-white"><i className="fa-solid fa-map text-main"></i> {s.hall}</p>
                  </div>
                </div>
                <div className="col-md-3 m-auto">
                  <Link href="#" className="btn w-100 text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn">
                    <span>view more</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Link href="#" className="btn border text-uppercase text-white px-4 py-3 rounded-5 hollow-btn my-3">
              <span>download schedule (pdf)</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <a href="#top" className="toTop d-block bg-main position-fixed toTop-black" style={{ height: "50px", width: "50px", borderRadius: "50%", bottom: "30px", right: "30px", boxShadow: "0, 0, 20px, #000", zIndex: 10 }}></a>
    </>
  );
}

