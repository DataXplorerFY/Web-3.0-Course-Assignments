"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (

    <main>

      <nav className="navbar background h-nav">
        <ul className="nav-list v-class">
          <div className="logo"><img src="img/logo1.png" alt="logo" /></div>
          <li><a href="/">Home</a></li>
          <li><a href="/Blogs/slug"> Blogs </a></li>

        </ul>
        <div className="rightNav v-class">
          <input type="text" name="search" id="search" />
          {/* <!-- for small button we use <btn-sm> --> */}
          <button className="btn btn-sm"> search</button>

        </div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      <section className=" background firstsection">

        <div className="box-main">
          <div className="firsthalf">
            <p className="text-big">
              <h2>In a world of pixels, we're painting stories. Welcome to our digital canvas!</h2>
            </p>
            <p className="text-small">Join us in exploring the art of storytelling in the digital age. Every click
              unveils a new chapter, every scroll paints a new picture</p>

          </div>

        </div>

      </section>
      <section className="section">
        <div className="paras">
          <p className="sectiontag text-big">
            <h2>Computer Programmers: Architects of Digital Solutions</h2>
          </p>
          <p className="sectionsubtag text-small">Computer programmers possess the ability to think both creatively
            and systematically, finding innovative ways to tackle challenges and optimize processes.
            They work collaboratively with software developers, engineers, and designers to ensure
            that software projects meet the requirements and expectations of end-users.From crafting
            elegant user interfaces to optimizing the performance of complex databases, programmers
            play a pivotal role in every stage of the software development lifecycle. They are skilled
            problem solvers who debug, test, and refine code to ensure its reliability, security,
            and functionality.
          </p>
        </div>
        <div className="thumbnail">
          <img src="img/OIP.jpeg" alt="laptop image" height="300" width="400" />
        </div>
      </section>
      <section className="section secleft">
        <div className="paras">
          <p className="sectiontag text-big">
            <h2>Navigators of Code: Unleashing Creativity and Precision</h2>
          </p>
          <p className="sectionsubtag text-small">Programmers, the architects of digital innovation, blend creativity
            with precision to craft intricate software solutions. Their systematic problem-solving and
            collaboration with designers and engineers ensure software projects meet user expectations.
            From user interfaces to complex databases, they shape every stage of development, refining code
            for reliability, security, and functionality. With an insatiable thirst for learning, programmers
            navigate ever-evolving technologies, propelling us into a future limited only by their ingenuity.
          </p>
        </div>
        <div className="thumbnail">
          <img src="img/3.avif" alt="laptop image" height="300" width="400" />
        </div>
      </section>



      <section className="section">
        <div className="paras">
          <p className="sectiontag text-big">
            <h2>Code Craftsmen: Blending Ingenuity and Precision</h2>
          </p>
          <p className="sectionsubtag text-small">Code craftsmen, with their blend of ingenuity and precision,
            shape our digital landscape. Their innovative thinking tackles challenges head-on, fashioning
            software solutions that redefine what's achievable. Through seamless collaboration, they turn
            concepts into tangible applications, from user interfaces to intricate databases. Expert
            problem solvers, they meticulously refine code for reliability and security, guiding us
            toward a future of endless technological possibilities.
          </p>
        </div>
        <div className="thumbnail">
          <img src="img/4.avif" alt="laptop image" height="300" width="400" />
        </div>
      </section>

      <section className="contact">
        <h1 className="text">Contact us </h1>
        <div className="form">
          <input className="form-input" type="text" name="Name" id="Name" placeholder="Enter your name" />
          <input className="form-input" type="text" name="Phone no" id="Phone" placeholder="Enter your phone no" />

          <input className="form-input" type="text" name="Email" id="Email" placeholder="Enter your email" />
          <textarea className="form-input1" name="text" id="text" cols={30} rows={10}
            placeholder="Elaborate  your concern"></textarea>

          <button className="btn btn-dark">Submit Form </button>
        </div>
      </section>
      <br />
      <br />

      <footer className="background">
        <p className="text-footer">
          Copyright &copy; iEducate.com -All rights reserved
        </p>
      </footer>
    </main>

  )
}
