import React from "react";
import image from './people-img.jpg'
function Home() {
    return (<div className="homeDiv">
        <h1 className="welcomeMsg"> WELCOME</h1>
        <h2 className="paraMsg">to the project !</h2>
        <h3 className="detailsMsg">Let's get <a href="/login">started!</a></h3>
        <img src={image} alt='home page ' className='loginPic' />
    </div>);
}
export default Home;