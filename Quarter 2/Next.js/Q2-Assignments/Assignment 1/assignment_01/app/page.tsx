import Image from 'next/image'

import { CSSProperties } from 'react';


export default function Home() {

  const headerStyles: CSSProperties = {
    textAlign: 'center',
    background: 'linear-gradient(120deg, #155799, #159957)',

    padding: '10px',
    height: '65vh',
  };

  const titleStyles: CSSProperties = {
    fontSize: '46px',
    color: 'white',
    margin: '60px 0',
  };
  const paragraph: CSSProperties = {

    color: '#bcccc5',

  };
  const main: CSSProperties = {
    color: 'green',
    fontSize: '37px',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',     // Center content vertically
    textAlign: 'left',


  };

  const panaImg: CSSProperties = {

    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',     // Center content vertically


  };

  const headings: CSSProperties = {
    fontSize: '25px',
    color: 'green',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',     // Center content vertically
    textAlign: 'left',
  };
  const paras: CSSProperties = {
    fontSize: '25px',
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',     // Center content vertically
    textAlign: 'left',

  };

  return (

    <main>


      <div className="header" style={headerStyles}>
        <h1 style={titleStyles}>Certified Web 3.0 and Metaverse Developer: <br></br> A Nationwide Program in Karachi, Lahore, <br></br>Islamabad, and Peshawar</h1>
        <h4 style={paragraph}>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h4>
      </div>


      <div className="main" >
        <p style={main}>Certified Web 3.0 and Metaverse Developer: A <br></br>Nationwide Program in Karachi, Lahore,<br></br> Islamabad, and Peshawar</p>

        <div className="panacloudImg" style={panaImg}>
          <img src="logo.png" alt="logo" />
        </div>

        <p style={headings}> The Future of the Web is Web 3.0, Metaverse, and Edge Computing.<br></br> Panaverse DAO is a movement to spread these technolgies<br></br> globally. It is community of Web 3 and Metaverse developers,<br></br> designers, trainers, startup founders and service providers.<br></br> </p>

        <p style={paras}><a href='https://www.piaic.org/' target='_blank'>Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</a></p>
        {/* <p style={paras}><br></br> This document on Google Docs</p> */}

        <p style={paras}> The internet is without a doubt the most important technological development in human history.<br></br> Web3 and metaverse technologies expand the internet as we know it by introducing novel features <br></br>and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR,<br></br> AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
          <br></br>
          <br></br>
          Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030. </p>

        <h2 >The Program in a Nutshell: Earn While You Learn</h2>

        <p>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>
        <h2>Program of Studies</h2>
        <p>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
        <h2>Core Courses (Common in All Specializations)</h2>
        <p>Every participant of the program will start by completing the following two core courses:
          <br></br>
          <br></br>
          <a href='https://github.com/panaverse/panaverse.github.io#quarter-i-core' target='_blank'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</a>
          <br></br>
          <br></br>
          <a href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core' target='_blank'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</a>
        </p>
        <h2>Specialized Tracks</h2>

        <p>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>
        <h2>Web 3.0 (Blockchain) and Metaverse Specialization</h2>

        <p>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</a>
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</a>
        </p>

        <h2>Artificial Intelligence (AI) and Deep Learning Specialization</h2>


        <p>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</a>
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter IV AI-361: Deep Learning and MLOps</a>

        </p>

        <h2>Cloud-Native Computing Specialization</h2>


        <p>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)</a>
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform</a>

        </p>


        <h2>Ambient Computing and IoT Specialization</h2>

        <p>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices</a>
          <br></br>
          <br></br>
          <a href='https://www.panaverse.co/' target='_blank'>Quarter IV AC-361: Embedded Programming using C and Rust</a>

        </p>


        <h2>The Outcome for Participants of the Program</h2>

        <p>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
          <br></br>
          <br></br>
          <a href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms' target='_blank'>Top 5 ‘Metaverse’ jobs that will rule the future of tech industry</a>
          <br></br>
          <br></br>
          <a href='https://web3.career/web3-salaries/blockchain-developer' target='_blank'>Blockchain Developer Salary - Jun 2022</a>
          <br></br>
          <br></br>
          <a href='https://thedefiant.io/web3-soaring-salaries' target='_blank'>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</a>
          <br></br>
          <br></br>
          <a href='https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022' target='_blank'>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</a>
          <br></br>
          <br></br>
          <a href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/' target='_blank'>How To Become Metaverse Developer: Scope, Skills, and Salary</a>

        </p>


        <h2>Relevant Information Links</h2>
        <p>



          <a href='https://www.piaic.org/' target='_blank'>Addmission Website</a>
          <br></br>
          <br></br>
          <a href='https://www.facebook.com/groups/panaverse' target='_blank'>FaceBook</a>
          <br></br>
          <br></br>
          <a href='https://www.youtube.com/@panaverse/streams' target='_blank'>Youtube Live Channel</a>
          <br></br>
          <br></br>
          <a href='https://twitter.com/Panaverse_edu' target='_blank'>Twitter</a>
          <br></br>
          <br></br>
          <a href='https://github.com/panaverse' target='_blank'>GitHub Repos</a>


        </p>

        <h2>Detailed Course Syllabus</h2>
        <h3>Quarter I (Core)</h3>
        <h3>CS-101: Object-Oriented Programming using TypeScript</h3>

        <p>Duration: 13 Weeks
          <br></br>
          <br></br>
          Course Description:
          <br></br>
          <br></br>
          We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
          <br></br>
          <br></br>
          Course Outline:
          <br></br>
        </p>

        <h2>HTML and CSS (Homework)</h2>
        <p>
          <a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' target='_blank'>Learn HTML by Hira Khan (Watch Recorded Videos)</a>
          <br></br>
          <br></br>
          <a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob' target='_blank'>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a>
          <br></br>
        </p>


        <h2>Web 3.0 and Metaverse Theory</h2>
        <p>

          <a href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p' target='_blank'>Introduction to Panaverse DAO</a>
          <br></br>
          <br></br>
          <a href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p' target='_blank'>Web 3.0 User Guide</a>
          <br></br>
          <br></br>
          Complete Web 3 Assignments included in the Web 3 User Guide
          <br></br>
          <br></br>
          <a href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit' target='_blank'>Virtual and Augmented Metaverse User Guide</a>
          <br></br>
          <br></br>
          <h2>Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h2>


          <a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo' target='_blank'>Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a>

          <br></br>
          <br></br>
          <a href='https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4' target='_blank'>Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a>

          <br></br>
          <br></br>
          <a href='https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional' target='_blank'>JavaScript Book Code</a>

          <br></br>
          <br></br>
          <a href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md' target='_blank'>Getting Started Exercises with JavaScript and Node.js</a>
          <br></br>
          <br></br>
          Fundamentals of JavaScript and Node.js Quiz
          <br></br>
          <br></br>
          Topics Covered in the Quiz:
          <br></br>
          <br></br>
          Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)
          <br></br>
          <br></br>
          <ol>
          <li>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
          How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
          Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
          <li>
          Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
          </li>
          <li>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
          <li>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
          <li>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
          <li>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
          <li>JavaScript promises, mastering the asynchronous</li>
            
          </ol> 
          
         <a href='https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript' target='_blank'> https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript</a>
         <br></br>
         <br></br>
         New JavaScript Features in ECMAScript 2022 and 2021 https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg


        </p>
        <h2>Object-Oriented Programming with TypeScript</h2>
        <p>
        Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
        <br></br>
        <br></br>
        Learning Repository https://github.com/panaverse/learn-typescript
        <br></br>
        <br></br>
        In Class Companion projects and articles for Learning TypeScript https://www.learningtypescript.com/
        <br></br>
        <br></br>
        Homework Project
        <br></br>
        <br></br>
        <a href='https://github.com/panaverse/typescript-node-projects' target='_blank'>https://github.com/panaverse/typescript-node-projects</a>

        </p>
        <h2>TypeScript for React</h2>
        <p><a href='https://profy.dev/article/react-typescript' target='_blank'>Minimal TypeScript Crash Course For React With Interactive Code Exercises</a></p>

        <h2>TypeScript Quizzes</h2>
        <p>Fundamentals of TypeScript Quiz
          <br></br>
          <br></br>
          TypeScript Professional Proficiency Quiz
        </p>
        <p>
          <h2>Fundamentals of Version Control with Git (Recorded Videos)</h2>
          
          <a href='https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF' target='_blank'>Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a>
          <br></br>
          <br></br>

          Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther
          <br></br>
          <br></br>


          We will also cover these readings:
          <br></br>
          <br></br>


          https://help.github.com/articles/markdown-basics/
          <br></br>
          <br></br>


          http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
          <br></br>
          <br></br>


          https://git-scm.com/book/en/v2/Git-Branching-Rebasing
          <br></br>
          <br></br>


          http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
          <br></br>
          <br></br>


          For practice: https://try.github.io/levels/1/challenges/1
          <br></br>
          <br></br>


          Homework:
          <br></br>
          <br></br>


          https://www.datacamp.com/courses/introduction-to-git-for-data-science
          <br></br>
          <br></br>


          Git Cheatsheet https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html
          <br></br>
          <br></br>


          Git Quiz before the start of Quarter 2
          <br></br>
          <br></br>


          Total Questions: 60, Total Time: 75 minutes
          <br></br>
          <br></br>

          <h2>Quarter II (Core)</h2>
          
          <h2>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h2>
          

          Duration: 13 Weeks
          <br></br>
          <br></br>
          Course Description:
          <br></br>
          <br></br>
          The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
          <br></br>
          <br></br>
          Course Outline:
          <h2>Next.js 13 Web Development</h2>
          <a href='https://nextjs.org/docs' target='_blank'>Next 13 Official Documentation</a>
          <br></br>
          <br></br>
          <a href='https://react.dev/learn' target='_blank'>Latest Learn React Official Website</a>

          <br></br>
          <br></br>
          <a href='https://github.com/panaverse/learn-nextjs' target='_blank'>Learn Next.js 13 Learning Repo</a>

          <br></br>
          <br></br>
          <h2>Next.js 13 using Chakra UI (Remote Zoom Class)</h2>
          Chakra UI Docs https://chakra-ui.com/getting-started
          <br></br>
          <br></br>
          CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items https://www.freecodecamp.org/news/css-flexbox-complete-guide/
          <h2>UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)</h2>
          <a href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa' target='_blank'>Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano</a>
          <br></br>
          <br></br>
          <a href='https://www.figma.com/community/file/768809027799962739/tailwind-css-ui' target='_blank'>Figma Design Kit for TailwindCSS</a>

          <br></br>
          <br></br>
          <a href='https://www.figma.com/community/file/971408767069651759/chakra-ui-figma-kit' target='_blank'>Chakra UI Figma Kit</a>




        </p>








      </div>




    </main>

  );
}
