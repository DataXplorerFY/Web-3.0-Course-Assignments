

"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';

function blog() {
    return (
        <main>
            <section className="Sub-header">
                <nav>
                    <a href="index.html" className="logo">Xplore
                        <i className="fab fa-staylinked"></i>kill
                    </a>
                    <div className="nav-links" id="navLinks">
                        {/* reposnive bar open and close  */}
                        <i className="fa fa-times" ></i>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/about">About</a></li>

                        </ul>
                    </div>
                    <i className="fa fa-bars" ></i>
                    {/* reposnive bar open and close  */}
                </nav>
                <h1>Our Post</h1>
            </section>


            {/* Blog Page Section Start */}
            <section className='blog-content'>
                <div className="row">
                    <div className="blog-left">
                        <h2>Our Certificate & Online Program</h2>
                        <h5>Aug 1, 2021</h5>
                        <img src="img/post.png" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odio culpa veniam tempore ipsa, sequi cum expedita, exercitationem qui quasi placeat laboriosam iusto quidem architecto, labore dicta. Dolore, quia quasi?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nihil! Dolor quam molestias soluta debitis doloremque doloribus cumque ipsum? Eos consequuntur quo rerum eum nostrum. Totam tempora dignissimos quos eius.</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi totam sapiente consequatur. Deserunt odio doloremque rerum, sint atque dolor facilis nisi voluptatum in laboriosam error iure eaque praesentium voluptas dicta?</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates delectus ex facere, perspiciatis error at quam ipsa autem atque quos ipsam quibusdam voluptatum distinctio incidunt aspernatur vitae soluta minus aut.</p>

                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className="comment-form">
                                <input type="text" placeholder="Enter Name" required />
                                <input type="email" placeholder="Enter Email" required />
                                <textarea rows={5} placeholder="Your Comment" />
                                <button type="submit" className="hero_btn btn">POST COMMENT</button>
                            </form>
                        </div>
                    </div>

                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>12</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>29</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Analytics</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Full Stack</span>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Page Section end */}

            {/* Footer Section start */}
            <section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
                    dolorem.
                </p>

                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
                <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
            </section>

            {/* Footer Section end */}



        </main>

    )
}
export default blog