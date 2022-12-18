import React from 'react'

//STYLING
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h4>Company</h4>
        <ul>
          <li>About The Post</li>
          <li>Newsroom Policies & Standards</li>
          <li>Diversity and Inclusion</li>
          <li>Careers</li>
          <li>Media & Community Relations</li>
          <li>WP Creative Group</li>
          <li>Accessibility Statement</li>
        </ul>
      </div>
      <div>
        <h4>Get The Post</h4>
        <ul>
          <li>Become a Subscriber</li>
          <li>Gift Subscriptions</li>
          <li>Mobile & Apps</li>
          <li>Newsletters & Alerts</li>
          <li>Washington Post Live</li>
          <li>Reprints & Permissions</li>
          <li>Post Store</li>
          <li>Books & E-Books</li>
          <li>Newspaper in Education</li>
          <li>Print Archives (Subscribers Only)</li>
          <li>Today’s Paper</li>
          <li>Public Notices</li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul>
          <li>Contact the Newsroom</li>
          <li>Contact Customer Care</li>
          <li>Contact the Opinions team</li>
          <li>Advertise</li>
          <li>Licensing & Syndication</li>
          <li>Request a Correction</li>
          <li>Send a News Tip</li>
          <li>Report a Vulnerability</li>
        </ul>
      </div>
      <div>
        <h4>Terms of Use</h4>
        <ul>
          <li>Digital Products Terms of Sale</li>
          <li>Print Products Terms of Sale</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Settings</li>
          <li>Submissions & Discussion Policy</li>
          <li>RSS Terms of Service</li>
          <li>Ad Choices</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer