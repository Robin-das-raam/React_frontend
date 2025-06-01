import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './upload_videos.css';
import UploadIcon from '../assets/icon_img.png';
import GoBackIcon from '../assets/go_backicon.svg';


const DragAndDrop = ({ onDrop }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleDrop =(acceptedFiles) =>{
        const filesWithProgress = acceptedFiles.map((file) => ({
            file,
            progress: 0,
        }));

        setUploadedFiles((prev) =>  [...prev, ...filesWithProgress]);

        // Simulate Upload progress
        filesWithProgress.forEach((fileItem, index) => {
            const interval = setInterval(() => {
                setUploadedFiles((prevFiles) => {
                    const updatedFiles = [...prevFiles];
                    const currentFile = updatedFiles.find((f) => f.file.name === fileItem.file.name);
                    if (currentFile.progress < 100){
                        currentFile.progress += 5;
                    } else {
                        clearInterval(interval);
                    }
                    return [...updatedFiles];
                });
            }, 100);
        });

        // Call the external drop handler if needed
        if (onDrop) onDrop(acceptedFiles)
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop});

    return (
        
        <div className="drag-drop-wrapper">
            <img
                src={GoBackIcon}
                alt="Go Back"
                className="go-back-icon"
                
                onClick={() => window.history.back()} // Or your go-back handler
            />
            {/* <img src={GoBackIcon} alt="Go Back" className="goBackIcon" onClick={onGoBackClick} /> */}
            <h1 className="upload-title">UPLOAD FILES</h1>
            <p className="upload-subtitle">Upload videos you want to share</p>

            <div className="drop-area" {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={UploadIcon} alt="Upload Icon" className="upload-icon-img" />
                <p className="drop-text">Drag & Drop your files here</p>
                <p><strong className="drop-text">OR</strong></p> 
                {/* <strong>OR</strong></p> */}
                <button className="browse-btn">Browse Files</button>
            </div>

            {uploadedFiles.length > 0 && (
                <div className="uploaded-section">
                    <h3>Uploaded files</h3>
                    {uploadedFiles.map((item,index) => (
                        <div className="file-item" key={index}>
                            <span className="file-name">{item.file.name}</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${item.progress}%` }}></div>

                            </div>
                            <span className="progress-percent">{item.progress}%</span>
                        </div>
                    ))}
                </div>
            )}
            

        </div>
        
    );
};

const UploadFiles = () => {
    const handleFileDrop = (acceptedFiles) => {
        console.log('Dropped files:', acceptedFiles);
    };

    return (
        <div className="upload-wrapper">
            <DragAndDrop onDrop={handleFileDrop} />
        </div>
    );
};

export default UploadFiles;
