import React, { Component } from 'react';
import video from '../assets/videos/home-video.mp4'
import './home.css'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='home'>
        <video src={video} autoPlay loop muted/>
        <div className='content'>
            <p>Welcome to the </p>
            <h1>Workout Scheduler</h1>
        </div>
      </div>
    );
  }
}
