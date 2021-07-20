import React from 'react'
import './Web.css';
function Web() {
    return (
        <div className='web'>
             <div className='web-options'>
                <a href='#home'>Home</a>
            </div>
            <div className='web-options'>
                <a href='#about'>About</a>
            </div>
            <div className='web-options'>
                <a href='#education'>Education</a>
            </div>
             <div className='web-options'>
                <a href='#skills'>Skills</a>
            </div>
            <div className='web-options'>
                <a href='#project'>Project</a>
            </div>
            <div className='web-options'>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Web
