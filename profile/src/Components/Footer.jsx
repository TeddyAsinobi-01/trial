import React from 'react'
import '../Components/css/Footer.css';
import logo from '../Components/public/img2.png';
import image from '../Components/public/img3.png';
import picture from '../Components/public/img5.png';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <a href='#home'><img id='slacc' src={image}></img> </a>
                <a href='#home'><img id='git_hub' src={logo}></img> </a>
            </div>
            <div className='bottom'>
                <h1>Zuri Internship</h1>
                <h3>HNG Internship Front End Task</h3>
                <div className='smallText'>
                    <a href='#home'><img id='pics' src={picture}></img> </a>
                    <h4>Ingressive {'\n'}<br></br> FOR GOOD</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer