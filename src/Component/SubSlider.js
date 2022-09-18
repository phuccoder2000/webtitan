import mobie from '../data/image/images/mobile.png'
import web from '../data/image/images/web.png'
import desktop from '../data/image/images/desktop.png'
import cloud from '../data/image/images/cloud.png'
import telecom from '../data/image/images/network.png'
import testing from '../data/image/images/testing.png'
import blockchain from '../data/image/images/blockchain.png'
import artificial from '../data/image/images/ai.png'
import Back from "../data/image/icons/back.svg"
import Next from "../data/image/icons/next.svg"
import React, { Component } from 'react'
export default class SubSlider extends Component {
constructor(props) {
        super(props)
        this.currentSubSlider1Item = 1
        this.subSlider1ItemCount = 9
    }
    nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
        if (currentSubSlider1Item === subSlider1ItemCount - 3) {
            currentSubSlider1Item = 1
        } else {
            this.currentSubSlider1Item++
        }
        let leftPosition = (currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementById("sub-slider-1-items")
        if (subSlider1Element) {
            if (currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    backSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
        if (currentSubSlider1Item === 1) {
            currentSubSlider1Item = subSlider1ItemCount - 3
        } else {
            this.currentSubSlider1Item--
        }
        let leftPosition = (currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementById("sub-slider-1-items")
        if (subSlider1Element) {
            if (currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadSubSlider() {
        let subSlider1Elm = document.getElementById("sub-slider-1-items")
        if (subSlider1Elm) {
            subSlider1Elm.style.width = ((document.getElementById("sub-slider-1").clientWidth / 3) * this.subSlider1ItemCount) + "px"
        }
        let subSlider1Items = document.querySelectorAll("#sub-slider-1-items .slide-item")
        subSlider1Items.forEach((elm) => {
            elm.style.width = (document.getElementById("sub-slider-1").clientWidth / 3) + "px"
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
            <div className="full-box full-box-1">
                <div className="box sub-slider" id="sub-slider-1">
                    <h2>DOMAINS & TECHNOLOGIES</h2>
                    <div className="items">
                        <div className="slides" id="sub-slider-1-items">
                            <div className="slide-item">
                                <img src={mobie} alt="mobie" />
                                <h2>Mobile Development</h2>
                                <p>We have expertise in building mobile applications and mobile games on multiple platforms</p>
                            </div>
                            <div className="slide-item">
                                <img src={web} alt="web" />
                                <h2>Web App Development</h2>
                                <p>Our team understand how to build web applications with insight UX/UI that help to strengthen the client businesses and brand awareness fromm the bottom-line</p>
                            </div>
                            <div className="slide-item">
                                <img src={desktop} alt="desktop" />
                                <h2>Desktop Development</h2>
                                <p>We develop cross-platform standalone and client-server applications which run stability scalable, and also easy to convert to other architects or business models</p>
                            </div>
                            <div className="slide-item">
                                <img src={cloud} alt="cloud" />
                                <h2>Cloud Based Development</h2>
                                <p>We have extensive experience in implementation of specific PaaS and SaaS solutions</p>
                            </div>
                            <div className="slide-item">
                                <img src={telecom} alt="telecom" />
                                <h2>Telecom & Networking</h2>
                                <p>Our team has strong experience in telecom and network systems that enable us to provide both testing and development services</p>
                            </div>
                            <div className="slide-item">
                                <img src={testing} alt="testing" />
                                <h2>Testing & Quality Assurance</h2>
                                <p>We have well-defined process for testing projects to provide testing and quality assurance services on various domains and techniques </p>
                            </div>
                            <div className="slide-item">
                                <img src={blockchain} alt="blockchain" />
                                <h2>Blockchain Development</h2>
                                <p>We have experiences in setting up, configuring, and developing applications based on Block chain technologies: Ethereum, De-centralized, Smart Contract, Cryptocurrency</p>
                            </div>
                            <div className="slide-item">
                                <img src={artificial} alt="artificial" />
                                <h2>Artificial Intelligence</h2>
                                <p>We have extensive experiences in implementation of specific solutions with AI inside: Core Machine Learning Algorithms, Unsupervised Learning, Data Preparation...</p>
                            </div>
                            <div className="slide-item">
                                <img src={artificial} alt="artificial" />
                                <h2>Artificial Intelligence</h2>
                                <p>We have extensive experiences in implementation of specific solutions with AI inside: Core Machine Learning Algorithms, Unsupervised Learning, Data Preparation...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-actions">
                    <button className="btn-previus" onClick={() => this.backSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("sub-slider-1").clientWidth / 3)}><img src={Back} /></button>
                    <button className="btn-next" onClick={() => this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("sub-slider-1").clientWidth / 3)}><img src={Next} /></button>
                </div>
            </div>
        )
    }
}