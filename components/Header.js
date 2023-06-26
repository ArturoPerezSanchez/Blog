import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">The Geek Gazette</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={` ${
              isMobileMenuOpen ? 'collapse navbar-collapse' : 'mobile-bar bg-dark'
            }`}
          >
            <ul className="navbar-nav ms-auto mb-lg-0">
              <Link href="/">
                <a className="nav-link">
                  <li className="nav-item">Home</li>
                </a>
              </Link>
              <Link href="https://www.arturops.com">
                <a className="nav-link" target="_blank">
                  <li className="nav-item">About</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
