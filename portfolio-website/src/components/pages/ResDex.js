import React, { forwardRef } from 'react';
import ResDexLogo from '../images/resdexlogo.png';
import ResDexImg from '../images/resdex-img.png'
const ResDex = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div id="projects-section" className="regular-bg pt-4">
                <div className="border separator">
                    <div className="row justify-content-center">
                        <div className="col-md-8 justify-content-center">
                            <div className="title-2 text-center">ResDex <img src={ResDexLogo} alt='resdex logo' height={50}/>
                            
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center left-sep">
                        {/* Project I */}
                        <div className='row'>
                            <div className='col-md-6 mx-auto'>
                            <img className='img-fluid' src={ResDexImg} alt='resdex-banner' style={{borderRadius: '20px'}}></img>
                            </div>
                        </div>
                        <div className="col-md-8 left-sep pt-4">
                        <div className="para-text">
                        <i>"<strong>Co-founder & Full-Stack Developer</strong> for ResDex, a student-led platform connecting universities across Ontario such as McMaster University, University of Ottawa, Toronto Metropolitan University and the University of Toronto! ResDex is aimed towards bridging the gap between academia and industry-level research publications, making it easier for students to find research-assistant positions and to go beyond the traditional academic scope to create impactful research papers."</i>
                            </div>
                            <br></br>
                            ↓
                            <div className="title-3">What is ResDex?</div>
                            <div className="para-text">
                                
                            ResDex is a student-friendly, accessible research paper “publishing” platform that gives students the opportunity to stand out among millions, review and edit papers, and connect with PHD level researchers. Designed to foster a collaborative academic community, ResDex allows users to showcase their research, achievements, and certifications in a dynamic online portfolio.
                            <br /><br />
By engaging in peer and expert reviews, students can refine their work, gain valuable feedback, and build meaningful connections with academics and professionals in their field.
                                <br /><br />
                                ↓
                                
                                <div className="title-3">Objective</div>

                                As students, we understand the difficulty and often timely process of cold-emailing hundreds of professors for research positions. While all is said and done, research itself is a hard industry to really gain experience in.
 <br></br>
 <br></br>
“That’s where ResDex comes into play.”
<br></br>
<br></br>

As a research-sharing platform, designed for students by students, we tailored the platform to fit those exact needs. Everything a student needs all on one site to help the user really build a portfolio around their contributions to the world of research.
<br></br>
<br></br>
↓ <a href="https://www.linkedin.com/company/ResDex" target='_blank' rel="noreferrer">
    <button className="custom-btn">View Organization ↗︎</button>
</a>
<a href="https://resdex.vercel.app" target='_blank' rel="noreferrer">
    <button className="custom-btn">Platform Launching Soon ↗︎</button>
</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ResDex;
