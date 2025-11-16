'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offcanvas from '../components/Offcanvas';
import Link from 'next/link';

const speakers = [
  { img: "/img/4.jpg", name: "Ava Bennett", role: "Chief Product Officer, Flux" },
  { img: "/img/5.jpg", name: "Patricia Stanley", role: "Head of AI, NovaLab" },
  { img: "/img/6.jpg", name: "Evelyn Stone", role: "Design Systems Lead, Orbit" },
  { img: "/img/7.jpg", name: "Noah Kim", role: "CTO, Skyforge" },
  { img: "/img/8.jpg", name: "Susan Hopkins", role: "UX Research Lead, Lumen" },
  { img: "/img/9.jpg", name: "Michael Fowler", role: "Product Designer, Vertex" },
  { img: "/img/4.jpg", name: "Sarah Chen", role: "Engineering Director, CloudScale" },
  { img: "/img/5.jpg", name: "David Martinez", role: "Founder, DataFlow" },
  { img: "/img/6.jpg", name: "Lisa Anderson", role: "VP of Design, PixelPerfect" },
];

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "100px", background: "url(/img/3.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-2"></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-3 fw-bolder text-uppercase mb-4">Our Speakers</h1>
          <p className="fs-5">Meet the experts sharing their knowledge</p>
        </div>
      </header>

      <main>
        <section className="position-relative py-5" style={{ background: "url(/img/3.jpg) center/cover" }}>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(120deg, #5059ddda 0%, #df42b0da 100%)" }}></div>
          <div className="container position-relative py-5">
            <div className="text-uppercase text-center mb-5">
              <p className="text-white">our speaking</p>
              <h2 className="text-white text-uppercase">who's speaking</h2>
            </div>
            <div className="row my-5">
              {speakers.map((p, i) => (
                <div className="col-md-6 col-lg-4 col-xl-4 my-3" key={i}>
                  <div className="position-relative rounded-3 overflow-hidden person-card">
                    <img src={p.img} alt={p.name} className="img-fluid w-100" />
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-1"></div>
                    <div className="social-overlay position-absolute bg-main top-0 end-0 text-center py-2 px-3 text-white" style={{ borderBottomLeftRadius: 10 }}>
                      <a href="#" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-facebook-f d-block py-2"></i></a>
                      <a href="#" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-instagram d-block py-2"></i></a>
                      <a href="#" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-twitter d-block py-2"></i></a>
                      <a href="#" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-linkedin-in d-block py-2"></i></a>
                    </div>
                    <div className="position-absolute bottom-0 start-0 ms-3">
                      <h5 className="text-white text-capitalize">{p.name}</h5>
                      <p className="text-main text-capitalize">{p.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <a href="#top" className="toTop d-block bg-main position-fixed toTop-black" style={{ height: "50px", width: "50px", borderRadius: "50%", bottom: "30px", right: "30px", boxShadow: "0, 0, 20px, #000", zIndex: 10 }}></a>
    </>
  );
}

