import React from 'react'
import auvenir from '../data/image/images/http___auvenir_com_.jpeg'
import mobile from '../data/image/images/https___www_mobileiron_com_.jpeg'
import mindgeek from '../data/image/images/http___mindgeek_com_.jpeg'
import wedgenetworks from '../data/image/images/https___www_wedgenetworks_com_.jpeg'
import mobtrafficpartnerile from '../data/image/images/https___www_trafficpartner_com_.jpeg'
import Back from "../data/image/icons/back.svg"
import Next from "../data/image/icons/next.svg"

export default class OurClients extends React.Component {
  render() {
    return (
      <div>
        <div className="full-box full-box-2 ">
          <div className="sub-slider-1" style={{ backgroundImage: 'url(./image/backgrounds/our-clients.jpg)' }}>
            <h2>OUR CLIENTS</h2>
            <div className="slides">
              <div className="colmain2 ">
                <a href="# "><img src={auvenir} alt="auvenir" /></a>
              </div>
              <div className="colmain2 ">
                <a href="# "><img src={mobile} alt=" mobile" /></a>
              </div>
              <div className="colmain2 ">
                <a href="# "><img src={mindgeek} alt="mindgeek" /></a>
              </div>
              <div className="colmain2 ">
                <a href="# "><img src={wedgenetworks} alt="wedgenetworks" /></a>
              </div>
              <div className="colmain2a ">
                <a href="# "><img src={mobtrafficpartnerile} alt="mobtrafficpartnerile" /></a>
              </div>
         
            </div>
          </div>
          <button className="btn-previus" onClick={this.backSubSlider1}><img src={Back}></img></button>
          <button className="btn-next" onClick={this.nextSubSlider1}><img src={Next}></img></button>
        </div>
      </div>
    )
  }
}