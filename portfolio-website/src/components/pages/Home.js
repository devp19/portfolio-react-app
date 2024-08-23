import React, { useRef } from 'react';
import Portrait from '../images/port3.png';
import Projects from './Projects'
import Contact from './Contact'

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
                                I'm a 19-year-old Computer Science student, currently attending Toronto Metropolitan University for my honors Bachelor of Science degree!

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
                                        <span className="bold">Programming Experience</span>
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

            

            <Projects ref={projectSectionRef} />
            <Contact ref={contactSectionRef} />


        {/* Button trigger modal */}
        <button
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
                            <h5 className="modal-title supporting" id="exampleModalLabel">Connect!</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <a class="custom-btn p-2" href='http://linkedin.com/in/devp19' target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                            </a>

                            <a class="custom-btn p-2" href='http://linkedin.com/in/devp19' target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                            </a>

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
