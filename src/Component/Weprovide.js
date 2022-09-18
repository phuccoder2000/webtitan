import React from 'react'
import service1 from '../data/image/images/service1.png'
import service2 from '../data/image/images/service2.png'
import service3 from '../data/image/images/service3.png'

export default class Weprovide extends React.Component {
    render() {
        return (
            <div>
                <div className="box box-1">
                    <h2>WE PROVIDE</h2>
                    <p>
                        Professional and trusted services with cost-effective and
                        exceptional expertise to deal with any complexities in scalable
                        projects
                    </p>
                    <div className="items">
                        <div className="item">
                            <img src={service1} alt="#" />
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>
                                Develop software applications from business ideas to deployment,
                                develop based on product definition, the initial designs, or
                                develop modules with multiple teams for concurrent development
                                thus reducing time to market.
                            </p>
                        </div>
                        <div className="item">
                            <img src={service2} alt="#" />
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>
                                Develop software applications from business ideas to deployment,
                                develop based on product definition, the initial designs, or
                                develop modules with multiple teams for concurrent development
                                thus reducing time to market.
                            </p>
                        </div>
                        <div className="item">
                            <img src={service3} alt="#" />
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>
                                Develop software applications from business ideas to deployment,
                                develop based on product definition, the initial designs, or
                                develop modules with multiple teams for concurrent development
                                thus reducing time to market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
