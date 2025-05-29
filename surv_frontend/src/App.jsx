// import React from 'react';
// import Welcome from './pages/inference_method.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Welcome />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome_p.jsx';
import InferenceMethod from './pages/inference_method.jsx';
import UploadVideos from './pages/upload_videos.jsx';
import InferenceResult from './pages/inferenceResult.jsx';
import LiveCCTVInference from './pages/live_cctv_inference.jsx';
import WebcamInference from './pages/webcam_action_inference.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/method" element={<InferenceMethod /> } />
        <Route path="/upload" element={<UploadVideos />} />
        <Route path="/result" element={<InferenceResult />} />
        <Route path="/live-cctv" element={<LiveCCTVInference />} />
        <Route path="/webcam" elemnt={<WebcamInference />} />

      </Routes>
    </Router>
  );
}

export default App;