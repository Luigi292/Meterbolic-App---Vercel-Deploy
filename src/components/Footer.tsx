'use client';

import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Products</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="#">Meterbolic AI</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Subscription plans</Link></li>
              <li><Link href="#">Meterbolic health coaching</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>About</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="#">About Meterbolic</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">FAQ Features</Link></li>
              <li><Link href="#">Newsletter</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Stay in Touch</h3>
            <form className={styles.footerNewsletter}>
              <input type="text" placeholder="First Name" className={styles.footerInput} />
              <input type="email" placeholder="Email Address" className={styles.footerInput} />
              <button type="submit" className={styles.footerNewsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.footerSocial}>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f fa-2xl"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter fa-2xl"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram fa-2xl"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in fa-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Meterbolic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}