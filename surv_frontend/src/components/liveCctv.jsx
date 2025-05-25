import React from 'react';
import './liveCctv.css'; // Make sure this path matches your structure

const LiveCCTV = () => {
  return (
    <div className="liveCctv">
      <div className="webcam1Parent">
        <img className="webcam1Icon" alt="Live Webcam" src="cctv_icon.png" />
        <div className="text">
          <b className="liveCctv1">LIVE CCTV</b>
        </div>
      </div>
      <div className="text1">
        <div className="startRealTimeActionContainer">
          <p className="startRealTimeAction">
            Start real-time action recognition directly using your device’s webcam.
          </p>
          <p className="startRealTimeAction">
            Best for personal monitoring or quick demos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveCCTV;
