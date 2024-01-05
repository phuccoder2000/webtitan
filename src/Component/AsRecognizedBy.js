import React from 'react'
import Award from '../data/image/images/Award_01.png'
import Award04 from '../data/image/images/Award_04.png'
import Award03 from '../data/image/images/Award_03.png'
import Award06 from '../data/image/images/Award_06.png'
import Award07 from '../data/image/images/Award_07.png'
import Award02 from '../data/image/images/Award_02.png'

export default class AsRecognizedBy extends React.Component {
    constructor(props) {
        super(props)
        this.currentSubSlider1Item = 1
        this.subSlider1ItemCount = 10
        setInterval(() => {
            this.nextSubSlider1(this.currentSubSlider1Item, this.subSlider1ItemCount, document.getElementById("view-frame").clientWidth / 5)
        }, 3000);

    }
    nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {

        if (currentSubSlider1Item === subSlider1ItemCount - 5) {
            this.currentSubSlider1Item = 1
        } else {

            this.currentSubSlider1Item++

        }
        // console.log (currentSubSlider1Item)
        let leftPosition = (this.currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementById("sour-frame")
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
            this.currentSubSlider1Item = subSlider1ItemCount - 5
        } else {
            this.currentSubSlider1Item--
        }
        let leftPosition = (this.currentSubSlider1Item - 1) * width
        let subSlider1Element = document.getElementById("sour-frame")
        if (subSlider1Element) {
            if (this.currentSubSlider1Item === 1) {
                subSlider1Element.style.left = "0"
            } else {
                subSlider1Element.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadSubSlider() {
        let subSlider1Elm = document.getElementById("sub-slider-1-items")
        if (subSlider1Elm) {
            subSlider1Elm.style.width = ((document.getElementById("view-frame").clientWidth / 5) * this.subSlider1ItemCount) + "px"
        }
        let subSlider1Items = document.querySelectorAll("#sour-frame .item")
        subSlider1Items.forEach((elm) => {
            elm.style.width = (document.getElementById("view-frame").clientWidth / 5) + "px"
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
                <div className="full-box">
                    <div className="row2 ">
                        <div className='title5'>
                            <h5>
                                As Recognized <br /> By
                            </h5>
                        </div>
                        <div className='view-frame' id='view-frame'>
                            <div className="sour-frame" id='sour-frame' >
                                <div className='item'><img src={Award} alt="Award" /></div>
                                <div className='item'><img src={Award04} alt="Award" /></div>
                                <div className='item'><img src={Award06} alt="Award" /></div>
                                <div className='item'><img src={Award07} alt="Award" /></div>
                                <div className='item'><img src={Award02} alt="Award" /></div>
                                {/* <div className='item'><img src={Award03} alt="Award" /></div> */}
                                <div className='item'><img src={Award} alt="Award" /></div>
                                <div className='item'><img src={Award03} alt="Award" /></div>
                                <div className='item'><img src={Award03} alt="Award" /></div>
                                <div className='item'><img src={Award07} alt="Award" /></div>
                                <div className='item'><img src={Award03} alt="Award" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
