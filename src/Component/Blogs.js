import React from 'react'
import newYear from '../data/image/images/2022_Titan_Lunar_New_Year_Wish_0.png'
import Tax from '../data/image/images/20220607_2020_Tax_Compliance_Awards_0.jpeg'
import Tax1 from '../data/image/images/20220607_2020_Tax_Compliance_Awards_1.jpeg'
import Tax3 from '../data/image/images/A-developers-tale-of-deadlines-and-fantasy-time-estimates-01.jpg'
import Tax2 from '../data/image/images/5-Tech-Trends-in-Healthcare-and-Medical-App-Development-01.jpg'



export default class Blogs extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-2">
                    <h2><a>NEWS & EVENTS</a></h2>
                    <div className="row1 ">
                        <div className="colmain3 ">
                            <div>
                                <a href=" ">
                                    <img src={Tax} alt="Tax" /></a>
                                <h4 className='initial'>2020 TAX COMPLIANCE AWARDS</h4>
                                <p>Titan Technology Corporation won the “2020 Tax Compliance Excellence Award” and the “2020 Taxation Responsibility Fulfillment Excellence Awa ...</p>
                            </div>
                        </div>
                        <div className="colmain3 ">
                            <div >
                                <a href=" ">
                                    <img src={newYear} alt="newYear" /></a>
                                <h4 className='initial'>WELCOMING THE YEAR OF THE TIGER</h4>
                                <p>Tiger is a confident, enthusiastic, courageous, and competitive animal. 2022 is the Year of the Tiger. Titan Technology wishes you a new yea ...</p>
                            </div>
                        </div>
                        <div className="colmain3 ">
                            <div>
                                <a href=" ">
                                    <img src={Tax1} alt="Tax1" /></a>
                                <h4 className='initial'>CHARITABLE GIVING IN CELEBRATION OF THE YEAR OF TIGER</h4>
                                <p>Lunar New Year is almost upon us. Family, friends, and spreading goodwill and cheer are what the holidays really mean. Being a socially cons ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box-2">
                    <h2><a>BLOGS</a></h2>
                    <div className="row1 ">
                        <div className="colmain3 ">
                            <a href=" ">
                                <img src={Tax2} alt="Tax2" /></a>
                            <h4 className='initial'>5 TECH TRENDS IN HEALTHCARE AND MEDICAL APP DEVELOPMENT</h4>
                            <p><span className='spanBlog'>By Admin - 10/06/2021 </span> <br />
                                There are many medical apps on the market, every day there are more and more healthcare startups. If you decide to create a medical app, you need to think outside the box and you need to....</p>
                        </div>
                        <div className="colmain3 ">
                            <div >
                                <a href=" ">
                                    <img src={Tax3} alt=" Tax3" /></a>
                                <h4 className='initial'>A DEVELOPER’S TALE OF DEADLINES AND FANTASY TIME ESTI …</h4>
                                <p><span className='spanBlog'>By Admin - 10/06/2021 </span> <br />
                                    You were asked to write a program, and during the discovery phase of the discussions, you were asked how long it was going to take...</p>
                            </div>
                        </div>
                        <div className="colmain3 ">
                            <div >
                                <a href=" ">
                                    <img src="./image/slider-imgs/A-Practical-Guide-to-Better-Code-Reviews-01.jpg" alt=" " /></a>
                                <h4 className='initial'>A PRACTICAL GUIDE TO BETTER CODE REVIEWS</h4>
                                <p><span className='spanBlog'>By Admin - 10/06/2021 </span> <br />
                                    A code review is a part of the development process in which a developer and their colleagues work together and look for bugs within some code...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
