import React from "react";
import './Visionpro.css'; // Assuming it's a CSS file for styling
import visionProImage1 from '../assets/images/Apple-Vision-Pro-Logo-PNG 3.png'; // Assuming you have an image file for Vision Pro

function VisionPro() {
    return (
        <div className="vision-pro-wrapper">
            <img src={visionProImage1} alt="Vision Pro" className="vision-pro-image" />
        </div>
    );
}

export default VisionPro;
