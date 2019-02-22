import React from "react";

function IFrame(props) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe id="iframe" className="embed-responsive-item"
        src={props.videoURL}>
      </iframe>
    </div>
  ) 
}

export default IFrame;


