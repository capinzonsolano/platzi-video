import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import VolumeMuteIcon from '../../icons/components/volumeMute';
import './volume.css';

function Volume(props){
  return (
    <div className="Volume">
      {
        props.volumeMuted ?
        <button className="Volume-btn" onClick={props.handleVolumeClick}>
          <VolumeMuteIcon
            color = "white"
            size = {25}
            />
        </button>
        :
        <button className="Volume-btn" onClick={props.handleVolumeClick}>
          <VolumeIcon
            color = "white"
            size = {25}
            onClick={props.handleVolumeClick}
          />
        </button>
      }
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  )
}
export default Volume;
