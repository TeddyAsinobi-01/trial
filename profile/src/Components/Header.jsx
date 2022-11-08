import React, { Component } from 'react'
import logo from '../Components/public/img1.png';
import image from '../Components/public/img4.png';
import '../Components/css/Header.css';



const Header = () => {
    return (
        <div>
            <div className='images'>
                <a href='#home'><img id='img2' src={image}></img> </a>
            </div>
            <div className='images'>
                <a href='#home'><img id='profile__img' src={logo} width='100' height='100'></img> </a>
            </div>

            <a id="twitter" href='https://twitter.com/teddy_asinobi?s=09'><h3>Teddy Asinobi</h3></a>
        </div>
    )
}


export default Header;

