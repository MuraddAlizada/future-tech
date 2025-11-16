'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Offcanvas() {
  const pathname = usePathname();

  return (
    <div className="offcanvas offcanvas-start bg-blue text-white" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column text-uppercase">
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/' ? 'active text-main' : 'text-dark'}`} aria-current="page" href="/">home</Link>
          </li>
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/about' ? 'active text-main' : 'text-dark'}`} href="/about">about</Link>
          </li>
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/speakers' ? 'active text-main' : 'text-dark'}`} href="/speakers">speakers</Link>
          </li>
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/schedule' ? 'active text-main' : 'text-dark'}`} href="/schedule">schedule</Link>
          </li>
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/blog' ? 'active text-main' : 'text-dark'}`} href="/blog">blog</Link>
          </li>
          <li className="nav-item mb-1" style={{ backgroundColor: "#f2f4f8" }}>
            <Link className={`nav-link ${pathname === '/contact' ? 'active text-main' : 'text-dark'}`} href="/contact">contact</Link>
          </li>
        </ul>
        <Link href="/#pricing" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 mt-3 animated-btn">
          <span>Get tickets <i className="fa-solid fa-arrow-right"></i></span>
        </Link>
      </div>
    </div>
  );
}

