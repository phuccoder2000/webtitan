import React from 'react'
import Award from '../data/image/images/Award_01.png'
import Award04 from '../data/image/images/Award_04.png'
import Award08 from '../data/image/images/Award_08.png'

export default class AsRecognizedBy extends React.Component {
    render() {
        return (
            <div>
                <div className="full-box full-box-2">
                    <div className="row2 ">
                        <h5>
                            As Recognized By
                        </h5>
                        <div className="row2">
                            <li><img src={Award} alt="Award" /></li>
                            <li><img src={Award04} alt="Award04 " /></li>
                            <li><img src={Award08} alt="Award08 " /></li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
