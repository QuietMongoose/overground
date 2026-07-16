import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top">Overground</a>
    <nav>
      <a href="#services">Services</a>
      <a href="#demo">Demo</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-content reveal">
        <p class="eyebrow">Digital experiences for wineries</p>
        <h1>Digital guest experiences for wineries that want to feel premium online.</h1>
        <p class="hero-text">
          Overground designs modern winery websites, QR menu experiences, and mobile-first guest flows that make it easier for visitors to explore, reserve, order, and connect.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#contact">Request a consultation</a>
          <a class="button secondary" href="#demo">View demo concept</a>
        </div>
      </div>

      <div class="hero-card reveal delay">
        <div class="glass-card">
          <p class="card-label">Guest flow preview</p>
          <h2>Scan. View. Reserve.</h2>
          <p>
            A polished QR experience can guide guests from table to menu, tasting options,
            reservations, and contact details without friction.
          </p>
          <div class="qr-mock">
            <div></div>
            <span>QR menu concept</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section problem">
      <p class="eyebrow">The problem</p>
      <h2>Beautiful wineries often have digital experiences that feel unfinished.</h2>
      <div class="three-grid">
        <article>
          <h3>PDF menus</h3>
          <p>Guests open a slow PDF instead of a clean mobile menu.</p>
        </article>
        <article>
          <h3>Buried links</h3>
          <p>Reservations, restaurant hours, and tasting details are hard to find.</p>
        </article>
        <article>
          <h3>Old design</h3>
          <p>The online experience does not match the quality of the location.</p>
        </article>
      </div>
    </section>

    <section id="services" class="section">
      <p class="eyebrow">Services</p>
      <h2>Built for the customer journey.</h2>
      <div class="service-list">
        <article>
          <span>01</span>
          <h3>QR menu experiences</h3>
          <p>Mobile-first menus for tasting rooms, restaurants, seasonal specials, and events.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Winery websites</h3>
          <p>Elegant, fast, responsive websites that make your winery easier to understand and contact.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Guest flow improvements</h3>
          <p>Clear paths to reservations, tasting packages, restaurant details, maps, and inquiry buttons.</p>
        </article>
      </div>
    </section>

    <section id="demo" class="section demo-section">
      <div>
        <p class="eyebrow">Demo concept</p>
        <h2>A sample winery experience designed to be shown on a phone.</h2>
        <p>
          The demo will show how a winery can present tasting options, menu items,
          reservation links, and guest information in a clean mobile-first flow.
        </p>
        <a class="text-link" href="#contact">Ask for a demo walkthrough</a>
      </div>

      <div class="phone-mock">
        <div class="phone-top"></div>
        <div class="phone-screen">
          <p class="mini-label">Vellora Estate</p>
          <h3>Today’s tasting menu</h3>
          <div class="menu-item">
            <span>Reserve Tasting</span>
            <strong>Open</strong>
          </div>
          <div class="menu-item">
            <span>Lunch Menu</span>
            <strong>QR</strong>
          </div>
          <div class="menu-item">
            <span>Events</span>
            <strong>View</strong>
          </div>
        </div>
      </div>
    </section>
    <section class="section process">
      <p class="eyebrow">How it works</p>
      <h2>A clean process from first review to launch.</h2>
      <div class="three-grid">
        <article>
          <h3>1. Review</h3>
          <p>We review your current website, menu, reservation flow, and mobile experience.</p>
        </article>
        <article>
          <h3>2. Design</h3>
          <p>We create a polished digital concept focused on clarity, speed, and guest action.</p>
        </article>
        <article>
          <h3>3. Launch</h3>
          <p>We prepare your new page, QR flow, or website and help make it easy to share with guests.</p>
        </article>
      </div>
    </section>
    <section id="pricing" class="section">
      <p class="eyebrow">Starting packages</p>
      <h2>Simple starting packages, with founding-client pricing available.</h2>
<p class="section-intro">
  Early local winery partners may qualify for discounted launch pricing in exchange for feedback and portfolio use.
</p>
      <div class="pricing-grid">
        <article class="price-card">
          <p class="package">QR Menu Starter</p>
          <h3>Starting at $199</h3>
          <p>Clean QR menu or mobile landing page for restaurant menus, tasting menus, or seasonal specials.</p>
        </article>
        <article class="price-card featured">
          <p class="package">Winery Website Starter</p>
          <h3>Starting at $599</h3>
          <p>A polished 3 to 5 section website for wineries that need a better first impression online.</p>
        </article>
        <article class="price-card">
          <p class="package">Premium Guest Experience</p>
          <h3>Starting at $999</h3>
          <p>Website, QR menu flow, reservation/contact path, and a more complete digital guest experience.</p>
        </article>
      </div>
    </section>

    <section class="section about">
      <p class="eyebrow">About Overground</p>
      <h2>Overground is built for local wineries that want their online presence to feel as intentional as their tasting room.</h2>
      <p>
        We focus on clean design, mobile-first structure, and practical guest flow improvements.
        The goal is simple: make it easier for visitors to understand, reserve, order, and connect.
      </p>
    </section>

    <section id="contact" class="section contact">
      <p class="eyebrow">Contact</p>
      <h2>Ready to improve your winery’s digital experience?</h2>
      <p>
        Send a short message about your winery, current website, and what you want to improve.
      </p>
      <a class="button primary" href="mailto:felicitousoverture@gmail.com?subject=Overground%20Website%20Inquiry">
        Email Overground
      </a>
      <p class="small-note">Replace this with your real business email before publishing.</p>
    </section>
  </main>

  <footer>
    <p>© ${new Date().getFullYear()} Overground. Digital experiences for wineries.</p>
  </footer>
`