'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Offcanvas from '../../components/Offcanvas';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts: { [key: string]: any } = {
  '1': { img: "/img/18.jpg", title: "Designing AI Products Responsibly", date: "May 5, 2025", author: "Ava Bennett", content: "Building AI products that users trust requires more than just good algorithms. It demands ethical guardrails, transparent UX, and careful attention to friction logs. In this comprehensive guide, we'll explore practical strategies for shipping ML features that users actually want to use." },
  '2': { img: "/img/19.jpg", title: "From Monolith to Modular Systems", date: "May 1, 2025", author: "Noah Kim", content: "The journey from monolith to microservices is fraught with pitfalls. Learn how to partition services effectively, design for autonomy, and avoid the most painful trade-offs that teams encounter when breaking apart large systems." },
  '3': { img: "/img/20.jpg", title: "Design Systems at Scale", date: "April 18, 2025", author: "Evelyn Stone", content: "Keeping design systems consistent across large organizations is challenging. Discover the operating models, governance structures, and tooling that successful companies use to maintain component consistency without slowing down their teams." },
};

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts[params.id as string];

  if (!post) {
    return (
      <>
        <Navbar />
        <Offcanvas />
        <div className="container py-5 text-center">
          <h1>Post not found</h1>
          <Link href="/blog">Back to Blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Offcanvas />
      
      <header className="position-relative" style={{ paddingTop: "150px", paddingBottom: "50px", background: "url(/img/17.jpg) center/cover" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(120deg, hsl(318, 71%, 57%, .9) 0%, hsl(236, 67%, 59%, .9) 100%)" }}></div>
        <div className="container position-relative text-center text-white">
          <h1 className="display-4 fw-bolder mb-4">{post.title}</h1>
          <p className="fs-5">
            <i className="fa-solid fa-user"></i> {post.date} • 
            <i className="fa-solid fa-alarm-clock ms-2"></i> {post.author}
          </p>
        </div>
      </header>

      <main>
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <img src={post.img} className="img-fluid rounded mb-4" alt={post.title} />
                <div className="fs-5 lh-lg text-dark">
                  <p>{post.content}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="mt-5">
                  <Link href="/blog" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn">
                    <span>Back to Blog <i className="fa-solid fa-arrow-left"></i></span>
                  </Link>
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

