import React from "react";
import './Beyond.css'; // Assuming it's a CSS file for styling
import visionProImage from '../../src/assets/images/Apple-Vision-Pro 1.png'; // Assuming you have an image file for Vision Pro

function BeyondSection() {
    return (
        <div className="vision-pro wrapper">
            <div className="body">
                <div className="vision-pro-content content">
                    <h2 className="title">Beyond The Possible </h2>
                    <div className="image-container">
                        <img src={visionProImage} alt="Vision Pro" className="image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeyondSection;
