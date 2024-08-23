import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Success() {
    const navigate = useNavigate();
    const homeredirect = () => {
        navigate("/");
    }
   

    return (
        <div>
            <div className="background">
                <div className='row'>
                    <div className="col-md border full center-container">
                        <div className="centered-text">
                            <h5 className="supporting">Success!</h5>
                            <h2 className="title-3">Form Submitted!</h2>

                            <button className="custom-btn" onClick={homeredirect}>Home ↗︎</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
