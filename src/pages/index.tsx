import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  // Add state management for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Meterbolic | Where health meets Longevity</title>
        <meta name="description" content="Advanced metabolic testing for optimal health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Glucose Alone is Not Enough</h1>
          <h2>Discover the Full Picture of Your <br></br> Metabolic Health</h2>
          <p>
            Introducing the only at-home test that measures both glucose and insulin response, 
            giving you the most advanced insights into your metabolic health.
          </p>
          <button className={`${styles.button} ${styles.primaryButton}`}>Learn More</button>
        </div>
      </section>


      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <Image src="/images/banner1.png" alt="Partner Logo" width={250} height={100} />
          </div>
          <div className={styles.bannerImage}>
            <Image src="/images/banner2.png" alt="Partner Logo" width={250} height={50} />
          </div>
          <div className={styles.bannerImage}>
            <Image src="/images/banner3.png" alt="Partner Logo" width={100} height={100} />
          </div>
          <div className={styles.bannerImage}>
            <Image src="/images/banner4.png" alt="Partner Logo" width={250} height={100} />
          </div>
          <div className={styles.bannerImage}>
            <Image src="/images/banner5.png" alt="Partner Logo" width={250} height={100} />
          </div>
        </div>
      </section>


      {/* Glucose Insight Section */}
      <section className={styles.glucoseInsight}>
        <div className={styles.glucoseContainer}>
          <div className={styles.glucoseContent}>
            <h2>Many people track their glucose levels, but glucose alone doesn't tell the full story.</h2>
            <p>
              Insulin resistance begins long before blood glucose levels show any signs of trouble. In fact, insulin is the first to break down—often years before glucose levels rise. This means standard glucose tests can appear normal while insulin resistance silently develops. By the time glucose levels increase, significant metabolic damage has already occurred.
            </p>
<button className={`${styles.button} ${styles.primaryButton}`}>Learn More</button>
          </div>
          <div className={styles.glucoseImage}>
            <Image 
              src="/images/footprint.png" 
              alt="Glucose monitoring chart" 
              width={500}
              height={500}
              quality={100}
              />
          </div>
        </div>
      </section>
      

      {/* Journey Section with Larger Images */}
      <section className={styles.journey}>
        <div className={styles.journeyOverlay}></div>
        <div className={styles.journeyContainer}>
          <div className={styles.journeyContent}>
            <h2>Journey Starts Here</h2>
            <div className={styles.journeySteps}>
              <div className={styles.step}>
                <div className={styles.stepImage}>
                  <Image 
                    src="/images/icon1-journey-section.png" 
                    alt="Subscribe" 
                    width={180} 
                    height={180}
                    className={styles.stepImageContent}
                  />
                </div>
                <div className={styles.stepNumber}>1</div>
                <h3>Subscribe</h3>
                <p>Begin your metabolic health journey with our comprehensive subscription plan tailored to your needs.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepImage}>
                  <Image 
                    src="/images/icon2-journey-section.png" 
                    alt="Test kit" 
                    width={180} 
                    height={180}
                    className={styles.stepImageContent}
                  />
                </div>
                <div className={styles.stepNumber}>2</div>
                <h3>Test</h3>
                <p>Receive our advanced metabolic testing kit and gain insights into your body's unique responses.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepImage}>
                  <Image 
                    src="/images/icon3-journey-section.png" 
                    alt="AI Coach" 
                    width={180} 
                    height={180}
                    className={styles.stepImageContent}
                  />
                </div>
                <div className={styles.stepNumber}>3</div>
                <h3>AI Coaching</h3>
                <p>Get personalized recommendations and continuous support from our AI-powered health coach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresContent}>
            <span className={styles.sectionTag}>Metabolic Health</span>
            <h2>Reveal The Truth About Your Health</h2>
            
            <div className={styles.textColumns}>
  <div className={styles.textColumn}>
    <p>
      You're not lazy. You're not broken. You're likely metabolically stuck. 
      Metabolic dysfunction is a silent epidemic — impacting fat storage, sleep, and thinking.
    </p>
  </div>
  <div className={styles.textColumn}>
    <p>
      It affects how we age, long before diabetes strikes. 
      Your body's already showing signs — and the Kraft Test can catch them before it's too late.
    </p>
  </div>
</div>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>Comprehensive metabolic analysis</div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>Early detection of dysfunction</div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>Personalized health insights</div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <div>Actionable recommendations</div>
              </div>
            </div>
          </div>
          <div className={styles.featuresImage}>
            <Image 
              src="/images/mailbox-leaf-feature-section.png" 
              alt="Metabolic health visualization"
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Health Longevity Section with Image */}
      <section className={styles.healthLongevity}>
        <div className={styles.healthLongevityOverlay}></div>
        <div className={styles.healthLongevityContainer}>
          <div className={styles.healthLongevityImage}>
            <Image 
              src="/images/heart-longevity-pict.png" 
              alt="Health and longevity"
              width={500}
              height={500}
              quality={100}
            />
          </div>
          <div className={styles.healthLongevityContent}>
            <h2>Where health meets Longevity</h2>
            <p>
              Unlock the secrets of health and longevity with cutting-edge metabolic testing. 
              Dive deep into the unique needs of your body, enabling you to customize and 
              elevate your wellness journey for unparalleled effectiveness and vitality.
            </p>
            <p>
              Discover the life-changing benefits of metabolic testing that can boost your 
              health and extend your lifespan. Access crucial insights that empower you to 
              make smarter choices, setting the stage for a vibrant and healthier future.
            </p>
            <button className={`${styles.button} ${styles.primaryButton}`}>More About Meterbolic</button>
          </div>
        </div>
      </section>
      

      {/* Info Cards Section with Larger Icons */}
      <section className={styles.infoCards}>
        <div className={styles.infoCardsContainer}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <i className="fas fa-cogs fa-4x"></i>
            </div>
            <h3>How it Works</h3>
            <p>Discover our simple process for metabolic testing and health optimization.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <i className="fas fa-box-open fa-4x"></i>
            </div>
            <h3>Products</h3>
            <p>Explore our range of metabolic testing kits and health products.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <i className="fas fa-info-circle fa-4x"></i>
            </div>
            <h3>About Meterbolic</h3>
            <p>Learn about our mission to revolutionize metabolic health.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <i className="fas fa-robot fa-4x"></i>
            </div>
            <h3>Metabolic AI</h3>
            <p>See how our AI technology provides personalized health insights.</p>
          </div>
        </div>
      </section>

      {/* Stay in Touch Section */}
      <section className={styles.stayInTouch}>
        <div className={styles.stayInTouchContainer}>
          <div className={styles.stayInTouchContent}>
            <h2 className={styles.stayInTouchTitle}>Stay in Touch</h2>
            <p className={styles.stayInTouchText}>
              Take your health in your own hands and subscribe now to our newsletter
            </p>
            <form className={styles.stayInTouchForm}>
              <input type="text" placeholder="First Name" className={styles.stayInTouchInput} />
              <input type="email" placeholder="Email Address" className={styles.stayInTouchInput} />
              <button type="submit" className={styles.stayInTouchButton}>
                Subscribe
              </button>
            </form>
          </div>
          <div className={styles.stayInTouchImage}>
            <Image 
              src="/images/stay-in-touch.png" 
              alt="Health newsletter"
              width={600}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image 
                src="https://randomuser.me/api/portraits/women/43.jpg" 
                alt="Testimonial" 
                width={80} 
                height={80} 
                className={styles.testimonialAvatar}
              />
            </div>
            <p className={styles.testimonialText}>
              "Meterbolic changed my life. I discovered metabolic issues I never knew I had and finally understand why I felt tired all the time."
            </p>
            <span className={styles.testimonialAuthor}>- Sarah J.</span>
            <span className={styles.testimonialRole}>Customer</span>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Testimonial" 
                width={80} 
                height={80} 
                className={styles.testimonialAvatar}
              />
            </div>
            <p className={styles.testimonialText}>
              "The AI coach helped me make sense of my results and gave me actionable steps to improve my health."
            </p>
            <span className={styles.testimonialAuthor}>- Michael T.</span>
            <span className={styles.testimonialRole}>Customer</span>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Testimonial" 
                width={80} 
                height={80} 
                className={styles.testimonialAvatar}
              />
            </div>
            <p className={styles.testimonialText}>
              "As a doctor, I recommend Meterbolic to all my patients. It's the most comprehensive metabolic test available."
            </p>
            <span className={styles.testimonialAuthor}>- Dr. Lisa R.</span>
            <span className={styles.testimonialRole}>Healthcare Professional</span>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Testimonial" 
                width={80} 
                height={80} 
                className={styles.testimonialAvatar}
              />
            </div>
            <p className={styles.testimonialText}>
              "The insulin response data explained so much about my weight struggles. I'm finally making progress!"
            </p>
            <span className={styles.testimonialAuthor}>- David K.</span>
            <span className={styles.testimonialRole}>Customer</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />


    </div>
  );
}