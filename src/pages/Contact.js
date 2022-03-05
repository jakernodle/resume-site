import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [captcha, setCaptcha] = useState(0);

  function onChange() {
    setCaptcha(1);
  }
  return (
    <Main
      title="Contact"
      description="Contact me via email @"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>You can email me for literally anything! Reach me at: </p>
          <ReCAPTCHA sitekey="6LcHg7MeAAAAAHrqJU3wsl_yxmKmpuS-tGrM2VyL" onChange={onChange} />
          {captcha ? <EmailLink /> : <p> Click the captcha to 👀 </p> }
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
