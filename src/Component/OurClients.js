import React from 'react'
import auvenir from '../data/image/images/http___auvenir_com_.jpeg'
import mobile from '../data/image/images/https___www_mobileiron_com_.jpeg'
import mindgeek from '../data/image/images/http___mindgeek_com_.jpeg'
import wedgenetworks from '../data/image/images/https___www_wedgenetworks_com_.jpeg'
import mobtrafficpartnerile from '../data/image/images/https___www_trafficpartner_com_.jpeg'
import Back from "../data/image/icons/back.svg"
import Next from "../data/image/icons/next.svg"

export default class OurClients extends React.Component {
  constructor(props) {
    super(props)
    this.currentSubSlider1Item = 1
    this.subSlider1ItemCount = 11
    setInterval(() => {
      this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("sub-slider-item1").clientWidth / 4)
    }, 3000);
    
  }
  nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {

    if (currentSubSlider1Item === subSlider1ItemCount -4) {
      this.currentSubSlider1Item = 1
    } else {

      this.currentSubSlider1Item++

    }
   
    let leftPosition = (this.currentSubSlider1Item - 1) * width
    let subSlider1Element = document.getElementById("sub-slider1")
    if (subSlider1Element) {
      if (this.currentSubSlider1Item === 1) {
        subSlider1Element.style.left = "0"
      } else {
        subSlider1Element.style.left = "-" + leftPosition + "px"
      }
    }
  }
  backSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
    if (currentSubSlider1Item === 1) {
      this.currentSubSlider1Item = subSlider1ItemCount - 4
    } else {
      this.currentSubSlider1Item--
    }
    let leftPosition = (this.currentSubSlider1Item - 1) * width
    let subSlider1Element = document.getElementById("sub-slider1")
    if (subSlider1Element) {
      if (this.currentSubSlider1Item === 1) {
        subSlider1Element.style.left = "0"
      } else {
        subSlider1Element.style.left = "-" + leftPosition + "px"
      }
    }
  }
  loadSubSlider() {
    let subSlider1Elm = document.getElementById("sub-slider1")
    if (subSlider1Elm) {
      subSlider1Elm.style.width = ((document.getElementById("sub-slider-item1").clientWidth / 4) * this.subSlider1ItemCount) + "px"
    }
    let subSlider1Items = document.querySelectorAll("#sub-slider1 .slider1")
    subSlider1Items.forEach((elm) => {
      elm.style.width = (document.getElementById("sub-slider-item1").clientWidth / 4) + "px"
    })
  }
  componentDidMount() {
    window.addEventListener("load", this.loadSubSlider)
  }
  componentWillUnmount() {
    window.removeEventListener('unload', this.loadSubSlider)
  }
  render() {
    return (
      <div>
        <div className="full-box full-box-2 ">
          <div className="sub-slider-1" style={{ backgroundImage: 'url(./image/backgrounds/our-clients.jpg)' }}>
            <h2><a href='#'>OUR CLIENTS</a></h2>
            <div className='slider-item1' id="sub-slider-item1">
              <div className="silderItem" id="sub-slider1">
                <div className="slider1 ">
                  <a href="# "><img src={auvenir} alt="auvenir" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={mobile} alt=" mobile" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={mindgeek} alt="mindgeek" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={wedgenetworks} alt="wedgenetworks" /></a>
                </div>
                <div className="slider1">
                  <a href="# "><img src={mobtrafficpartnerile} alt="mobtrafficpartnerile" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={wedgenetworks} alt="wedgenetworks" /></a>
                </div>
                <div className="slider1">
                  <a href="# "><img src={mobtrafficpartnerile} alt="mobtrafficpartnerile" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={wedgenetworks} alt="wedgenetworks" /></a>
                </div>
                <div className="slider1">
                  <a href="# "><img src={mobtrafficpartnerile} alt="mobtrafficpartnerile" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={wedgenetworks} alt="wedgenetworks" /></a>
                </div>
                <div className="slider1 ">
                  <a href="# "><img src={mindgeek} alt="mindgeek" /></a>
                </div>
                
              </div>
            </div>
          </div>
          <button className="btn-previus" onClick={() => this.backSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("sub-slider-item1").clientWidth / 4)}><img src={Back} /></button>
          <button className="btn-next" onClick={() => this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("sub-slider-item1").clientWidth / 4)}><img src={Next} /></button>
        </div>
      </div>
    )
  }
}