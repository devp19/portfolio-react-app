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
                        <div className="col-md-5 left-sep bottom-border pt-4">
                            <div className="title-3">I. NEAR Fantasy 𐀪</div>
                            <div className="para-text">
                                Fantasy sports website built on the NEAR blockchain
                                <br /><br />
                                • Increased transaction security by 40% through the creation of a secure and private payment portal using the NEAR Blockchain.
                                <br /><br />
                                • Enabled real-time monitoring of fantasy league data from an active YahooFantasy league, enhancing user experience by 30%.
                                <br /><br />
                                • Projected to save over $10,000 in financial resources towards NFT-digital creations by leveraging the DALL-E ecosystem.
                                <br /><br />
                                ↓ <a href="https://github.com/devp19/NEAR-Fantasy" target='_blank'>
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
                                            $10,000+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project II */}
                        <div className="col-md-5 left-sep bottom-border pt-4">
                            <div className="title-3">II. MyBuddy ✎ᝰ</div>
                            <div className="para-text">
                                Mental health journaling assistant
                                <br /><br />
                                • Received a 95% user satisfaction rating over a 2-week journaling period.
                                <br /><br />
                                • Achieved 92% accuracy in therapeutic conversation similarity with over 100+ prompts.
                                <br /><br />
                                • Ranked 2nd in the best open-source project category at SerenityHacks.
                                <br /><br />
                                ↓ <a href="https://github.com/devp19/MyBuddy" target='_blank'>
                                    <button className="custom-btn">View on GitHub ↗︎</button>
                                </a>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="para-text pt-4">
                                        <span className="bold">Therapeutic Similarity Of</span>
                                        <br /><br />
                                        <div className="custom">
                                            95%
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
                        <div className="col-md-5 left-sep pt-4">
                            <div className="title-3">III. StockEye 𓁹</div>
                            <div className="para-text">
                                Stock market portfolio tracker Discord bot
                                <br /><br />
                                • Reduced traders’ dependency by over 34% through automation.
                                <br /><br />
                                • Saved an average of 2 hours per week through integration with Node.js module.
                                <br /><br />
                                • Developed a Python script to work simultaneously with the bot for real-time data.
                                <br /><br />
                                ↓ <a href="https://github.com/devp19/StockEye" target='_blank'>
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
