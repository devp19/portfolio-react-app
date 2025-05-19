import React, { useState, forwardRef } from 'react';
import QonnectR from '../images/qr.png';
import Resdex from '../images/resdex1.png';
import MyBuddy from '../images/MyBuddy.png';
import QonnectRWin from '../images/win2.png';
import Fidelity from '../images/fidelity.png';
const Work = forwardRef((props, ref) =>
     {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedResDex, setIsExpandedResDex] = useState(false);
  const [isExpandedMyBuddy, setIsExpandedMyBuddy] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReadMoreClickResDex = () => {
    setIsExpandedResDex(!isExpandedResDex);
  };

  const handleReadMoreClickMyBuddy = () => {
    setIsExpandedMyBuddy(!isExpandedMyBuddy);
  };

  return (
    <section className='regular-bg' ref={ref}>
      <div className='container mt-4 regular-bg'>
        <div className='row' style={{borderTop: '1px solid black', marginLeft: '100px', marginRight: '100px'}}> </div>
        <div className='row justify-content-center' style={{ marginTop: '30px'}}>
          <div className="title-2 text-center mt-4">Work Experience</div>

          <div className='col-md-9 p-3'>
            <div className='row mt-3 box d-flex align-items-center' style={{ marginLeft: '20px', marginRight: '20px' }}>
                          
                          <div className='col-auto d-flex align-items-center justify-content-center'>
                            <img
                              className='img-fluid'
                              src={Fidelity}
                              alt='Fidelity'
                              style={{ maxHeight: '50px', borderRadius: '50%' }}
                            />
                          </div>
            
                          <div className='col'>
                            <div className='supporting-2 d-flex change-font'>
                              Fidelity Investments
                            </div>
                            <div className='text-muted d-flex' style={{ fontSize: '10px' }}>
                              <i>Automation Developer (Emerging Technologies Student)</i>
                            </div>
                            <div className='text-muted d-flex' style={{ fontSize: '10px' }}>
                              <i>May 2025 –– Present</i>
                            </div>
                          </div>
            
                  
            
                      
                            <div className='row mt-3 description' style={{ marginLeft: '20px', marginRight: '20px' }}>
                              <div className='col'>
                                <p className='text-muted'>
Lead end-to-end development of automation solutions that optimize internal processes and deliver measurable time savings for business stakeholders. Utilize <strong>PL-900</strong> tools such as <strong>Microsoft Power Automate </strong>and <strong>PowerBI</strong> to design and deploy workflows, interactive dashboards, and low-code applications, reducing reliance on manual tasks across departments.
<br>
</br>
<br></br>
Work within a fast-paced <strong>Agile Scrum</strong> environment, collaborating with cross-functional teams—including business analysts, product owners, and end users—to gather requirements, iterate on prototypes, and deliver production-ready solutions in weekly sprint cycles. Participate in daily stand-ups, sprint planning, backlog refinement, and retrospectives to ensure consistent delivery of high-value features and continuous adaptation to evolving business needs.
<br>
</br>
<br></br>
Manage stakeholder engagement throughout the project lifecycle, from discovery and requirements gathering to UAT, deployment, and post-launch support. Develop technical documentation, training materials, and live demos to support user onboarding and long-term adoption of implemented solutions.            
            </p>
            {/* <br></br>
            <br></br>
            <button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://qonnectr.vercel.app/', '_blank', 'noopener noreferrer')}>
              Website ↗︎   
            </button>  
            <button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://devpost.com/software/qonnectr', '_blank', 'noopener noreferrer')}>
              Devpost ↗︎   
            </button>  
            <button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://github.com/devp19/qonnectr', '_blank', 'noopener noreferrer')}>
              GitHub ↗︎   
            </button>   */}
            
                            </div>
                            </div>
                        
                        </div>
          </div>
        </div>
      </div>
    </section>
  );
})

export default Work;
