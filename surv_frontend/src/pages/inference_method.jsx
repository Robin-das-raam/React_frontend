import {functionComponent, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import './inference_method.css';
import CctviconImage from '../assets/cctv_icon.png';
import WebcamIconImage from '../assets/webcam_icon.png';
import UploadIconImage from '../assets/upload_icon.png';
import GobackIconImage from '../assets/go_backicon.svg'

const ChooseYourInferenceMethod = () => {
    const navigate = useNavigate();

    //  🔙 Go back to the previous page
    const onGobackIconClick = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    // 🔁 Navigate based on the method clicked
    const onCardClick = useCallback((method) => {
        if (method === 'live-cctv') navigate ('/live-cctv');
        else if (method === 'webcam') navigate ('/webcam');
        else if (method === 'upload') navigate ('/upload')
    }, [navigate]);

    return (
        <div className = "chooseYourInferenceMethod">
            <h1 className="heading">Choose Your Inference Method</h1>
            <div className = "cardContainer">
                {/* Live CCTV */}
                <div className="inferenceCard" onClick={()=> onCardClick('live-cctv')}>
                    <div className="cardIconWrapper">
                        <img className="cardIcon" alt ="Live CCTV" src = {CctviconImage} />
                        <div className="text">
                            <b className="cardTitle">LIVE CCTV</b>
                        </div>
                    </div>
                    <div className="text1">
                        <div className="cardDescription">
                            <p>Connect to a live CCTV stream for continuous action analysis.</p>
                            <p>Perfect for security and remote surveillance systems.</p>
                        </div>

                    </div>
                    
                </div>

                {/* Webcam */}
                <div className="inferenceCard" onClick={() => onCardClick('webcam')}>
                    <div className="cardIconWrapper">
                        <img className="cardIcon" alt="Webcam" src = {WebcamIconImage} />
                        <div className="text">
                            <b className="cardTitle">Webcam</b>
                        </div>
                    </div>
                    <div className="text1">
                        <div className="cardDescription">
                            <p>Start real time action recognition directly using your device's webcam </p>
                            <p>Best for personal monitoring or quick demos</p>
                        </div>
                    </div>
                </div>


                {/* Upload Video */}
                <div className="inferenceCard" onClick={() => onCardClick('upload')}>
                    <div className="cardIconWrapper">
                        <img className="cardIcon" alt="Upload Video" src = {UploadIconImage} />
                        <div className="text">
                            <b className="cardTitle">Upload Video</b>
                        </div>
                    </div>
                    <div className="text1">
                        <div className="cardDescription">
                            <p>Upload any recorded video to detect and analyze actions.</p>
                            <p>Ideal for post-event review or testing inference accuracy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="go-back-icon" alt="Go Back" src={GobackIconImage} onClick={onGobackIconClick} />
        </div>
    )
};



export default ChooseYourInferenceMethod;