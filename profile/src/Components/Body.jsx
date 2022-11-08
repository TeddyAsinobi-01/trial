import React from 'react'
import { Component } from 'react'
import '../Components/css/Body.css';


class Body extends Component {
    render() {
        return (
            <div className='newBody'>

                <a id="slack" href='#'><h3>My slack username is: Teddy Asinobi</h3></a>
                <a id="btn__zuri" href='https://training.zuri.team/'><p>Meet The Zuri Team</p></a>
                <a id="books" href='https://books.zuri.team/'><div className='words'><h3>Read Our Books</h3><p>Find Our Helpful Books On Designing and Coding</p></div></a>
                <a id="book__python" href='https://books.zuri.team/python-for-beginners?ref_id"Teddy_Asinobi'><div className='word'><h3>E-book on Python</h3><p>Do you want to learn
                    a programming laguage why don't you start with python  click the link to sart reading</p></div></a>
                <a id="pitch" href='https://background.zuri.team/'><div className='word_pitch'><p>Want to know more about who handles your projects Click here to do a background check on your programmers</p></div></a>
                <a id="book__design" href='https://books.zuri.team/design-rules/'><div className='book__design'><p>Pitch your design books for free, offered by the Zuri Team</p></div></a>
            </div>
        )
    }
}


export default Body