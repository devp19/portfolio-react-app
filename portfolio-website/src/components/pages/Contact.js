import React, { forwardRef } from 'react';
const Contact = forwardRef((props, ref) => {


    return (
        <section ref={ref}>
            <div id="contact-section" className="regular-bg pt-4">
                <div className="border separator">
                    <div className="row justify-content-center">
                        <div className="col-md-8 justify-content-center border">
                            <div className="title-2 text-center">Contact</div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 pt-4">
                        <form  name="contact" method="POST" data-netlify="true">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label supporting">Name</label>
                                <input type="text" name="name" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label supporting">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">I'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label supporting">Message</label>
                                <textarea name="message" className="form-control" id="form4Example3" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="custom-btn">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="separator pt-4">
                </div>
                <div className="separator pt-4">
                </div>
                <div className="separator pt-4">
                </div>

                <div className=" border para text-center">
                    <div className="pt-4">© 2024 Copyright: Dev Patel</div>
                </div>
            </div>
        </section>
    );
});

export default Contact;
