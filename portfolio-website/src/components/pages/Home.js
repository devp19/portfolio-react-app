import React, { useRef } from 'react';
import Portrait from '../images/port3.png';
import Projects from './Projects'
import Contact from './Contact'
import ResDex from './ResDex'

function Home() {
    const aboutSectionRef = useRef(null);   
    const projectSectionRef = useRef(null);
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
        <div>
            <div className="background">
                <div className='row'>
                    <div className="col-md border full center-container">
                        <div className="centered-text">
                            <h5 className="supporting">Hello! I'm</h5>
                            <h2 className="title">Dev Patel</h2>
                            <button className="custom-btn" onClick={scrollToAbout}>About ↗︎</button>
                            <button className="custom-btn" onClick={scrollToProject}>Projects ↗︎</button>
                            <button className="custom-btn" onClick={scrollToContact}>Contact ↗︎</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about-section" ref={aboutSectionRef} className="regular-bg pt-4">
                <div className="border separator">
                    <div className="row justify-content-center">
                        <div className="col-md-3 offset-md-1">
                            <img id="portrait-img" className="img-fluid" src={Portrait} alt="Portrait" />
                
                        </div>
                        <div className="col-md-5 left-sep">
                            <h2 className="title-2">About Me</h2>
                            <div className="para-text">
                                I'm a 19-year-old Computer Science student, currently attending Toronto Metropolitan University for my honours Bachelor of Science degree!

                                <br /><br />
                                A small backstory → I was first introduced to programming in Grade 6 and have since fallen in love with programming and the realm of technology! I started off by working on Robots, whether that was through FLL tournaments or even VEX Robotics. I often held a lead-programmer role for autonomous challenges, and that's what influenced my decision to choose Computer Science as my post-secondary career path!
                                <br /><br />
                                Going back to the present → I'm in my second year of Computer Science, so with any free time I get, I'm ideally keeping up with any tech-related news surrounding artificial intelligence. I'm a big believer in Artificial-Intelligence adoption in medicinal sectors, which is something I hope to contribute towards post-undergrad!
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
                                            3.89
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            
            <ResDex />
            <Projects ref={projectSectionRef} />
            <Contact ref={contactSectionRef} />


        {/* Button trigger modal */}
        <button
                id='symbol'
                type="button"
                className="btn btn-primary fixed-bottom-left regular"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                @
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="symbol-text">Let's Talk!</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                           <div className="row justify-content-center">
                            <div className="col-md-4 text-center">
                                    <a href="https://linkedin.com/in/devp19" target='_blank' rel="noreferrer"><button id="icon-gap" className='custom-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
<span id='icon-gap'>LinkedIn</span></button>
</a>
                                </div>
                                <div className="col-md-4 text-center">
                                <a href="https://github.com/devp19" target='_blank' rel="noreferrer"><button className='custom-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg> <span id='icon-gap'>GitHub</span></button></a>
                                </div>
                                <div className="col-md-4 text-center">
                                    <a href="mailto:devptl841806@gmail.com" target='_blank' rel="noreferrer"><button id="icon-gap" className='custom-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
<span id='icon-gap'>Email</span></button>
</a>
                                </div>
                           </div>

                        </div>
                        <div className="modal-footer supporting">
                            <button
                                className="custom-btn"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
