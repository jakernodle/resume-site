import React from 'react';
import { Link } from 'react-router-dom';
import TypeAnimation from 'react-type-animation';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
    </section>
    <section className="blurb">
      <header>
        <TypeAnimation
          sequence={['👋 Hi, I\'m John Ange Kernodle']}
          wrapper="h2"
        />
      </header>
      <p> Hello! My name is JohnAnge (J.A. for short), I released my first app at the age of 12, am an <a href="https://ece.ncsu.edu/">NC State ECE</a> graduate, <a href="https://entrepreneurship.ncsu.edu/andrews-launch-accelerator/"> Andrews Accelerator</a> Alumni, and occasionally a house DJ.
      </p>
      <h4>Like this website? It&apos;s a statically generated React app written with modern JavaScript. Feel free to use my code <u><a href="https://github.com/jakernodle/resume-site">here</a></u>.
      </h4>
    </section>
  </section>
);

export default SideBar;
