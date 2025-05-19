import React, { useState, forwardRef } from 'react';
import QonnectR from '../images/qr.png';
import Resdex from '../images/resdex1.png';
import MyBuddy from '../images/MyBuddy.png';
import QonnectRWin from '../images/win2.png';
import ResDexShow from '../images/resdex-phone-2.png';
const Projects = forwardRef((props, ref) =>
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
          <div className="title-2 text-center mt-4">Projects</div>

          <div className='col-md-9 p-3'>


            <div className='row mt-3 box d-flex align-items-center' style={{ marginLeft: '20px', marginRight: '20px' }}>
              
              <div className='col-auto d-flex align-items-center justify-content-center'>
                <img
                  className='img-fluid'
                  src={Resdex}
                  alt='Resdex'
                  style={{ maxHeight: '50px', borderRadius: '50%' }}
                />
              </div>

              <div className='col'>
                <div className='supporting-2 change-font d-flex'>
                  ResDex
                </div>
                <div className='text-muted d-flex' style={{ fontSize: '10px' }}>
                  <i>Full-Stack Web Application (August, 2024 - Present)</i>
                </div>
              </div>

              <div className='col-auto d-flex justify-content-end'>
                <a onClick={handleReadMoreClickResDex} style={{ cursor: 'pointer', fontSize: '12px' }} className='text-muted'>
                  <i>[ {isExpandedResDex ? 'Read Less' : 'Read More'} ]</i>
                </a>
              </div>

              {isExpandedResDex && (
                <div className='row mt-3 description' style={{ marginLeft: '20px', marginRight: '20px' }}>
                  <div className='col'>
                    <p className='text-muted'>
                    ResDex is a student-friendly, accessible research paper “publishing” platform that gives students the opportunity to stand out among millions, review and edit papers, and connect with PHD level researchers. Designed to foster a collaborative academic community, ResDex allows users to showcase their research, achievements, and certifications in a dynamic online portfolio.
<br></br>
<br></br>
By engaging in peer and expert reviews, students can refine their work, gain valuable feedback, and build meaningful connections with academics and professionals in their field.                    </p>
<br></br>
<img src={ResDexShow} className='img-fluid border-black' style={{width: '400px', borderRadius: '5px'}}></img>
<br></br>
<br></br>
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://resdex.vercel.app/', '_blank', 'noopener noreferrer')}>
  Website ↗︎   
</button>  
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://github.com/devp19/resdex', '_blank', 'noopener noreferrer')}>
  GitHub ↗︎   
</button> 
                  </div>
                  
                </div>
                

                
              )}
            </div>
            
            <div className='row mt-3 box d-flex align-items-center' style={{ marginLeft: '20px', marginRight: '20px' }}>
              
              <div className='col-auto d-flex align-items-center justify-content-center'>
                <img
                  className='img-fluid'
                  src={QonnectR}
                  alt='QonnectR'
                  style={{ maxHeight: '50px', borderRadius: '50%' }}
                />
              </div>

              <div className='col'>
                <div className='supporting-2 d-flex change-font'>
                  QonnectR
                </div>
                <div className='text-muted d-flex' style={{ fontSize: '10px' }}>
                  <i>DeltaHacks XI Winner (January, 2025)</i>
                </div>
              </div>

              <div className='col-auto d-flex justify-content-end'>
                <a onClick={handleReadMoreClick} style={{ cursor: 'pointer', fontSize: '12px' }} className='text-muted'>
                  <i>[ {isExpanded ? 'Read Less' : 'Read More'} ]</i>
                </a>
              </div>

              {isExpanded && (
                <div className='row mt-3 description' style={{ marginLeft: '20px', marginRight: '20px' }}>
                  <div className='col'>
                    <p className='text-muted'>
                    Have you ever found it hard to come up with inspiring project ideas, or struggled to stay motivated once you've started? Trust me, I’ve been there too. That’s exactly why we built QonnectR. It’s a platform designed to make collaboration seamless and exciting. You can create a profile, showcase your projects, and invite others to join your journey. But it doesn’t stop there—QonnectR also lets you discover and connect with passionate people, so you can jump into projects that excite you. Think of it as a space where solo ideas transform into dynamic team efforts. QonnectR isn’t just a tool—it’s a community where creativity meets collaboration, helping turn your visions into reality.

</p>
<img src={QonnectRWin} className='border-black img-fluid' style={{width: '400px', borderRadius: '5px'}}></img>
<br></br>
<br></br>
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://qonnectr.vercel.app/', '_blank', 'noopener noreferrer')}>
  Website ↗︎   
</button>  
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://devpost.com/software/qonnectr', '_blank', 'noopener noreferrer')}>
  Devpost ↗︎   
</button>  
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://github.com/devp19/qonnectr', '_blank', 'noopener noreferrer')}>
  GitHub ↗︎   
</button>  

                </div>
                </div>
              )}
            </div>



            <div className='row mt-3 box d-flex align-items-center' style={{ marginLeft: '20px', marginRight: '20px' }}>
              
              <div className='col-auto d-flex align-items-center justify-content-center'>
                <img
                  className='img-fluid'
                  src={MyBuddy}
                  alt='MyBuddy'
                  style={{ maxHeight: '50px', borderRadius: '50%' }}
                />
              </div>

              <div className='col'>
                <div className='supporting-2 d-flex change-font'>
                 MyBuddy
                </div>
                <div className='text-muted d-flex' style={{ fontSize: '10px' }}>
                  SerenityHacks 2nd Place (Best Open-Source Project) (January, 2024)
                </div>
              </div>

              <div className='col-auto d-flex justify-content-end'>
                <a onClick={handleReadMoreClickMyBuddy} style={{ cursor: 'pointer', fontSize: '12px' }} className='text-muted'>
                  <i>[ {isExpandedMyBuddy ? 'Read Less' : 'Read More'} ]</i>
                </a>
              </div>

              {isExpandedMyBuddy && (
                <div className='row mt-3 description' style={{ marginLeft: '20px', marginRight: '20px' }}>
                  <div className='col'>
                    <p className='text-muted'>
                    MyBuddy was developed as a comforting mental-health aid for those who find it difficult to journal or talk to others about their personal struggles. Many people experience a sense of isolation and find it challenging to express themselves verbally, especially when it comes to sensitive topics like mental health. MyBuddy aims to bridge this gap by offering a compassionate, non-judgmental space where users can reflect, document, and process their feelings privately.


</p>
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://devpost.com/software/mybuddy', '_blank', 'noopener noreferrer')}>
  Devpost ↗︎   
</button>  
<button className="custom-btn mb-2 pl-2" onClick={() => window.open('https://github.com/devp19/mybuddy', '_blank', 'noopener noreferrer')}>
  GitHub ↗︎   
  
</button> 
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})

export default Projects;
