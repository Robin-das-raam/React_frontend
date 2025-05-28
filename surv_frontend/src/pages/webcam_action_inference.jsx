
import { FunctionComponent, useCallback } from 'react';
// import './live_cctv_inference.css';
import './webcam_action_inference.css';
import GoBackIcon from '../assets/go_backicon.svg';
import CctvIcon from '../assets/bx_cctv.svg';
import LocationIcon from '../assets/ic_sharp-my-location.svg';
import CalenderIcon from '../assets/uil_calender.svg';
import ClockIcon from '../assets/fluent_clock-48-regular.svg';
import LiveImage from '../assets/roadimage.jpg';

const LiveCCTVActionInference = () => {
    const onGoBackClick = useCallback(() => {
        //
    }, []);

    return (
        <div className="liveCCTVWrapper">
            <div className="leftPanel">
                <img src={GoBackIcon} alt="Go Back" className="goBackIcon" onClick={onGoBackClick} />

                <div className="headerSection">
                    <h1>Webcam Action Inference</h1>
                    <p className="connectYourCctv">
                        Use your device’s webcam to perform real-time action recognition.
                        Choose an inference model below, then start the live feed to begin detecting actions directly from your camera.
                    </p>
                </div>

                <div className="modelSelection">
                    <h2>Select Model</h2>
                    <label><input type="radio" name="model" /> Model 1</label>
                    <label><input type="radio" name="model" /> Model 2</label>
                    <label><input type="radio" name="model" /> Model 3</label>
                </div>
            </div>

            <div className="rightPanel">
                <div className="infoOverlay">
                    <div className="infoRow">
                        <img src={CctvIcon} alt="CCTV" />
                        <span>Camera 01</span>
                    </div>
                    <div className="infoRow">
                        <img src={LocationIcon} alt="Location" />
                        <span>Dhaka</span>
                    </div>
                    <div className="infoRow">
                        <img src={CalenderIcon} alt="Date" />
                        <span>04/07/2024</span>
                    </div>
                    <div className="infoRow">
                        <img src={ClockIcon} alt="Time" />
                        <span>01:13 PM</span>
                    </div>
                </div>
                <div className="videoSection">
                    
                    <img src={LiveImage} alt="Live CCTV" className="liveImage" />
                </div>

                <div className="controlButtons">
                    <button className="startBtn">Start Inferencing</button>
                    <button className="stopBtn">Stop Inferencing</button>
                </div>
            </div>
        </div>
    );
};

export default LiveCCTVActionInference;
