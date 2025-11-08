var Index  = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0" />
        <link rel="stylesheet" href="Styles/styles.css" />
        <link rel="stylesheet" href="Styles/styles-index.css" />
        <title>STEAMachines</title>
        <link rel="icon" type="image/png" href="Assets/SM-Logo.ico" />
        <header className="header">
          <nav className="nav container">
            <div className="nav__data">
              <a href="index.html" className="nav__logo">
                <img src="Assets/SM-Logo.png" alt="" width={50} /><i className="ri-planet-line" /></a><i className="ri-planet-line"><a href /></i>
              <div className="nav__toggle" id="nav-toggle">
                <i className="ri-menu-line nav__burger" />
                <i className="ri-close-line nav__close" />
              </div>
            </div>
            {/*=============== NAV MENU ===============*/}
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li><a href="about-us.html" className="nav__link">About Us</a></li>
                <li><a href="member.html" className="nav__link">Members</a></li>
                <li><a href="contact-us.html" className="nav__link">Contact Us</a></li>
              </ul>
            </div>
          </nav>
          <div className="patch">
          </div>
        </header>
        {/*layouting*/}
        <div className="css3-shadow">
          <div className="hl-text">
            <p>10/08/2025</p>
            <h3>Photoshoot</h3>
          </div>
          <a href="Photoshoot.html"><video src="Assets/Home-Photoshot.mp4" autoPlay loop muted /></a>
        </div>
        {/* <div class="highlights">
      <div class="hl-item">
      <div class="hl-text">
        <p>xx/xx/2025</p>
        <h3>Fortnightly Meeting #1</h3>
      </div>
        <img src="Assets/png.png" class="hl-image inactive" alt="Tes" id="l"/>
      </div>
    <div class="css3-shadow">
      <div class="hl-text">
        <p>10/08/2025</p>
        <h3>Photoshoot</h3>
      </div>
      <a href="Photoshoot.html"><video src="Assets/Home-Photoshot.mp4" autoplay loop muted></video></a>
    </div>
      <div class="hl-item">
      <div class="hl-text">
        <p>xx/xx/2025</p>
        <h3>Fortnightly Meeting #2</h3>
      </div>
        <img src="Assets/png.png" class="hl-image inactive" alt="Tes" id="r"/>
      </div>
    </div> */}
        <div className="event-box">
          <div className="events-title">
            <h1>Upcoming Events</h1>
            <p>Main Activities</p>
          </div>
        </div>
        <div className="events-rundown">
          <div className="event">
            <h2>Event 1</h2>
            <p>Date: xx/xx/2025</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="event">
            <h2>Event 2</h2>
            <p>Date: xx/xx/2025</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="event">
            <h2>Event 3</h2>
            <p>Date: xx/xx/2025</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <footer className="footer">
          <p>© 2025 STEAMachines. All rights reserved</p>
          {/* <div id="Shhh"><a href="Top-Secret.html" id="shhh">Here</a></div> */}
        </footer>
      </div>
    );
  }
});