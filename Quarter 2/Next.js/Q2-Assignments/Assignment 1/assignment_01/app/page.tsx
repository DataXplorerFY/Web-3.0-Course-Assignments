import Image from 'next/image'

import { CSSProperties } from 'react';


export default function Home(){

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


  return (

    <main>


      <div className="header" style={headerStyles}>
        <h1 style={titleStyles}>Certified Web 3.0 and Metaverse Developer: <br></br> A Nationwide Program in Karachi, Lahore, <br></br>Islamabad, and Peshawar</h1>        
        <h4 style={paragraph}>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h4>
      </div>


      <div className="main" >
        <p style={main}>Certified Web 3.0 and Metaverse Developer: A <br></br>Nationwide Program in Karachi, Lahore,<br></br> Islamabad, and Peshawar</p>

      <div className="panacloudImg" style={panaImg}>
      <img src="logo.png" alt="logo"  />
      </div>
       
       <p style={main}> The Future of the Web is Web 3.0, Metaverse, and Edge Computing.<br></br> Panaverse DAO is a movement to spread these technolgies<br></br> globally. It is community of Web 3 and Metaverse developers,<br></br> designers, trainers, startup founders and service providers.<br></br> </p>    
           
       <p>Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</p>
       
        
      </div>


      
      
    </main>
    
  );
}
