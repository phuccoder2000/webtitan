import React from 'react'
import hiring from '../data/image/images/hiring.jpg'
export default class LatestJobs extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-2">
                    <h2><a href=''>LATEST JOBS</a></h2>
                    <div className="row2">
                        <div className='LATEST'>
                            <a><img src={hiring} alt=" " /></a>
                        </div>
                        <div>
                        <div>
                            <p>
                                Titan Technology Corporation is the place where we care about individuals. We offer a friendly, challenging, and collaborative home, where every staff is well-treated, enjoy valuable benefits and willing to share ownership with us.
                            </p>
                        </div>
                        <div className='join'>
                        <button className="btn-join ">JOIN US</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
