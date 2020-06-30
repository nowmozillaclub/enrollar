import React from "react";
import Homecover from './SVGs/homeCover'
import animatedCover from '../assets/home/smallCover.png'
import Features from './home/features';
import Footer from './home/footer';
import { motion, useViewportScroll } from 'framer-motion';
import Navbar from './layout/Navbar'

const HomePage = (props) => {
  const { scrollYProgress } = useViewportScroll()
  return (
    <>
      <Navbar props={props}/>
    <div id="home">
      <div className="section row">
        <div className="container introSection col s12">
            <Homecover /> 
            <h2 className="header col s12 l6 pull-l6 center" id="enrollarTitle"
            >enrollar</h2>
            <p id="tagline" className="lighten-3 col s12 l6 pull-l6 center">
              Step Up Your Learning Game!
              <br />
              <i>
                Let us do the heavy lifting. <br />
                Find all your favourite courses at one place! 
              </i>
            </p>
            <div className="col s12 center">
              <a href="#whyEnrollar" className="btn-floating btn-large center pulse cyan">
                <motion.i className="material-icons" id="drop"
                  style={{fontSize:{scrollYProgress}}}
                >arrow_drop_down</motion.i>
              </a>
            </div>
          </div>
      </div>
      <div id="curve"></div>

      <div className="row why" id="whyEnrollar">
        <div className="col s8 offset-s2" style={{"borderRadius":'24px'}}>
          <div className="card" style={{"borderRadius":"24px"}}>
            <div className="card-image waves-effect waves-block waves-light"
              style={{"borderRadius":"24px 24px 0 0"}}
            >
              <img className="activator" src={ animatedCover } alt="cover"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Why use enrollar?
                <i className="material-icons right">more_vert</i></span>
              <p>Click to find out.</p>
            </div>
            <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
              <span className="card-title white-text text-darken-4">
                Why use enrollar?
                <i className="material-icons right">close</i>
              </span>
              <p>
                <a href="https://github.com/nowmozillaclub/Course-Place"
                  style={{color:"yellow"}}
                >A NOW Mozilla Club project...</a>
              </p>
                <hr />
              <p>
                Ever been overwhelmed by the amount of sites that are there on the web for
                learning your desired course?
                <br/><br />
                Guess we all have been there...
                <br /><br />
                To overcome this, <span>NOW Mozilla Club</span>
                came up with a project that bridges all the sites together and allows the user to
                view different courses from different sites at one place!
                <br /><br />
                Let's get learning, shall we?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
    </>
  );
};

export default HomePage;
