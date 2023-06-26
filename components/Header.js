import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fix navbar-transition"
        style={{
            transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-header" style={{color: "#dec48b"}}>The Geek Gazette</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
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
