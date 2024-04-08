import React from "react";
import "./Jumbotronc.css"

function Jumbotron() {
    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">Lorem ipsum dolor</h2>
                    <p className="text">Feel The Comfort</p>
                    <span className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                    </span>
                    <ul className="links">
                        <li>
                            <button className="button">Buy</button>
                        </li>
                        <li>
                            <a className="link" href="#">Learn more</a> {/* Added href="#" */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
