import React, {Component} from 'react';
import formatedTime from '../components/utilities';
import PlayPause from '../components/play-pause';
import ProgressBar from '../components/progress-bar';
import Video  from '../components/video';
import VideoPlayerControls from '../components/video-player-controls';
import VideoPlayerLayout from '../components/video-player-layout';
import Timer from '../components/timer';
import Title from '../components/title';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause:false,
    duration:0,
    durationTimer:0,
    currentTime:0,
    currentTimeTimer:"00:00",
    loading:false,
    volumeMuted:false,
  }
  togglePlay = (event) => {
    this.setState({
      pause:!this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause:(!this.state.autoplay)
    })
  }
  handleLoadedMetadata = (event) =>  {
    this.video = event.target;
    this.setState({
        duration: this.video.duration,
        durationTimer: formatedTime(this.video.duration)
    })
  }
  handleTimeUpdate = (event) =>  {
    this.setState({
        currentTime: this.video.currentTime,
        currentTimeTimer: formatedTime(this.video.currentTime)
    })
  }
  handleProgressChange = (event)=> {
    this.video.currentTime = event.target.value
  }
  handleSeeking = (event) => {
    this.setState({
      loading:true
    })
  }
  handleSeeked = (event) => {
    this.setState({
      loading:false
    })
  }
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value
  }
  handleVolumeClick = (event) => {
    this.setState({
      volumeMuted:!this.state.volumeMuted,
    })
  }
  handleFullScreenClick = event => {
  if (!document.webkitIsFullScreen) {
    this.player.webkitRequestFullscreen()
  } else {
    document.webkitExitFullscreen();
  }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
          <Title
            title={this.props.title}
          />
          <VideoPlayerControls>
            <PlayPause
              pause={this.state.pause}
              handleClick={this.togglePlay}
              />
            <Timer
              duration={this.state.durationTimer}
              currentTime={this.state.currentTimeTimer}
            />
            <ProgressBar
              duration={this.state.duration}
              value={this.state.currentTime}
              handleProgressChange={this.handleProgressChange}
            />
            <Volume
              handleVolumeChange = {this.handleVolumeChange}
              handleVolumeClick = {this.handleVolumeClick}
              volumeMuted = {this.state.volumeMuted}
            />
            <FullScreen
              handleFullScreenClick = {this.handleFullScreenClick}
            />
          </VideoPlayerControls>
          <Spinner
            active = {this.state.loading}
          />
          <Video
            autoplay={this.props.autoplay}
            pause={this.state.pause}
            handleLoadedMetadata = {this.handleLoadedMetadata}
            handleTimeUpdate = {this.handleTimeUpdate}
            handleSeeking = {this.handleSeeking}
            handleSeeked = {this.handleSeeked}
            volumeMuted = {this.state.volumeMuted}
            src={this.props.src}
          />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
