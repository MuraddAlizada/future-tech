'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && dropdownRef.current) {
      // Wait for Bootstrap to be available
      const initDropdown = () => {
        const bootstrap = (window as any).bootstrap;
        if (bootstrap && dropdownRef.current) {
          try {
            new bootstrap.Dropdown(dropdownRef.current);
          } catch (e) {
            // Dropdown might already be initialized
          }
        } else {
          // Retry after a short delay if Bootstrap isn't loaded yet
          setTimeout(initDropdown, 100);
        }
      };
      initDropdown();
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black bg-opacity-75 z-3 shadow-md" style={{ height: "105px" }}>
      <div className="container">
        <Link className="navbar-brand" href="/" title="FutureTech Summit - Home">
          <Logo />
        </Link>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i className="fa-solid fa-bars text-white fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fs-6 fw-normal">
            <li className="nav-item">
              <Link className={`nav-link px-4 py-0 ${pathname === '/' ? 'active text-main' : 'text-white'}`} href="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                ref={dropdownRef}
                className="nav-link text-white px-4 py-0 dropdown-toggle border-0 text-uppercase bg-transparent" 
                type="button" 
                id="pagesDropdown"
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                onClick={(e) => {
                  e.preventDefault();
                  const bootstrap = (window as any).bootstrap;
                  if (bootstrap && dropdownRef.current) {
                    const dropdown = bootstrap.Dropdown.getInstance(dropdownRef.current) || new bootstrap.Dropdown(dropdownRef.current);
                    dropdown.toggle();
                  }
                }}
              >
                Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><Link className="dropdown-item my-2" href="/"><i className="fa-solid fa-minus me-2"></i>home</Link></li>
                <li><Link className="dropdown-item my-2" href="/about"><i className="fa-solid fa-minus me-2"></i>about us</Link></li>
                <li><Link className="dropdown-item my-2" href="/speakers"><i className="fa-solid fa-minus me-2"></i>speakers</Link></li>
                <li><Link className="dropdown-item my-2" href="/schedule"><i className="fa-solid fa-minus me-2"></i>schedule</Link></li>
                <li><Link className="dropdown-item my-2" href="/#pricing"><i className="fa-solid fa-minus me-2"></i>tickets</Link></li>
                <li><Link className="dropdown-item my-2" href="/blog"><i className="fa-solid fa-minus me-2"></i>blog</Link></li>
                <li><Link className="dropdown-item my-2" href="/contact"><i className="fa-solid fa-minus me-2"></i>contact</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-4 py-0 ${pathname === '/speakers' ? 'active text-main' : 'text-white'}`} href="/speakers">Speakers</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-4 py-0 ${pathname === '/blog' ? 'active text-main' : 'text-white'}`} href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-4 py-0 ${pathname === '/contact' ? 'active text-main' : 'text-white'}`} href="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <Link href="/#pricing" className="btn text-uppercase gradient text-white px-4 py-3 border-0 rounded-5 animated-btn">
              <span>Get tickets <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

