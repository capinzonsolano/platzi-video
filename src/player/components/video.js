import React, {Component} from 'react';
import './video.css';

class Video extends Component{
  togglePlay(){
    if (this.props.pause) {
      this.video.play()
    }
    else {
      this.video.pause()
    }
  }
  muteVideo(){
    if (this.props.volumeMuted) {
      this.video.muted = true;
    }
    else {
      this.video.muted = false;
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.pause !== this.props.pause){
      this.togglePlay();
    }
    if (nextProps.volumeMuted !== this.props.muted) {
      this.muteVideo();
    }
  }

  setRef = (element) => {
    this.video = element;
  }
  render(){
    const {handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked, handleVolumeClick} = this.props;
    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;
