
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';



const blogData = [{
    id : 1,
    title : "Navigators of Code: Unleashing Creativity and Precision",
    description: "This is "
},
{
    id : 2,
    title : "Unleashing Creativity and Precision",
    description: "This is "
},
{
    id : 3,
    title : "Unleashing Creativity and Precision",
    description: "This is "
},
{
    id : 4,
    title : "Unleashing Creativity and Precision",
    description: "This is "
}
]


export default function blogs({params}: {params:{title:string}}) {
    const selectBlog = blogData.filter((item)=> item.title == params.title)
    return (

        <main>

            <nav className="navbar background h-nav">
                <ul className="nav-list v-class">
                    <div className="logo"><img src="img/logo1.png" alt="logo" /></div>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Blogs"> Blogs </a></li>

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
            
            <section className=" background1 firstsection1">

                <div className="box-main">
                    <div className="firsthalf">

                    </div>

                </div>
                
            </section>




              {/* ..........Blogs Start..........  */}



            <section className="section secleft">
                
                <div className="paras" >
                
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
                    <img src="img/ronaldo.jpeg" alt="laptop image" height="250" width="350" />
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
                    <img src="img/ai.jpg" alt="laptop image" height="250" width="350" />
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
                    <img src="img/cooking.avif" alt="laptop image" height="250" width="350" />
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
                    <img src="img/laptop accessories.png" alt="laptop image" height="250" width="350" />
                </div>
            </section>



        </main>
    )
}