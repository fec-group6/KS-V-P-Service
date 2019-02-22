import React from "react";
import IFrame from './IFrame.jsx';
import VideoInfo from './VideoInfo.jsx'; 

function VideoPlayer(props) {
  if (!props.video) return null;

  return (
    <div className='videoPlayer'>
      <IFrame videoURL={props.video.videoURL} />
      <VideoInfo {...props.video} />
    </div>
  );
}
export default VideoPlayer;


