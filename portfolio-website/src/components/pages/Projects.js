import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div id="projects-section" className="regular-bg pt-4">
                <div className="border separator">
                    <div className="row justify-content-center">
                        <div className="col-md-8 justify-content-center border">
                            <div className="title-2 text-center">Projects</div>
                        </div>
                    </div>

                    <div className="row justify-content-center left-sep">
                        {/* Project I */}
                        <div className="col-md-5 left-sep bottom-border">
                            <div className="title-3">I. ResDex <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"/>
</svg> </div>
            
                            <div className="para-text pt-4">
                                <strong> Research Sharing Platform</strong>
                                <br /><br />
                                • Led a cross-functional team of medical students and developers to pitch the platform to prestigious institutions (UofT, McMaster, UOttawa), resulting in strategic partnerships and 500+ pre-signups.                                
                                <br /><br />
                                • Engineered integration of AWS (Cognito, S3) and Firebase (Auth, Firestore), enhancing security with AES-256 encryption and TLS 1.2, leading to a 40% reduction in vulnerabilities and a 35% increase in data retrieval speed. 

                                <br /><br />
                                • Automated backend workflows using AWS Lambda and Firebase Functions, removing the need for 6 manual processes and increasing system throughput to handle 1,500 additional requests per day.

                                <br /><br />
                                • Collaborated with 10+ PhD professionals across diverse fields, building a network of expertise that ignited innovative insights and accelerated platform development.
                                <br /><br />

                                ↓ <a href="https://github.com/devp19/NEAR-Fantasy" target='_blank' rel="noreferrer">
                                    <button className="custom-btn">View on GitHub ↗︎</button>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Pre-signed-up Users</span>
                                        <br /><br />
                                        <div className="custom">
                                            500+
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Encryption</span>
                                        <br /><br />
                                        <div className="custom pb-4">
                                           AES-256
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project II */}
                        <div className="col-md-5 left-sep bottom-border pt-4">
                            <div className="title-3">II. MyBuddy <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg></div>
                            <div className="para-text">
                                <strong>Mental Health Journaling Assistant</strong>
                                <br /><br />
                                • Achieved 92% accuracy in therapeutic conversation similarity using 100+ prompts by employing
prompt-engineering techniques to train and fine-tune the model for active listening.
                                <br /><br />
                                • Automated real-time responses by integrating Google Cloud’s Speech-to-Text API with OpenAI’s GPT
Model, resulting in accurate transcriptions and response times in under 100ms in conversational applications.
                                <br /><br />
                                • Ranked 2nd in the best open-source project category at SerenityHacks and received a 9.72/10 user satisfaction rating over a minimum 2-week journaling period.                                <br /><br />
                                ↓ <a href="https://github.com/devp19/MyBuddy" target='_blank' rel="noreferrer">
                                    <button className="custom-btn">View on GitHub ↗︎</button>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Therapeutic Similarity Of</span>
                                        <br /><br />
                                        <div className="custom">
                                            92%
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Best Open Source Project</span>
                                        <br /><br />
                                        <div className="custom pb-4">
                                            No. 2
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project III */}
                        <div className="col-md-5 left-sep bottom-border pt-4">
                            <div className="title-3">III. NEAR Fantasy <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg></div>
            
                            <div className="para-text pt-4">
                                <strong> Fantasy Sports Platform Built On The NEAR Blockchain</strong>
                                <br /><br />
                                • Improved transaction security by 40% through the creation of a secure and private payment portal utilizing the
NEAR Blockchain, renowned for its robust security features, scalability, and decentralized architecture.                                <br /><br />
                                • Projected to save over $10,000 in financial resources towards NFT-digital creations when compared to traditional
methods by leveraging the DALL-E ecosystem for instant cost-free additions to the collection.                                
<br /><br />
• Labelled as the 1st ever fantasy-sports platform created on the NEAR Blockchain at HawkHacks.
<br /><br />

                                ↓ <a href="https://github.com/devp19/NEAR-Fantasy" target='_blank' rel="noreferrer">
                                    <button className="custom-btn">View on GitHub ↗︎</button>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Increased Transaction Security</span>
                                        <br /><br />
                                        <div className="custom">
                                            +40%
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Saving More Than</span>
                                        <br /><br />
                                        <div className="custom pb-4">
                                            $10,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-5 left-sep bottom-border pt-4">
                            <div className="title-3">IV. StockEye <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg></div>
                            <div className="para-text">
                                <strong>Stock Market Portfolio Tracker Discord Bot</strong>
                                <br /><br />
                                • Reduced traders’ dependency by over 34% through automation.
                                <br /><br />
                                • Saved an average of 2 hours per week through integration with Node.js module.
                                <br /><br />
                                • Developed a Python script to work simultaneously with the bot for real-time data.
                                <br /><br />
                                ↓ <a href="https://github.com/devp19/StockEye" target='_blank' rel="noreferrer">
                                    <button className="custom-btn">View on GitHub ↗︎</button>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Saves Weekly Time Of</span>
                                        <br /><br />
                                        <div className="custom">
                                            2 Hours+
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Response Time Of</span>
                                        <br /><br />
                                        <div className="custom pb-4">
                                            2.4 ms
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Projects;
