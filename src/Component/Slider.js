import React from "react"
import Back from "../data/image/icons/back.svg"
import Next from "../data/image/icons/next.svg"
export default class TopSlider extends React.Component {
  constructor(props) {
    super(props)
    this.topSliderItemWidth = 0
    this.topSliderItemCount = 4
    this.currentTopSliderItem = 1
    setInterval(() => {
      this.nextTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
    }, 3000);
  }
  loadTopSlider(topSliderItemWidth, topSliderItemCount) {
    topSliderItemWidth = document.getElementsByClassName("slide-item")[0].clientWidth
    let topSlider = document.getElementById("top-slider")
    if (topSlider) {
      topSlider.style.width = topSliderItemWidth * topSliderItemCount + "px"
    }
  }
  backTopSlider(topSliderItemWidth, topSliderItemCount) {
    if (this.currentTopSliderItem === 1) {
      this.currentTopSliderItem = topSliderItemCount
      topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
    } else {
      topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
      this.currentTopSliderItem--
    }
    let leftPosition = (this.currentTopSliderItem - 1) * topSliderItemWidth
    let sliderElement = document.getElementById("top-slider")
    if (sliderElement) {
      if (this.currentTopSliderItem === 1) {
        sliderElement.style.left = "0"
      } else {
        sliderElement.style.left = "-" + leftPosition + "px"
      }
    }
    let pagingElement = document.getElementById("slider-paging")
    if (pagingElement) {
      pagingElement.innerHTML = this.currentTopSliderItem + "/" + topSliderItemCount
    }
  }
  nextTopSlider(topSliderItemWidth, topSliderItemCount) {
    if (this.currentTopSliderItem === topSliderItemCount) {
      this.currentTopSliderItem = 1
      topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
    } else {
      topSliderItemWidth = document.getElementsByClassName("slide-item")[this.currentTopSliderItem - 1].clientWidth
      this.currentTopSliderItem++
    }
    let leftPosition = (this.currentTopSliderItem - 1) * topSliderItemWidth
    let sliderElement = document.getElementById("top-slider")
    if (sliderElement) {
      if (this.currentTopSliderItem === 1) {
        sliderElement.style.left = "0"
      } else {
        sliderElement.style.left = "-" + leftPosition + "px"
      }
    }
    let pagingElement = document.getElementById("slider-paging")
    if (pagingElement) {
      pagingElement.innerHTML = this.currentTopSliderItem + "/" + topSliderItemCount
    }
  }
  componentDidMount() {
    window.addEventListener("load", this.loadTopSlider(this.topSliderItemWidth, this.topSliderItemCount))
  }
  componentWillUnmount() {
    window.removeEventListener('unload', this.loadTopSlider)
  }
  render() {
    return (
      <div className="TopSlider">
        <header className="App-slider">
          <div className="slider">
            <div className="slides" id="top-slider">
              <div className="slide-item item1">
                <div className="slide-content">
                  <h2>INSPIRE YOUR WORK</h2>
                  <p>Founded on trust and experience, by a professional team, with a big vision and mission to provide the best services to our clients.</p>
                </div>
              </div>
              <div className="slide-item item2">
                <div className="slide-content">
                  <h2>COMPREHENSIVE INNOVATIONS</h2>
                  <p>A dedicated and professional team that offers a wide range of advanced solution for offshore software testing and comprehensive development services.</p>
                </div>
              </div>
              <div className="slide-item item3">
                <div className="slide-content">
                  <h2>ADVANCED SOLUTION FOR INNOVATIONS</h2>
                  <p>Always hunger for new idea creation, we incubate good ideas by providing facilities for product development and environment where creativity leverages our skills and services.</p>
                </div>
              </div>
              <div className="slide-item item4">
                <div className="slide-content">
                  <h2>"INSPIRE" WORKING ENVIRONMENT</h2>
                  <p>Our friendly, challenging, and collaborative environment creates enjoy valuable benefits and sharing ownership.</p>
                </div>
              </div>
            </div>
            <div className="slider-actions">
              <button className="btn-previus" onClick={() => {
                this.backTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
              }}><img src={Back} /></button>
              <span id="slider-paging">1/4</span>
              <button className="btn-next" onClick={() => {
                this.nextTopSlider(this.topSliderItemWidth, this.topSliderItemCount)
              }}><img src={Next} /></button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}