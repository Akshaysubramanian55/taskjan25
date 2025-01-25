import React, { useEffect, useState } from "react";
import "./task.css";
import demoimage from "./images/demo.svg";

function Task() {
    const [selected, setSelected] = useState(1); 

    useEffect(() => {
        const rightSection = document.querySelector(".rightsection");
        const imageContainers = document.querySelectorAll(".rightsection > div");

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;

            imageContainers.forEach((container, index) => {
                const rect = container.getBoundingClientRect();

                if (rect.top >= 0 && rect.top < viewportHeight / 2) {
                    setSelected(index + 1); 
                }
            });
        };

        rightSection.addEventListener("scroll", handleScroll);

        return () => {
            rightSection.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const segmentWidths = [
        selected === 2 ? 0.5 : 1, 
        selected === 2 ? 1.5 : 1, 
        1,
        1,
    ];

    return (
        <div className="container">
            <div className="leftsection">
                <div className="progresswrapper">
                    <div className="progressbar">
                        {segmentWidths.map((width, index) => (
                            <div
                                key={index}
                                className={`segment ${selected === index + 1 ? "active" : ""
                                    }`}
                                style={{ flex: width }}
                            ></div>
                        ))}
                    </div>
                    <div className={`progresslabels 
    ${selected === 2 ? 'closer' : ''}
    ${selected === 3 ? 'closer2' : ''}
    ${selected === 4 ? 'closer3' : ''}`}>
                        {[1, 2, 3, 4].map((num) => (
                            <span
                                key={num}
                                className={`label ${selected === num ? "selected" : ""}`}
                            >
                                {selected === num ? `[${num}]` : num}
                            </span>
                        ))}
                    </div>


                </div>
                <div className="leftsectiontext">
                    <h1>REAL TIME THREAT MONITORING</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet!</p>
                </div>
            </div>

            <div className="rightsection">
                <div>
                    <img src={demoimage} alt="Image 1" className="demoimage" />
                </div>
                <div>
                    <img src={demoimage} alt="Image 2" className="demoimage" />
                </div>
                <div>
                    <img src={demoimage} alt="Image 3" className="demoimage" />
                </div>
                <div>
                    <img src={demoimage} alt="Image 4" className="demoimage" />
                </div>
            </div>
        </div>
    );
}

export default Task;
