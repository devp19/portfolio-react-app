import React from 'react';

function Projects(){

    return(

        <div>

        <div id="about-section" className="regular-bg pt-4">
            <div className="border separator">
                <div className="row justify-content-center">
                    <div className="col-md-3 offset-md-1">
                        <img id="portrait-img" className="img-fluid" alt="Portrait" />
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
    </div>


    );

}

export default Projects;