import React, { useRef } from 'react';
import Portrait from '../images/circle4.png';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';
import { Link } from 'react-router-dom';


function Home() {
    const aboutSectionRef = useRef(null);   
    const projectSectionRef = useRef(null);
    const workSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    const scrollToContact = () => {
        if(contactSectionRef.current){
            contactSectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }
 
    // Function to scroll to the about section
    const scrollToAbout = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProject = () => {
        if (projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className='regular-bg'>
            <div className="background">
                <div className='row'>
                    <div className="col-md full center-container">
                        <div className="centered-text">
                            <h5 className="supporting" style={{marginTop: '100px'}}>Hello! I'm</h5>
                            <h2 className="title">Dev Patel</h2>
                            <button className="custom-btn" onClick={scrollToAbout}>About ↗︎</button>
                            <button className="custom-btn" onClick={scrollToProject}>Projects ↗︎</button>
                            <button className="custom-btn" onClick={scrollToContact}>Contact ↗︎</button>
                            <br></br>
                            <br></br>
                            <Link to="https://github.com/devp19" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github svg" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            </Link>
                            <Link to="https://www.linkedin.com/in/devp19" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin svg" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about-section" ref={aboutSectionRef} className="regular-bg pt-4">
                <div className="separator">
                    <div className="row justify-content-center">
                        <div className="col-md-3 offset-md-1">
                            <img id="portrait-img" className="img-fluid" src={Portrait} alt="Portrait" />
                
                        </div>
                        <div className="col-md-5 left-sep custom-abt">
                            <h2 className="title-2">About Me</h2>
                            <div className="para-text">
                                Software Engineer from Toronto, Ontario; studying <strong style={{fontStyle: 'italic'}}>Computer Science</strong> at Toronto Metropolitan University (formerly Ryerson).
                                <br /><br />
                                <em><strong>Automation Developer</strong></em> at <strong style={{fontStyle: 'italics'}}>Fidelity Investments</strong> for S25 as an <i>Emerging Technologies Student</i>.
                                <br></br>
                                <br></br>
                                A small backstory → I was first introduced to programming in Grade 6 and have since fallen in love with programming and the realm of technology! I started off by working on Robots, whether that was through FLL tournaments or even VEX Robotics. I often held a lead-programmer role for autonomous challenges, and that's what influenced my decision to choose Computer Science as my post-secondary career path!
                                <br /><br />
                                Going back to the present → I'm in my second year of Computer Science, so with any free time I get, I'm ideally keeping up with any tech-related news surrounding artificial intelligence. I'm a big believer in Artificial-Intelligence adoption in medicinal sectors, which is something I hope to contribute towards post-undergrad.
                                <br /><br />
                                ↓
                            </div>

                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Coding for more than</span>
                                        <br /><br />
                                        <div className="custom">
                                            7+ Years
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Grade-Point Average</span>
                                        <br /><br />
                                        <div className="custom pb-4">
                                            3.94
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <Work ref={workSectionRef} />
            <Projects ref={projectSectionRef} />
            <Contact ref={contactSectionRef} />
        </div>
    );
}

export default Home;
