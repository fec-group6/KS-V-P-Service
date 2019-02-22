import React from "react";

function VideoInfo(video) {
  return (
    <div>
      <h5>{video.title}</h5>
      <div className="row">
        <div className="col-6 viewCount">{video.viewCount} views </div>
        <button className="col-1 btn btn-default"><i className="fas fa-thumbs-up"></i> {video.numberOfLikes}</button>
        <button className="col-1 btn btn-default"><i className="fas fa-thumbs-down"></i> {video.numberOfDislikes}</button>
        <button className="col-1 btn btn-default"><i className="fas fa-share"></i> SHARE</button>
        <button className="col-1 btn btn-default"><i className="fas fa-plus"></i> SAVE</button>
        <button className="col-1 btn btn-default"><i className="fas fa-ellipsis-h"></i></button>
      </div>
    </div> 
  )
}

export default VideoInfo;


