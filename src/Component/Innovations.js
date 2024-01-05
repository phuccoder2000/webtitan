import React from 'react'
import innovation from '../data/image/images/innovation.jpg'
export default class Innovations extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-2">
                    <h2><a>INNOVATIONS</a> </h2>
                    <div className="items">
                        <div className="item">
                            <img src={innovation} alt="#" />
                            <p>
                                We always hunger for new idea creation by providing facilities
                                for product development and an environment where creativity
                                leverages our skills and services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
