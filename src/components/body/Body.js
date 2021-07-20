import React from 'react'
import About from './about/About';
import Contact from './contact/Contact';
import Education from './education/Education';
// import Resume from './education/Education'
import Project from './projects/Project';
import Skills from './skills/Skills';
import Home from './topHome/Home';

function Body() {
    return (
        <div className='body'>
            <section id='home'>
                <Home/>
            </section>
            <section id='about'>
                <About/>
            </section>
            <section id='education'>
                <Education/>
            </section>
            <section id='skills'>
                <Skills/>
            </section>
            <section id='project'>
                <Project/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </div> 
       
    )
}

export default Body
