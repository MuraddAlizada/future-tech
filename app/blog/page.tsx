'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Offcanvas from '../components/Offcanvas';
import Link from 'next/link';

const blogPosts = [
  { id: 1, img: "/img/18.jpg", title: "Designing AI Products Responsibly", date: "May 5, 2025", author: "Ava Bennett", excerpt: "A practical checklist for ethical guardrails, transparent UX, and friction logs when shipping ML features." },
  { id: 2, img: "/img/19.jpg", title: "From Monolith to Modular Systems", date: "May 1, 2025", author: "Noah Kim", excerpt: "How to partition services, design for autonomy, and avoid the most painful trade‑offs of microservices." },
  { id: 3, img: "/img/20.jpg", title: "Design Systems at Scale", date: "April 18, 2025", author: "Evelyn Stone", excerpt: "The operating model, governance, and tooling your org needs to keep components consistent without slowing teams." },
  { id: 4, img: "/img/18.jpg", title: "Building Cloud-Native Applications", date: "April 10, 2025", author: "Noah Kim", excerpt: "Best practices for designing applications that scale automatically and handle failures gracefully." },
  { id: 5, img: "/img/19.jpg", title: "The Future of Product Design", date: "March 28, 2025", author: "Evelyn Stone", excerpt: "Exploring how AI and new design tools are reshaping the way we think about product development." },
  { id: 6, img: "/img/20.jpg", title: "Scaling Engineering Teams", date: "March 15, 2025", author: "Ava Bennett", excerpt: "Lessons learned from growing engineering teams from 10 to 100+ while maintaining quality and velocity." },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "100px", background: "url(/img/17.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(120deg, hsl(318, 71%, 57%, .9) 0%, hsl(236, 67%, 59%, .9) 100%)" }}></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-3 fw-bolder text-uppercase mb-4">Our Blog</h1>
          <p className="fs-5">Latest news and insights</p>
        </div>
      </header>

      <main>
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="row">
              {blogPosts.map((b) => (
                <div className="col-lg-4 col-md-6 mb-5 mt-4" key={b.id}>
                  <div className="card border-0 position-relative zoom">
                    <div className="overflow-hidden">
                      <img src={b.img} className="card-img-top" alt={b.title} />
                    </div>
                    <div className="card-body text-center" style={{ padding: "2rem", paddingBottom: "2rem" }}>
                      <h5 className="card-title fw-bolder">
                        <Link href={`/blog/${b.id}`} className="text-black">{b.title}</Link>
                      </h5>
                      <div className="d-flex justify-content-center mb-3">
                        <p className="card-text text-capitalize d-flex fs-8" style={{ color: "#9293bc" }}>
                          <span><i className="fa-solid fa-user"></i> {b.date}</span>
                          <span><i className="fa-solid fa-alarm-clock ms-5"></i> {b.author}</span>
                        </p>
                      </div>
                      <p className="card-text" style={{ color: "#5d5e8d" }}>{b.excerpt}</p>
                      <Link href={`/blog/${b.id}`} style={{ borderRadius: "50%", borderColor: "white", left: "50%", transform: "translateX(-50%)", bottom: "-30px" }}
                        className="btn position-absolute gradient text-white border-3 p-3 d-block">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
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

