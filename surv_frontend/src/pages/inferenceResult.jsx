import { useState } from 'react';
import './inferenceResult.css';
import GoBackIcon from '../assets/go_backicon.svg';
import SampleVideo from '../assets/normal_video3.mp4';

const InferencePage = () => {
    const [isInferencing, setIsInferencing] = useState(false);
    const [result, setResult] = useState(null);
  
    const handleInference = () => {
      setIsInferencing(true);
      setTimeout(() => {
        setResult({
          filename: 'uploaded_video.mp4',
          model: 'ViViT',
          topPrediction: 'Note_Giving',
          confidence: '97%',
        });
        setIsInferencing(false);
      }, 3000);
    };
  
    return (
      <div className="inference-wrapper">
        <div className="header-row">
          <img
            src={GoBackIcon}
            alt="Go Back"
            className="go-back-icon"
            onClick={() => window.history.back()}
          />
          <h1 className="inference-title">INFERENCE RESULT</h1>
        </div>
  
        <div className="inference-body">
          <div className="left-panel">
            <video src={SampleVideo} controls className="video-player" />
  
            <div className="button-row">
              <button className="left-button" onClick={handleInference}>Run Inference</button>
              <button className="right-button" onClick={() => window.location.reload()}>Upload Another</button>
            </div>
          </div>

          <div className="right-panel dashboard-panel">
            {isInferencing ? (
                <p className="result-loading">Running inference...</p>
            ) : result ? (
                <div className="dashboard-content">
                    <div className="info-card">
                        <h2>{result.filename}</h2>
                        <p><strong>Model:</strong> {result.model}</p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-box">
                            <p className="stat-title">Top Prediction</p>
                            <p className="stat-value">{result.topPrediction}</p>
                        </div>
                        <div className="stat-box">
                            <p className="stat-title">Confidence</p>
                            <p className="stat-value">{result.confidence}</p>
                        </div>
                    </div>

                    <div className="note">
                        <p>Model ran successfully. You can now interpret or export the results.</p>
                    </div>
                </div>
            ) : (
            <p className="no-result">No inference result yet.</p>
            )}
            </div>
  
          {/* <div className="right-panel">
            {isInferencing ? (
              <p className="result-loading">Running inference...</p>
            ) : result ? (
              <div className="results-box">
                <h3>Filename: {result.filename}</h3>
                <p><strong>Model:</strong> {result.model}</p>
                <p><strong>Top Prediction:</strong> {result.topPrediction} ({result.confidence})</p>
              </div>
            ) : (
              <p className="no-result">No inference result yet.</p>
            )}
          </div> */}
        </div>
      </div>
    );
  };
  
  export default InferencePage;