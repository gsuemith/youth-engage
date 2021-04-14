import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ about=true }) => {
  return (
  <footer id="footer">
    { about &&
    <div className="inner">
      <section className="info">
        <h3>About Us</h3>
        <div className="about">
          <p>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur malesuada.</p><p>Sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis.</p>
          <ul className="actions">
            <li><Link to="/" className="button">Learn More</Link></li>
          </ul>
        </div>
        <div className="team">
          <article>
            <span className="image"><img src="images/pic06.jpg" alt=""/></span>
            <p>
              <strong className="name">John Doe</strong>
              <span className="title">Lorem semper magna etiam</span>
            </p>
          </article>
          <article>
            <span className="image"><img src="images/pic07.jpg" alt=""/></span>
            <p>
              <strong className="name">Jane Anderson</strong>
              <span className="title">Etiam feugiat adipiscing veroeros</span>
            </p>
          </article>
          <article>
            <span className="image"><img src="images/pic08.jpg" alt=""/></span>
            <p>
              <strong className="name">Mike Smith</strong>
              <span className="title">Consequat nulla dolor blandit</span>
            </p>
          </article>
        </div>
      </section>
      <section className="contact">
        <h3>Contact Us</h3>
        <ul className="contact-icons">
          <li className="icon solid fa-home"><a href="/#">1234 Somewhere Road /#80486<br/>Nashville, TN 00000</a></li>
          <li className="icon solid fa-phone"><a href="/#">(800) 555-0000 x12345</a></li>
          <li className="icon solid fa-envelope"><a href="/#">hello@untitled.tld</a></li>
          <li className="icon brands fa-facebook"><a href="/#">facebook.com/untitled-tld</a></li>
          <li className="icon brands fa-twitter"><a href="/#">twitter.com/untitled-tld</a></li>
        </ul>
      </section>
    </div>
    }
    <div className="copyright">
      &copy; Untitled. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer
