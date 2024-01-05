import React from 'react'
import teams from '../data/image/images/teams.png'
import cost from '../data/image/images/cost.png'
import time from '../data/image/images/time.png'

export default class EngagementModels extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-1">
                    <h2><a href=''>ENGAGEMENT MODELS</a></h2>
                    <p>
                        We provide flexible business engagement models for offshore software
                        testing and development services. They can be altered or combined at
                        any stages of the business engagement.
                    </p>
                    <div className="items">
                        <div className="item">
                            <img src={teams} alt="#" />
                            <h3 className="border">DEDICATED TEAM</h3>
                            <h4>Dedicated professional team work for your projects.</h4>
                            <p>Virtual extension of your engineering team.</p>
                            <h4>Flexible task assignments based on your needs.</h4>
                            <p>Stable and scalable resources.</p>
                            <h4>Budget is measured in man-months.</h4>
                            <p>
                                The separate team of professionals will work over your project.
                            </p>
                        </div>
                        <div className="item">
                            <img src={cost} alt="#" />
                            <h3 className="border">FIXED COST</h3>
                            <h4>Task assignments are defined clearly at the requirements.</h4>
                            <p>Project schedule is planned clearly.</p>
                            <h4>Budget is fixed based on requirements.</h4>
                            <p>Fixed project budget measured in man hours and time limits.</p>
                        </div>
                        <div className="item">
                            <img src={time} alt="#" />
                            <h3 className="border">TIME MATERIAL</h3>
                            <h4>
                                Flexible task assignments based on your needs within time
                                limits.
                            </h4>
                            <p>Adjustable and designated resources.</p>
                            <h4>
                                Budget is flexible and can be adjusted based on your
                                requirements.
                            </h4>
                            <p>Stable and scalable resources.</p>
                            <h4>Budget is measured in man-months.</h4>
                            <p>
                                Project budget is flexible and can be adjusted according to your
                                requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
