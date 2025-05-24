// src/pages/welcome_p.jsx
import React from 'react';
import './Welcome.css';

// ✅ Use import for assets
import BackgroundImage from '../assets/cctv.png';
import TryNowIcon from '../assets/arrow-icon.svg';

const Welcome = () => {
    const onFrameContainerClick = () => {
        alert ("Try Now Clicked")
    }
    return (
        <div className="welcomePage">
            <img className="backgroundImage" alt="Background" src={BackgroundImage} />

            <div className="welcomePageInner">
                <div className="LogoParent">

                    <div className="welcomeToSurveillanceSParent">
                        <div className="welcomeToContainer">
                            <p className="welcomeTo">Welcome to</p>
                            <p className="SurveillanceSystem">X Surveillance System</p>
                        </div>
                        <div className="experienceRealTimeAnd">
                            Experience real-time and video-based action recognition using cutting-edge AI.
                            Whether you're using a webcam, live CCTV feed,
                            or uploading a video — our platform analyzes human activities with speed and precision to keep you informed and secure.
                        </div>

                    </div>
                    <div className="tryNowParent" onClick={onFrameContainerClick}>
                        <div className="tryNow">Try Now</div>
                        <img className="TryNowIcon" alt="Try Now" src={TryNowIcon} />
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Welcome;
