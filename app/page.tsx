'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Offcanvas from './components/Offcanvas';
import SponsorLogo from './components/SponsorLogo';
import Link from 'next/link';
import { images } from './utils/images';

export default function Page() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative vh-100">

        <div id="carouselExample" className="carousel slide vh-100">
          <div className="carousel-inner vh-100">
            <div className="carousel-item active vh-100 position-relative">
              <img src={images.hero1} className="d-block w-100 vh-100" style={{ objectFit: "cover" }} alt="Slide 1" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-2"></div>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100">
                <div className="card ms-auto transparent text-white text-uppercase border-0">
                  <div className="card-body text-end">
                    <h2 className="position-relative d-inline-block px-2 py-1 fs-1 text-white bg-transparent fw-bolder">
                      <span className="position-absolute start-0 w-100 gradient z-0" style={{ height: "1.25rem", bottom: ".85rem" }}></span>
                      <span className="position-relative z-1" style={{ fontSize: "3.75rem" }}>FutureTech</span>
                    </h2>
                    <h2 className="fw-bolder" style={{ fontSize: "3.75rem" }}>Summit 2025</h2>
                    <p className="card-text bg-white p-1 px-3 bg-opacity-25 fw-bolder">Marina Bay Sands, Singapore • May 22–24</p>
                    <Link href="/schedule" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 mt-3 animated-btn">
                      <span>Explore Agenda <i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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
                    <p className="card-text mb-5 lh-lg">Join 2,000+ builders, designers, and leaders shaping the next decade of
                      technology. Three days of hands‑on workshops, practical case studies, and visionary talks across AI,
                      cloud, and product design. Walk away with playbooks you can apply on Monday.</p>
                    <Link href="/about" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 mt-3 animated-btn">
                      <span>Get the overview <i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={images.about} className="img-fluid" style={{ marginBottom: "5rem" }} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Speakers */}
      <section className="position-relative" style={{ background: `url(${images.speakersBg}) center/cover`, padding: "5rem 0" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(120deg, #5059ddda 0%, #df42b0da 100%)" }}></div>
        <div className="container position-relative">
          <p className="text-white text-uppercase text-center">our speaking</p>
          <h2 className="text-white text-uppercase text-center">who's speaking</h2>
          <div className="row my-5">
            {[
              { img: images.speakers[0], name: "Ava Bennett", role: "Chief Product Officer, Flux" },
              { img: images.speakers[1], name: "Patricia Stanley", role: "Head of AI, NovaLab" },
              { img: images.speakers[2], name: "Evelyn Stone", role: "Design Systems Lead, Orbit" },
              { img: images.speakers[3], name: "Noah Kim", role: "CTO, Skyforge" },
              { img: images.speakers[4], name: "Susan Hopkins", role: "UX Research Lead, Lumen" },
              { img: images.speakers[5], name: "Michael Fowler", role: "Product Designer, Vertex" },
            ].map((p, i) => (
              <div className="col-md-6 col-lg-4 col-xl-4 my-3" key={i}>
                <div className="position-relative rounded-3 overflow-hidden person-card">
                  <img src={p.img} alt="" className="img-fluid w-100" />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 darken-1"></div>
                  <div className="social-overlay position-absolute bg-main top-0 end-0 text-center py-2 px-3 text-white" style={{ borderBottomLeftRadius: 10 }}>
                    <a href="" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-facebook-f d-block py-2"></i></a>
                    <a href="" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-instagram d-block py-2"></i></a>
                    <a href="" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-twitter d-block py-2"></i></a>
                    <a href="" className="text-white" style={{ textDecoration: "none" }}><i className="fa-brands fa-linkedin-in d-block py-2"></i></a>
                  </div>
                  <div className="position-absolute bottom-0 start-0 ms-3">
                    <h5 className="text-white text-capitalize">{p.name}</h5>
                    <p className="text-main text-capitalize">{p.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn transparent text-uppercase text-white px-4 py-3 border-2 rounded-5 reden" style={{ border: "3px solid white", transition: "all .5s ease" }}>
              <span>view all speaker <i className="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-5 bg-blue">
        <div className="container">
          <div className="text-uppercase text-center pb-4">
            <p className="text-main">our timetable</p>
            <h4 className="text-white fs-1">schedule plan</h4>
          </div>
          <div className=" d-flex justify-content-center my-4">
            <div className="btn-group text-white " role="group" aria-label="Basic outlined example">
              <button type="button" className=" text-white btn py-3 px-4" style={{ backgroundColor: "#5d5e8d", borderRight: "2px solid #5d5e8d" }}><span className="text-uppercase fw-bolder">Monday</span> <br /> <span>May 22, 2025</span></button>
              <button type="button" className=" btn py-3 px-4" style={{ backgroundColor: "#1f2371", borderRight: "2px solid #5d5e8d", color: "#8c8dc5" }}><span className="text-uppercase fw-bolder">Tuesday</span> <br /> <span>May 23, 2025</span></button>
              <button type="button" className=" btn py-3 px-4" style={{ backgroundColor: "#1f2371", color: "#8c8dc5" }}><span className="text-uppercase fw-bolder">Wednesday</span> <br /> <span>May 24, 2025</span></button>
            </div>
          </div>

            {[
              { img: images.sessions[0], title: "Shipping AI Features Safely", by: "Ava Bennett / CPO, Flux", time: "May 22, 2025 • 10:00–10:45", hall: "Hall A" },
              { img: images.sessions[1], title: "Design Systems that Scale", by: "Evelyn Stone / Design Systems Lead, Orbit", time: "May 22, 2025 • 11:15–12:00", hall: "Hall B" },
              { img: images.sessions[2], title: "Cloud Architectures that Don't Fail", by: "Noah Kim / CTO, Skyforge", time: "May 23, 2025 • 10:00–10:45", hall: "Hall C" },
              { img: images.sessions[3], title: "Product Strategy: From Idea to Impact", by: "Susan Hopkins / UX Research Lead, Lumen", time: "May 23, 2025 • 11:15–12:00", hall: "Hall A" },
            ].map((s, i) => (
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
              <div className="col-md-4 m-auto fs-8 fs-lg-6 ">
                <div>
                  <p className="text-white mb-1"><i className="fa-regular fa-clock text-main"></i> {s.time}</p>
                  <p className="text-white"><i className="fa-solid fa-map text-main"></i> {s.hall}</p>
                </div>
              </div>
              <div className="col-md-3 m-auto">
                <a href="#" className="btn w-100 text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn">
                  <span>view more</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <a href="#" className="btn border text-uppercase text-white px-4 py-3 rounded-5 hollow-btn my-3">
            <span>download schedule (pdf)</span>
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="position-relative" style={{ background: `url(${images.pricingBg}) center/cover`, backgroundAttachment: "fixed" }}>
        <div className="position-absolute top-0 start-0 h-100 w-100 gradient bg-opacity-50" style={{ backgroundImage: "-webkit-linear-gradient(120deg, hsl(318, 71%, 57%, .9) 0%, hsl(236, 67%, 59%, .9) 100%)", zIndex: 1 }}></div>
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="text-uppercase text-center pb-5 text-white">
            <p className="">choose a ticket</p>
            <h4 className="fs-2 bolder">ticket pricing</h4>
          </div>
          <div className="row">
            {[
              { name: "Starter Pass", img: images.pricing[0], price: 59, cta: "Buy Starter", bullets: ["1 Day Access", "Coffee Breaks", "Opening Keynote", "Community Lounge", "Expo Hall"] },
              { name: "Pro Pass", img: images.pricing[1], price: 99, cta: "Buy Pro", bullets: ["3 Day Access", "Lunch & Networking", "VIP Keynotes Seating", "Workshop Access", "Speaker Q&A Lounge"] },
              { name: "Team Pass", img: images.pricing[2], price: 199, cta: "Buy Team", bullets: ["5 Tickets Bundle", "Reserved Seating", "Workshop Priority", "Networking Credits", "Post-Event Recordings"] },
            ].map((p, i) => (
              <div className="col-lg-4 col-md-6 mb-5" key={i}>
                <div className="text-center bg-white rounded-3 px-5 pb-5 text-dark ticket-cart-increase m-auto" style={{ width: "95%" }}>
                  <div className="card-body"></div>
                  <h6 className="text-uppercase text-white mb-4 py-2 px-4 d-inline-block bg-main rounded-bottom-3 bolder">{p.name}</h6>
                  <img src={p.img} className="d-block m-auto" alt="..." />
                  <h2 className="mb-4 mt-3 fw-bolder" style={{ fontSize: "3.75rem" }}><span className="fs-3 text-top align-top">$</span>{p.price}</h2>
                  <a href="#" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn d-block mb-4">
                    <span>{p.cta} <i className="fa-solid fa-arrow-right"></i></span>
                  </a>
                  <div className="fs-7 fs-xl-6">
                    {p.bullets.map((b, j) => (
                      <p className="mb-2" key={j}><i className="fa-solid fa-check text-main"></i> {b}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors + Testimonials */}
      <section className="bg-blue py-5">
        <div className="container">
          <div className="text-uppercase text-center mb-5">
            <p className="text-main">partners & sponsors</p>
            <h4 className="text-white fs-2 fw-bolder">official sponsors</h4>
          </div>
          <div className="row justify-content-center">
            {images.sponsors.slice(0, 4).map((sponsor, n) => (
              <div className="col-3 p-0" key={n}>
                <div className="border d-flex align-items-center justify-content-center p-4" style={{ aspectRatio: "1 / 1", minHeight: "180px" }}>
                  <SponsorLogo name={sponsor.name} logo={sponsor.logo} />
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            {images.sponsors.slice(4, 8).map((sponsor, n) => (
              <div className="col-3 p-0" key={n + 4}>
                <div className="border d-flex align-items-center justify-content-center p-4" style={{ aspectRatio: "1 / 1", minHeight: "180px" }}>
                  <SponsorLogo name={sponsor.name} logo={sponsor.logo} />
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4" style={{ marginTop: "6rem" }}>
            <div className="col-sm-6">
              <div className=" rounded-4 p-5 glass">
                <p className="text-white mb-4 fs-7 fs-md-6">“Practical, inspiring, and immediately applicable. Our team shipped
                  two features within a week using frameworks from the workshops.”</p>
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img src={images.testimonials[0]} alt="" className="rounded-5" style={{ width: "60px" }} />
                    </div>
                    <div>
                      <h6 className="text-white fs-7 fs-md-6">Maria Hernandez</h6>
                      <p className="text-main m-0 fs-7 fs-md-6">Director of UX, Fincore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className=" rounded-4 p-5 glass">
                <p className="text-white mb-4 fs-7 fs-md-6">“The best balance of vision and execution I’ve seen at a tech
                  event. The design systems track alone was worth it.”</p>
                <div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img src={images.testimonials[1]} alt="" className="rounded-5" style={{ width: "60px" }} />
                    </div>
                    <div>
                      <h6 className="text-white fs-7 fs-md-6">Jacqueline Myers</h6>
                      <p className="text-main m-0 fs-7 fs-md-6">Engineering Manager, Teralight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="position-relative" style={{ background: `url(${images.blogBg}) center/cover`, backgroundAttachment: "fixed" }}>
        <div className="position-absolute top-0 start-0 h-100 w-100 gradient bg-opacity-50" style={{ backgroundImage: "-webkit-linear-gradient(120deg, hsl(318, 71%, 57%, .9) 0%, hsl(236, 67%, 59%, .9) 100%)", zIndex: 1 }}>
        </div>
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="text-uppercase text-center pb-5 text-white">
            <p className="">our blog</p>
            <h4 className="fs-2 bolder">latest news</h4>
          </div>
          <div className="row">
            {[
              { img: images.blog[0], title: "Designing AI Products Responsibly", date: "May 5, 2025", author: "Ava Bennett", excerpt: "A practical checklist for ethical guardrails, transparent UX, and friction logs when shipping ML features." },
              { img: images.blog[1], title: "From Monolith to Modular Systems", date: "May 1, 2025", author: "Noah Kim", excerpt: "How to partition services, design for autonomy, and avoid the most painful trade‑offs of microservices." },
              { img: images.blog[2], title: "Design Systems at Scale", date: "April 18, 2025", author: "Evelyn Stone", excerpt: "The operating model, governance, and tooling your org needs to keep components consistent without slowing teams." },
            ].map((b, i) => (
              <div className={`col-lg-4 col-md-6 ${i < 2 ? "" : "mb-5"}`} style={{ marginBottom: i < 2 ? "4rem" : undefined }} key={i}>
                <div className="card border-0 position-relative zoom">
                  <div className="overflow-hidden">
                    <img src={b.img} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body text-center" style={{ padding: "2rem", paddingBottom: "2rem" }}>
                    <h5 className="card-title fw-bolder"><a href="" className="text-black">{b.title}</a></h5>
                    <div className="d-flex justify-content-center mb-3">
                      <p className="card-text text-capitalize d-flex fs-8"><a href="" style={{ color: "#9293bc" }}><span><i className="fa-solid fa-user"></i> {b.date}</span>
                        <span><i className="fa-solid fa-alarm-clock ms-5"></i> {b.author}</span></a>
                      </p>
                    </div>
                    <p className="card-text" style={{ color: "#5d5e8d" }}>{b.excerpt}</p>
                    <a href="#" style={{ borderRadius: "50%", borderColor: "white", left: "50%", transform: "translateX(-50%)", bottom: "-30px" }}
                      className="btn position-absolute gradient text-white border-3 p-3 d-block">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
              <div className=" rounded-4 p-4 glass">
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
                    <input type="text" className="border-0 transparent border-bottom w-100 text-light" placeholder="Email" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="border-0 transparent border-bottom w-100 text-light" placeholder="Your Number" />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <textarea className="border-0 transparent border-bottom w-100 overflow-hidden text-light" placeholder="Your Message*"></textarea>
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

      <Footer />

      {/* Back to top */}
      <a href="#top" className="toTop d-block bg-main position-fixed toTop-black" style={{ height: "50px", width: "50px", borderRadius: "50%", bottom: "30px", right: "30px", boxShadow: "0, 0, 20px, #000", zIndex: 10 }}></a>
    </>
  );
}

