'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/original-logo.png" alt="Meterbolic Logo" width={300} height={100} />
        </Link>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <a href="#how-it-works" onClick={toggleMenu}>How it works</a>
          <a href="#plans" onClick={toggleMenu}>Subscription plans</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#press" onClick={toggleMenu}>Press</a>
          <a href="#about" onClick={toggleMenu}>About</a>
        </div>
        <div className={styles.mobileAuthButtons}>
          <button className={`${styles.button} ${styles.secondaryButton}`}>Login</button>
          <button className={`${styles.button} ${styles.primaryButton}`}>Get Started</button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className={styles.navLinks}>
        <a href="#how-it-works">How it works</a>
        <a href="#plans">Subscription plans</a>
        <a href="#services">Services</a>
        <a href="#press">Press</a>
        <a href="#about">About</a>
      </div>
      <div className={styles.authButtons}>
        <button className={`${styles.button} ${styles.secondaryButton}`}>Login</button>
        <button className={`${styles.button} ${styles.primaryButton}`}>Get Started</button>
      </div>
    </nav>
  );
}